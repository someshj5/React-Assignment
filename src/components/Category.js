import React from "react";
import logo from "../logo-icon.png";
export default function Category({ category }) {
  let categoryNames =
    category.length > 0 &&
    category.map((cat, idx) => {
      const categorySlug = cat.replace(/\s/g, "-");
      return (
        <div key={idx} className=" px-2 fs-24 my-3">
          <div className="mb-2">
            <img src={logo} alt={logo} height="200" width="200" />
          </div>
          <a className="btn" href={`category/${categorySlug}`}>
            {cat}
          </a>
        </div>
      );
    });
  return (
    <div className="container my-5 py-5">
      <div>
        <h2>Categories</h2>
      </div>
      {category.length > 0 ? (
        <div className="cursor-pointer row justify-content-center py-5">
          {categoryNames}
        </div>
      ) : (
        <div className="fs-18  py-5">Please wait! Fetching Categories</div>
      )}
    </div>
  );
}
