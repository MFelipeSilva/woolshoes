"use client";

import { useQuery } from "react-query";

import Link from "next/link";

import { Col, Row } from "antd";

import { Layout } from "@/layout";

import { getProducts } from "../api/products";

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
} from "./styles";

export default function Products() {
  const { data: product, isLoading, error } = useQuery("products", getProducts);

  return (
    <Layout>
      <Container>
        <Sidebar></Sidebar>
        <ProductsContent>
          <SwitchGender>
            <Link href="/products/homens">Homem</Link>{" "}
            <Link href="/products/mulheres">Mulher</Link>
          </SwitchGender>
          <Row gutter={[30, 40]}>
            {Array.isArray(product)
              ? product.slice(0, 9).map((productItem: ProductType) => (
                  <Col xxl={8} xl={12} lg={12} key={productItem.id}>
                    <Link href={`/products/${productItem.slug}`}>
                      <CardProducts
                        cover={
                          <Image
                            src={productItem.imageUrls[0]}
                            alt="product images"
                          />
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
