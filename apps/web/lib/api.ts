import axios from "axios";

import { LoginUserType, RegisterUserType } from "@/types/UserType";

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

export const postRegisterUser = async ({
  name,
  email,
  password,
  confirmPassword,
}: RegisterUserType) => {
  const { data } = await axios.post(`${apiUrl}/register`, {
    name,
    email,
    password,
    confirmPassword,
  });
  return data;
};

export const postLoginUser = async ({ email, password }: LoginUserType) => {
  const { data } = await axios.post(`${apiUrl}/login`, {
    email,
    password,
  });
  return data;
};
