"use client";

import { useQuery } from "react-query";

import Link from "next/link";

import { Col, Row } from "antd";

import { Layout } from "@/layout";

import { getProducts } from "../services/apiFunctions";

import { ProductType } from "@/types/ProductType";

import { formatPrice } from "@helpers/formatPrice";

import {
  DescriptionSkeleton,
  CardMetaSkeleton,
  ProductsCardSkeleton,
  TitleSkeleton,
} from "@components/Skeletons/ProductsSkeleton";

import {
  Container,
  ProductsContent,
  ProductsCard,
  MetaProducts,
  Image,
  Sidebar,
  SwitchGender,
  ProductsHeader,
} from "./styles";

export default function Products() {
  const { data: products, isLoading } = useQuery("products", getProducts) as {
    data: ProductType[];
    isLoading: boolean;
  };

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
            {isLoading || !products
              ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
                  <Col xxl={8} xl={12} lg={12} key={index}>
                    <ProductsCardSkeleton>
                      <CardMetaSkeleton>
                        <TitleSkeleton sizes="default" />
                        <DescriptionSkeleton sizes="default" />
                      </CardMetaSkeleton>
                    </ProductsCardSkeleton>
                  </Col>
                ))
              : products.slice(0, 9).map((product: ProductType) => (
                  <Col xxl={8} xl={12} lg={12} key={product.id}>
                    <Link href={`/products/${product.slug}`}>
                      <ProductsCard
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
                      </ProductsCard>
                    </Link>
                  </Col>
                ))}
          </Row>
        </ProductsContent>
      </Container>
    </Layout>
  );
}
