"use client";

import { useQuery } from "react-query";

import Link from "next/link";

import { Col, Row } from "antd";

import { Layout } from "@/layout";

import { getProducts } from "@services/api/getProducts";

import { ProductType } from "@/types/ProductType";

import { formatPrice } from "@/utils/formatPrice";

import {
  Container,
  ProductsContent,
  CardProducts,
  MetaProducts,
  Image,
  Sidebar,
  SwitchGender,
} from "./styles";

export default function Products() {
  const {
    data: product,
    isLoading,
    error,
  } = useQuery("products", () => getProducts());

  return (
    <Layout>
      <Container>
        <Sidebar></Sidebar>
        <ProductsContent>
          <SwitchGender>
            <Link href="/products">Homem</Link>{" "}
            <Link href="/products">Mulher</Link>
          </SwitchGender>
          <Row gutter={[30, 40]}>
            {Array.isArray(product)
              ? product.map((productItem: ProductType) => (
                  <Col xxl={8} xl={12} lg={12} key={productItem.id}>
                    <Link href={`/products/${productItem.id}`}>
                      <CardProducts
                        cover={
                          <Image src={productItem.image} alt="product images" />
                        }
                      >
                        <MetaProducts
                          title={productItem.name}
                          description={formatPrice(productItem.price)}
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
