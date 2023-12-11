"use client";

import GlobalStyle from "@styles/global";

import { metadata } from "../../lib/metadata";

import { QueryClientProvider } from "react-query";

import { queryClient } from "@lib/queryClient";

import { CartProvider } from "@providers/cart";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title dangerouslySetInnerHTML={{ __html: metadata.title || "" }} />
        <meta name="description" content={metadata.description || undefined} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <CartProvider>{children}</CartProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
