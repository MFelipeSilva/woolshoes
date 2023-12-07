import axios from "axios";

export const getProducts = async () => {
  const { data } = await axios.get("http://localhost:3001/products");
  return data;
};

export const getProductSlug = async (slug: string) => {
  const { data } = await axios.get(`http://localhost:3001/products/${slug}`);
  return data;
};
