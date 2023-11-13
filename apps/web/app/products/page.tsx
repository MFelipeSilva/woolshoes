"use client";

import { useQuery } from "react-query";

import Link from "next/link";

import { Col, Row } from "antd";

import { Layout } from "@/layout";

import { getProducts } from "@/data/getProducts";

import { ProductType } from "@/types/ProductType";

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

export default function Products() {
  const { data, isLoading, error } =  useQuery("products", async () => await getProducts());

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
            {data?.map((product: ProductType) => (
              <Col xxl={8} xl={12} lg={12} key={product.id}>
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
