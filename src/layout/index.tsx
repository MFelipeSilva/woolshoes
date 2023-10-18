import React from "react";

import GlobalStyle from "@/styles/global";

import { Navbar } from "@/components/Navbar";

import { Container } from "./styles";

export const Layout = ({ children }: any) => {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      {children}
    </Container>
  );
};
