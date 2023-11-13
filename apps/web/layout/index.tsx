import React, { ReactNode } from "react";

import GlobalStyle from "@/styles/global";

import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

import { Container as LayoutContainer } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </LayoutContainer>
  );
}
