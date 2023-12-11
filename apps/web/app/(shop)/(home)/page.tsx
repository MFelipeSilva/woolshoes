"use client";

import { useQuery } from "react-query";

import Link from "next/link";

import { Layout } from "@/layout";

import { getProducts } from "../services/apiFunctions";

import { purchaseAdvantages } from "@helpers/purchaseAdvantages";

import { ProductType } from "@/types/ProductType";

import { Carousel } from "@/components/Carousel";

import { PrimaryButton } from "@/components/Buttons/PrimaryButton";

import {
  Content,
  Section,
  Title,
  Advantage,
  AdvantageIcon,
  AdvantageContent,
  AdvantageTitle,
  AdvantageDescription,
  AdvantageTexts,
  AdvantageContainer,
  Icon,
  Image,
  CardProducts,
  MetaProducts,
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
  const {
    data: products,
    isLoading,
    error,
  } = useQuery("products", getProducts);

  return (
    <Layout>
      <Container>
        <Content>
          <BannerContent>
            <MainAnnouncement src="https://uploaddeimagens.com.br/images/004/647/123/full/1d461901-923e-462c-a9e9-b4166e76e1b1.jpg?1698244824" />
            <BannerHeader>
              <BannerTitle>Tênis confortaveis e de alta qualidade.</BannerTitle>
              <Link href="/products">
                <PrimaryButton type="primary">Conferir produtos</PrimaryButton>
              </Link>
            </BannerHeader>
            <Categories>
              <CategoriesContent>
                <CategoriesTitle>Categorias</CategoriesTitle>
                <Category>
                  <Link href="/">Calçados Femininos</Link>
                </Category>
                <Category>
                  <Link href="/products">Calçados Masculinos</Link>
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
                {Array.isArray(products)
                  ? products.slice(0, 8).map((product: ProductType) => (
                      <Link key={product.id} href={`products/${product.slug}`}>
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
                            description={product.description}
                          />
                        </CardProducts>
                      </Link>
                    ))
                  : ""}
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
        <Section $page={3}>
          <AdvantageContainer>
            <Title>Vantagens de comprar no nosso site</Title>
            <AdvantageContent>
              {purchaseAdvantages.map((advantage) => (
                <Advantage key={advantage.id}>
                  <AdvantageIcon>
                    <Icon src={advantage.icon} />
                  </AdvantageIcon>
                  <AdvantageTexts>
                    <AdvantageTitle>{advantage.title}</AdvantageTitle>
                    <AdvantageDescription>
                      {advantage.description}
                    </AdvantageDescription>
                  </AdvantageTexts>
                </Advantage>
              ))}
            </AdvantageContent>
          </AdvantageContainer>
        </Section>
      </Container>
    </Layout>
  );
}
