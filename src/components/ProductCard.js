import React from "react";
import LazyLoad from "react-lazyload";
import { truncateString } from "../utils/helper";

export default function ProductCard({ product, handleProductClick, idx }) {
  return (
    <div key={idx} className="mb-3 mt-4 px-3 border p-5">
      <div className="col-6 ">
        <div onClick={(e) => handleProductClick(e)} className="">
          <a href={`/product/${product.id}`}>
            <LazyLoad offset={300}>
              {product.image && (
                <img
                  height="300px"
                  width="200px"
                  src={product.image}
                  alt={product.title}
                />
              )}
            </LazyLoad>
          </a>
          <a
            href={`/product/${product.id}`}
            className=" fs-18 text-decoration-none fc-blue-link text-center text-nowrap text-center  mt-5 py-3 "
          >
            {truncateString(product.title, 15)}
          </a>
          <p className="fc-red229  text-center">{product.price}$</p>
        </div>
      </div>
    </div>
  );
}
