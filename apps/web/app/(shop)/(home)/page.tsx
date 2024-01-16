"use client";

import { useQuery } from "react-query";

import Link from "next/link";

import { Layout } from "@layout";

import { getCategory } from "@lib/api";

import { ProductType } from "@/types/ProductType";
import { CategoryType } from "@/types/CategoryType";

import { Carousel } from "@/components/Carousel";
import { Advantages } from "@components/Advantages";

import { PrimaryButton } from "ui";

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
  Image,
  ProductCard,
  CardMeta,
  CarouselContainer,
  CarouselContent,
  Category,
  Categories,
  CategoriesTitle,
  MainAnnouncement,
  OtherAnnouncement,
  Banner,
  SecondaryBannerContent,
  BannerTitle,
  BannerHeader,
  BannerContent,
  CategoriesContent,
  TitleContainer,
  Container,
} from "./styles";

export default function Home() {
  const { data: category, isLoading } = useQuery("category", () =>
    getCategory("men")
  ) as { data: CategoryType; isLoading: boolean };

  return (
    <Layout>
      <Container>
        <Content>
          <BannerContent>
            <MainAnnouncement src="https://uploaddeimagens.com.br/images/004/647/123/full/1d461901-923e-462c-a9e9-b4166e76e1b1.jpg?1698244824" />
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
                  <Link href="/">Calçados Femininos</Link>
                </Category>
                <Category>
                  <Link href="/category">Calçados Masculinos</Link>
                </Category>
                <Category>
                  <Link href="/">Calçados Infantis</Link>
                </Category>
              </CategoriesContent>
            </Categories>
            <OtherAnnouncement src="https://i5.walmartimages.com/asr/9e444317-e0d6-4719-a3b0-bb693bce266b.5396b002879f4167c1f93a7710fa259d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" />
          </BannerContent>
        </Content>
        <Section $page={1}>
          <TitleContainer>
            <Title>Nossos lançamentos</Title>
          </TitleContainer>
          <CarouselContainer>
            <CarouselContent>
              <Carousel>
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
                          href={`/product/${product.slug}`}
                        >
                          <ProductCard
                            cover={
                              <Image
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
          <Title>Produtos relevantes</Title>
          <SecondaryBannerContent>
            <Banner src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_2048/cms/5fpkfzYQ5cQnhuIz1VFU67/1266845421d7e9876b6375fbf91a4280/23Q4-ZombiePack-Secondary-Hero-Desktop.jpg" />
          </SecondaryBannerContent>
        </Section>
      </Container>
      <Advantages />
    </Layout>
  );
}
