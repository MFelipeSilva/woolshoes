"use client";

import Link from "next/link";

import { Layout } from "@/layout";

import { products } from "@/data/products";
import { purchase_advantage } from "@/data/purchase-advantage";

import { Carousel } from "@/components/Carousel";

import { PrimaryButton } from "@/components/Buttons/PrimaryButton";

import {
  MainAnnouncement,
  Content,
  BannerContent,
  OtherAnnouncement,
  Section,
  Title,
  Advantage,
  AdvantageIcon,
  AdvantageContent,
  AdvantageTitle,
  AdvantageDescription,
  CardProducts,
  Image,
  CarouselContent,
  MetaProducts,
  CarouselContainer,
  Banner,
  SecondaryBannerContent,
  Categories,
  CategoriesTitle,
  Category,
  AdvantageTexts,
  AdvantageContainer,
  Icon,
  BannerHeader,
  BannerTitle,
} from "./styles";

export default function Home() {
  return (
    <Layout>
      <Content>
        <BannerContent>
          <BannerHeader>
            <BannerTitle>Tênis confortaveis e de alta qualidade.</BannerTitle>
            <PrimaryButton type="primary" size="large">
              Conferir produtos
            </PrimaryButton>
          </BannerHeader>
          <MainAnnouncement src="https://uploaddeimagens.com.br/images/004/647/123/full/1d461901-923e-462c-a9e9-b4166e76e1b1.jpg?1698244824" />
          <Categories>
            <CategoriesTitle>CATEGORIAS</CategoriesTitle>
            <Category>
              <Link href={"/"}>Calçados Femininos</Link>
            </Category>
            <Category>
              <Link href={"/"}>Calçados Masculinos</Link>
            </Category>
            <Category>
              <Link href={"/"}>Calçados Infantis</Link>
            </Category>
          </Categories>
          <OtherAnnouncement src="https://i5.walmartimages.com/asr/9e444317-e0d6-4719-a3b0-bb693bce266b.5396b002879f4167c1f93a7710fa259d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" />
        </BannerContent>
      </Content>
      <Section page={1}>
        <CarouselContainer>
          <Title>Nossos lançamentos</Title>
          <CarouselContent>
            <Carousel>
              {products.map((product) => (
                <CardProducts
                  key={product.id}
                  cover={<Image src={product.src} alt="product images" />}
                >
                  <MetaProducts
                    title={product.title}
                    description={product.description}
                  />
                </CardProducts>
              ))}
            </Carousel>
          </CarouselContent>
        </CarouselContainer>
      </Section>
      <Section page={2}>
        <Title>Produtos relevantes</Title>
        <SecondaryBannerContent>
          <Banner src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_2048/cms/5fpkfzYQ5cQnhuIz1VFU67/1266845421d7e9876b6375fbf91a4280/23Q4-ZombiePack-Secondary-Hero-Desktop.jpg" />
        </SecondaryBannerContent>
      </Section>
      <Section page={3}>
        <AdvantageContainer>
          <Title>Vantagens de comprar no nosso site</Title>
          <AdvantageContent>
            {purchase_advantage.map((advantage) => (
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
    </Layout>
  );
}