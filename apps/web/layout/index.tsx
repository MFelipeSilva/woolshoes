import React, { ReactNode } from "react";

import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Advantages } from "@components/Advantages";

import { Container as LayoutContainer } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Navbar />
      {children}
      <Advantages />
      <Footer />
    </LayoutContainer>
  );
}
