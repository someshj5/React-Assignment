import { fetchGet } from "./serviceClient";

export const getAllUsers = async () => {
  return await fetchGet(`https://fakestoreapi.com/users?limit=5`);
};
