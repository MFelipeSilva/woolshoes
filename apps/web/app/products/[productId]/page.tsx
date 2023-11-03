"use client";

import React from "react";

import { Col, Row } from "antd";

import { Layout } from "@/layout";

import { getProducts } from "@/data/getProducts";

import { formatPrice } from "@/utils/formatPrice";

import {
  CardProducts,
  Container,
  Content,
  MetaProducts,
  Sidebar,
  Image,
} from "./styles";

export default async function Products() {
  const products = await getProducts();

  return (
    <Layout>
      <Container>
        <Sidebar></Sidebar>
        <Content>
          <Row gutter={[30, 40]}>
            {products.map((product) => (
              <Col span={8} key={product.id}>
                <CardProducts
                  cover={<Image src={product.image} alt="product images" />}
                >
                  <MetaProducts
                    title={product.name}
                    description={formatPrice(product.price)}
                  />
                </CardProducts>
              </Col>
            ))}
          </Row>
        </Content>
      </Container>
    </Layout>
  );
}
