import React from "react";
import ProductCard from "./ProductCard";

export default function WomensClothing({ productsList }) {
  let womenClothingItemsArr =
    productsList.length > 0 &&
    productsList.filter((product) => {
      if (product.category === "women clothing") {
        return product;
      }
      return null;
    });

  let womenClothingItems =
    womenClothingItemsArr.length > 0 &&
    womenClothingItemsArr.map((womens, idx) => {
      return (
        <ProductCard
          idx={idx}
          //   handleProductClick={handleProductClick}
          product={womens}
        />
      );
    });
  return (
    <>
      <div className="fs-24 fc-red ff-montserrat my-5 fw-500">
        <h2>Womens Clothing</h2>
      </div>
      <div className="row justify-content-center mx-2 ml-4">
        {womenClothingItemsArr.length > 0 ? (
          womenClothingItems
        ) : (
          <div>Please wait</div>
        )}
      </div>
    </>
  );
}
