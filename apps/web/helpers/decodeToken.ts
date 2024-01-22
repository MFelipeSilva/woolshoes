import { Secret, verify } from "jsonwebtoken";

import { DecodedUserType } from "@/types/UserType";

export const decodeToken = (token: string) => {
  const secretKey: Secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY as Secret;

  try {
    const decoded = verify(token, secretKey) as DecodedUserType;
    return decoded;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
