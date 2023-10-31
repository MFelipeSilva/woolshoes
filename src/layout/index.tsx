import React from "react";

import GlobalStyle from "@/styles/global";

import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

import { Container as LayoutContainer } from "./styles";

export const Layout = ({ children }: any) => {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </LayoutContainer>
  );
};
