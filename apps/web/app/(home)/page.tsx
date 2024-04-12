"use client";

import { useState } from "react";

import { useQuery } from "react-query";

import Link from "next/link";
import Image from "next/image";

import { Layout } from "@layout";

import { getCategory } from "@lib/api";

import { ProductType } from "@/types/ProductType";
import { CategoryType } from "@/types/CategoryType";

import { Carousel } from "@/components/Carousel";
import { Advantages } from "@components/Advantages";

import { PrimaryButton } from "ui";

import banner_home_01 from "@public/banner-home-01.png";
import banner_home_02 from "@public/banner-home-02.png";

import {
  ProductCardSkeleton,
  CardMetaSkeleton,
  TitleSkeleton,
  DescriptionSkeleton,
} from "@components/Skeletons/ProductsSkeleton";

import {
  Content,
  Section,
  Title,
  Img,
  ProductCard,
  CardMeta,
  CarouselContainer,
  CarouselContent,
  Category,
  Categories,
  CategoriesTitle,
  SecondaryBannerContent,
  BannerTitle,
  BannerHeader,
  BannerContent,
  CategoriesContent,
  TitleContainer,
  Container,
} from "./styles";

export default function Home() {
  const { data: category, isLoading } = useQuery(
    "category",
    () => getCategory("men"),
    {
      enabled: true,
      cacheTime: 0,
    }
  ) as { data: CategoryType; isLoading: boolean };

  const [dragging, setDragging] = useState(false);

  const handleLinkClick = (e: any) => {
    if (dragging) {
      e.preventDefault();
    }
  };

  return (
    <Layout>
      <Container>
        <Content>
          <BannerContent>
            <Image
              className="banner-01"
              src={banner_home_01}
              alt="banner home"
            />
            <BannerHeader>
              <BannerTitle>Tênis confortaveis e de alta qualidade.</BannerTitle>
              <Link href="/category/men">
                <PrimaryButton>Conferir produtos</PrimaryButton>
              </Link>
            </BannerHeader>
            <Categories>
              <CategoriesContent>
                <CategoriesTitle>Categorias</CategoriesTitle>
                <Category>
                  <Link href="category/women">Calçados Femininos</Link>
                </Category>
                <Category>
                  <Link href="category/men">Calçados Masculinos</Link>
                </Category>
                <Category>
                  <Link href="category/kids">Calçados Infantis</Link>
                </Category>
              </CategoriesContent>
            </Categories>
          </BannerContent>
        </Content>
        <Section $page={1}>
          <TitleContainer>
            <Title>Nossos lançamentos</Title>
          </TitleContainer>
          <CarouselContainer>
            <CarouselContent>
              <Carousel setDragging={setDragging}>
                {isLoading || !category.products
                  ? [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                      <ProductCardSkeleton key={index}>
                        <CardMetaSkeleton>
                          <TitleSkeleton />
                          <DescriptionSkeleton />
                        </CardMetaSkeleton>
                      </ProductCardSkeleton>
                    ))
                  : category?.products
                      ?.slice(0, 8)
                      .map((product: ProductType) => (
                        <Link
                          key={product.id}
                          onClick={handleLinkClick}
                          href={`/product/${product.slug}`}
                        >
                          <ProductCard
                            cover={
                              <Img
                                src={product.imageUrls[0]}
                                alt="product images"
                              />
                            }
                          >
                            <CardMeta
                              title={product.name}
                              description={product.description}
                            />
                          </ProductCard>
                        </Link>
                      ))}
              </Carousel>
            </CarouselContent>
          </CarouselContainer>
        </Section>
        <Section $page={2}>
          <Title>Modelos esportivos</Title>
          <SecondaryBannerContent>
            <Image
              className="banner-02"
              src={banner_home_02}
              alt="banner home"
            />
          </SecondaryBannerContent>
        </Section>
      </Container>
      <Advantages />
    </Layout>
  );
}
