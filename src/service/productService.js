import { fetchGet } from "./serviceClient";

export const getAllProducts = async () => {
  return await fetchGet(`https://fakestoreapi.com/products`);
};

export const getProduct = async (id) => {
  return await fetchGet(`https://fakestoreapi.com/products/${id}`);
};
