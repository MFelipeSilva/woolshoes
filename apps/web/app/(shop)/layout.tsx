import type { Metadata } from "next";

import { Layout } from "@layout";

export const metadata: Metadata = {
  title: "Woolshoes",
  description: "woolshoes | e-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
