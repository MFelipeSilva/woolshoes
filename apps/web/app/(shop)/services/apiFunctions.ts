import axios from "axios";

export const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

export const getProductSlug = async (slug: string) => {
  const { data } = await axios.get(`/api/products/${slug}`);
  return data;
};
