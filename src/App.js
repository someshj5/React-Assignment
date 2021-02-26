import { useEffect, useState } from "react";
import "./App.css";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import { Products } from "./components/Products";
import { getAllProducts } from "./service/productService";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WomensClothing from "./components/WomensClothing";
import MensClothing from "./components/MensClothing";
import Jewelery from "./components/Jewelery";
import Electronics from "./components/Electronics";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import Admin from "./components/Admin";

function App() {
  const [productsList, setPRoductsList] = useState([]);
  const [category, setCategory] = useState([]);

  const getProducts = async () => {
    try {
      const resp = await getAllProducts();
      let catArr = [];
      if (resp.length > 0) {
        let arr = resp;
        setPRoductsList(resp);
        arr.forEach((element) => {
          if (!catArr.includes(element.category)) {
            catArr.push(element.category);
          }
        });
        setCategory(catArr);
      }
    } catch (err) {
      console.log(err, `Something went wrong! ${err}`);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route exact path="/">
            <Category category={category.length > 0 && category} />
          </Route>
          <Route exact path="/category/men-clothing">
            <MensClothing
              productsList={productsList.length > 0 && productsList}
            />
          </Route>
          <Route path="/category/women-clothing">
            <WomensClothing
              productsList={productsList.length > 0 && productsList}
            />
          </Route>
          <Route path="/category/jewelery">
            <Jewelery productsList={productsList.length > 0 && productsList} />
          </Route>
          <Route path="/category/electronics">
            <Electronics
              productsList={productsList.length > 0 && productsList}
            />
          </Route>
          <Route path="/products">
            <Products productsList={productsList.length > 0 && productsList} />
          </Route>
          <Route path="/product/:id">
            <ProductDetail />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
