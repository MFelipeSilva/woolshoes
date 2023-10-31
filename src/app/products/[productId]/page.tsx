"use client";

import React from "react";

import { Col, Row } from "antd";

import { Layout } from "@/layout";

import { products } from "@/data/products";

import {
  CardProducts,
  Container,
  Content,
  MetaProducts,
  Sidebar,
  Image,
} from "./styles";

export default function Products() {
  return (
    <Layout>
      <Container>
        <Sidebar></Sidebar>
        <Content>
          <Row gutter={[30, 40]}>
            {products.map((product) => (
              <Col span={8} key={product.id}>
                <CardProducts
                  cover={<Image src={product.src} alt="product images" />}
                >
                  <MetaProducts
                    title={product.title}
                    description={`R$${product.price}`}
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
