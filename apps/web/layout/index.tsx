import React, { ReactNode } from "react";

import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

import { Container as LayoutContainer } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Navbar />
      {children}
      <Footer />
    </LayoutContainer>
  );
}
