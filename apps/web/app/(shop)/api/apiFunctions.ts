import axios from "axios";

export const getProduct = async (slug: string) => {
  const { data } = await axios.get(
    `https://woolshoes-api.onrender.com/product/${slug}`
  );
  return data;
};

export const getCategory = async (slug: string) => {
  const { data } = await axios.get(
    `https://woolshoes-api.onrender.com/category/${slug}`
  );
  return data;
};
