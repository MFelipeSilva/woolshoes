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

export const getCategory = async (slug1: string, slug2?: string) => {
  const url = !slug2
    ? `${apiUrl}/category/${slug1}`
    : `${apiUrl}/category/${slug1}/${slug2}`;
  const { data } = await axios.get(url);
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
  try {
    const { data } = await axios.post(`${apiUrl}/login`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
