import axios from "axios";

export const getProduct = async (slug: string) => {
  const { data } = await axios.get(`http://localhost:3001/product/${slug}`);
  return data;
};

export const getCategory = async (slug: string) => {
  const { data } = await axios.get(`http://localhost:3001/category/${slug}`);
  return data;
};
