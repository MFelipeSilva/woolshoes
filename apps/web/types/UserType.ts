export type RegisterUserType = {
  name?: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginUserType = {
  email: string;
  password: string;
};

export interface DecodedUserType {
  id: string;
  name: string;
  email: string;
  iat: number;
}

export type UserType = {
  id: string;
  name: string | null;
  email: string;
  password?: string;
};
