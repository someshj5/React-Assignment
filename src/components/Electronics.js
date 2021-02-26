import React from "react";
import ProductCard from "./ProductCard";

export default function Electronics({ productsList }) {
  let electronicsItemsArray =
    productsList.length > 0 &&
    productsList.filter((product) => {
      if (product.category === "electronics") {
        return product;
      }
      return null;
    });

  const handleProductClick = () => {};

  let ElectronicItems =
    electronicsItemsArray.length > 0 &&
    electronicsItemsArray.map((electronic, idx) => {
      return (
        <ProductCard
          idx={idx}
          handleProductClick={handleProductClick}
          product={electronic}
        />
      );
    });
  return (
    <>
      <div className="fs-24 fc-red ff-montserrat my-5 fw-500">
        <h2>Electronics</h2>
      </div>
      <div className="row justify-content-center mx-2 ml-4">
        {ElectronicItems.length > 0 ? ElectronicItems : <div>Please wait</div>}
      </div>
    </>
  );
}
