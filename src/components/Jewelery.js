import React from "react";
import ProductCard from "./ProductCard";

export default function Jewelery({ productsList }) {
  let jeweleryItemsArray =
    productsList.length > 0 &&
    productsList.filter((product) => {
      if (product.category === "jewelery") {
        return product;
      }
      return null;
    });

  const handleProductClick = () => {};

  let jeweleryItems =
    jeweleryItemsArray.length > 0 &&
    jeweleryItemsArray.map((jewels, idx) => {
      return (
        <ProductCard
          idx={idx}
          handleProductClick={handleProductClick}
          product={jewels}
        />
      );
    });
  return (
    <>
      <div className="fs-24 fc-red ff-montserrat my-5 fw-500">
        <h2>Jewelery</h2>
      </div>
      <div className="row justify-content-center mx-2 ml-4">
        {jeweleryItems.length > 0 ? jeweleryItems : <div>Please wait</div>}
      </div>
    </>
  );
}
