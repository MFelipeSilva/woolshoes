import axios from "axios";

const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL_PRODUCTION
    : process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT;

export const getProduct = async (slug: string) => {
  const { data } = await axios.get(`${apiUrl}/product/${slug}`);
  return data;
};

export const getCategory = async (slug: string) => {
  const { data } = await axios.get(`${apiUrl}/category/${slug}`);
  return data;
};
