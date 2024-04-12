"use client";

import type { ReactNode } from "react";

import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

import { Container } from "./styles";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};
