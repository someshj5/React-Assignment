import React from "react";
import ProductCard from "./ProductCard";

export default function MensClothing({ productsList }) {
  let menClothingItemsArr =
    productsList.length > 0 &&
    productsList.filter((product) => {
      if (product.category === "men clothing") {
        return product;
      }
      return null;
    });

  const handleProductClick = () => {};

  let menClothingItems =
    menClothingItemsArr.length > 0 &&
    menClothingItemsArr.map((mens, idx) => {
      return (
        <ProductCard
          idx={idx}
          handleProductClick={handleProductClick}
          product={mens}
        />
      );
    });
  return (
    <>
      <div className="fs-24 fc-red ff-montserrat my-5 fw-500">
        <h2>Mens Clothing</h2>
      </div>
      <div className="row justify-content-center mx-2 ml-4">
        {menClothingItems.length > 0 ? (
          menClothingItems
        ) : (
          <div>Please wait</div>
        )}
      </div>
    </>
  );
}
