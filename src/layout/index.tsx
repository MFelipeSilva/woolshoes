import React from "react";

import GlobalStyle from "@/styles/global";

import { Navbar } from "@/components/Navbar";

import { Container } from "./styles";
import { Footer } from "@/components/Footer";

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
