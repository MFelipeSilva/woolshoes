"use client";

import type { ReactNode } from "react";

import { QueryClientProvider } from "react-query";
import { queryClient } from "@lib/queryClient";

import { CartProvider } from "@providers/cart";

import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

import GlobalStyle from "@styles/global";

import { Container } from "./styles";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </QueryClientProvider>
    </Container>
  );
};
