"use client";

import { useQuery } from "react-query";

import Link from "next/link";

import { Col, Row } from "antd";

import { Layout } from "@/layout";

import { getProducts } from "../services/apiFunctions";

import { ProductType } from "@/types/ProductType";

import { formatPrice } from "@helpers/formatPrice";

import {
  Container,
  ProductsContent,
  CardProducts,
  MetaProducts,
  Image,
  Sidebar,
  SwitchGender,
  ProductsHeader,
} from "./styles";

export default function Products() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery("products", getProducts);

  return (
    <Layout>
      <Container>
        <Sidebar></Sidebar>
        <ProductsContent>
          <ProductsHeader>
            <SwitchGender>
              <Link href="/products/homens">Homem</Link>{" "}
              <Link href="/products/mulheres">Mulher</Link>
            </SwitchGender>
          </ProductsHeader>
          <Row gutter={[30, 40]}>
            {Array.isArray(products)
              ? products.slice(0, 9).map((product: ProductType) => (
                  <Col xxl={8} xl={12} lg={12} key={product.id}>
                    <Link href={`/products/${product.slug}`}>
                      <CardProducts
                        cover={
                          <Image
                            src={product.imageUrls[0]}
                            alt="product images"
                          />
                        }
                      >
                        <MetaProducts
                          title={product.name}
                          description={formatPrice(product.price)}
                        />
                      </CardProducts>
                    </Link>
                  </Col>
                ))
              : ""}
          </Row>
        </ProductsContent>
      </Container>
    </Layout>
  );
}
