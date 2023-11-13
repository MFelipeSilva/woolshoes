"use client";

import { Inter } from "next/font/google";
import { metadata } from "../utils/metaData";

import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

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
      </head>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
