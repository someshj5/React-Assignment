import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../service/productService";

export default function ProductDetail() {
  const [productDetail, setProductDetail] = useState(null);
  const { id } = useParams();

  const getProductDetail = async () => {
    try {
      const ProductDetailResp = await getProduct(id);
      if (ProductDetailResp) {
        setProductDetail(ProductDetailResp);
      }
    } catch (error) {
      console.log(error, "Something went wrong");
    }
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      {productDetail ? (
        <div className="container py-3">
          <div className="row">
            <div className="col-12">
              <h1
                className="ff-montserrat fw-normal f-style-normal f-stretch-normal lh1-38 l-spacing-normal
                          fs-24 fc-black31 mb-0"
              >
                {productDetail && productDetail.title}
              </h1>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div
              className="d-inline op-9 ff-barlow fs-26 fw-600 f-style-normal f-stretch-condensed lh0-8 l-spacing-normal
                               fc-black31"
            >
              <img src={productDetail.image} height="500px" width="500px" />
            </div>
          </div>
          <div
            className="d-inline op-9 ff-barlow fs-26 fw-600 f-style-normal f-stretch-condensed lh0-8 l-spacing-normal
                               fc-black31"
          >
            {productDetail.price}
            <span className=""> $</span>
          </div>
          <div className="row cursor-pointer">
            <div
              //   className="my-2 btn w-100 h-40 grad-orange-red border-radius-20 border-brick-halfpx ff-barlow fs-16 fw-600 f-style-normal f-stretch-condensed lh-normal l-spacing3-2 fc-red text-uppercase"
              className="col-12 btn  fc-red229 fw-bold"
            >
              Add to cart
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="op-9 ff-montserrat fs-16 fw-600 f-style-normal f-stretch-normal lh1-5 l-spacing0-16
                               fc-black31 mb-2 mt-3"
              >
                Product Highlights
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: productDetail.description,
                }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fs-20 ">Please Wait</div>
      )}

      {/* <ProductCard product={productDetail} /> */}
    </div>
  );
}
