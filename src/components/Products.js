import React from "react";
import ProductCard from "./ProductCard";
import { truncateString } from "../utils/helper";

export const Products = ({ productsList }) => {
  let handleProductClick = (product) => {};

  let renderProducts =
    productsList.length > 0 &&
    productsList.map((product, idx) => {
      return (
        <ProductCard
          idx={idx}
          truncateString={truncateString}
          handleProductClick={handleProductClick ? handleProductClick : null}
          product={product}
        />
      );
    });
  return (
    <div className="">
      <div className="fs-24 fc-red ff-montserrat my-5 fw-500">Products</div>
      <div className="row mx-2 ml-4">{renderProducts}</div>
    </div>
  );
};
