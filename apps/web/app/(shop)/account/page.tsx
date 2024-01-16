"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { Layout } from "@layout";

import { Container, Title } from "./styles";

export default function Account() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const getToken = localStorage.getItem("@woolshoes/access-token");
    setAccessToken(getToken);

    if (!getToken) {
      router.replace("/account/login");
    }
  }, [router]);

  return accessToken ? (
    <Layout>
      <Container>
        <Title>Minha conta</Title>
      </Container>
    </Layout>
  ) : null;
}
