import React from "react";

import GlobalStyle from "@/styles/global";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { Container } from "./styles";

export const Layout = ({ children }: any) => {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};
