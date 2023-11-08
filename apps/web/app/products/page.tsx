"use client";

import React from "react";

import Link from "next/link";

import { Col, Row } from "antd";

import { Layout } from "@/layout";

import { getProducts } from "@/data/getProducts";

import { formatPrice } from "@/utils/formatPrice";

import {
  CardProducts,
  Container,
  ProductsContent,
  MetaProducts,
  Sidebar,
  Image,
  SwitchGender,
} from "./styles";

export default async function Products() {
  const products = await getProducts();

  return (
    <Layout>
      <Container>
        <Sidebar></Sidebar>
        <ProductsContent>
          <SwitchGender>
            <Link href={"/products"}>Homem</Link>{" "}
            <Link href={"/products"}>Mulher</Link>
          </SwitchGender>
          <Row gutter={[30, 40]}>
            {products.map((product) => (
              <Col span={8} key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <CardProducts
                    cover={<Image src={product.image} alt="product images" />}
                  >
                    <MetaProducts
                      title={product.name}
                      description={formatPrice(product.price)}
                    />
                  </CardProducts>
                </Link>
              </Col>
            ))}
          </Row>
        </ProductsContent>
      </Container>
    </Layout>
  );
}
