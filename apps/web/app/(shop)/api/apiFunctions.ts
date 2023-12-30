import axios from "axios";

export const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

export const getProduct = async (slug: string) => {
  const { data } = await axios.get(`/api/product/${slug}`);
  return data;
};

export const getCategory = async (slug: string) => {
  const { data } = await axios.get(`/api/category/${slug}`);
  return data;
};
