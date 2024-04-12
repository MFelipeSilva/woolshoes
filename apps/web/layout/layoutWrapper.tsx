"use client";

import type { ReactNode } from "react";

import { QueryClientProvider } from "react-query";
import { queryClient } from "@lib/queryClient";

import { CartProvider } from "@providers/cart";

import GlobalStyle from "@styles/global";

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <CartProvider>{children}</CartProvider>
    </QueryClientProvider>
  );
};

export default LayoutWrapper;
