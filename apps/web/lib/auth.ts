import { useEffect, useState } from "react";

import { decodeToken } from "@helpers/decodeToken";

import { DecodedUserType } from "@/types/UserType";

export const useAuth = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<DecodedUserType>();

  useEffect(() => {
    const getToken = localStorage.getItem("@woolshoes/access-token");

    if (getToken) {
      setAccessToken(getToken);
      setUser(decodeToken(getToken));
    }
  }, []);

  const handleLeaveAccount = () => {
    localStorage.removeItem("@woolshoes/access-token");
    location.reload();
  };

  return { accessToken, user, handleLeaveAccount };
};
