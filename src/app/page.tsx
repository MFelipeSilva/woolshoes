"use client";

import { useRef } from "react";

import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";

import { products } from "@/data/products";
import { purchase_advantage } from "@/data/purchase-advantage";

import { Layout } from "@/layout";

import {
  MainAnnouncement,
  Content,
  ContentBanner,
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
  CardCarousel,
  CarouselButton,
  ButtonContent,
  Banner,
  ContentSecondaryBanner,
  Categories,
  CategoriesTitle,
  Category,
  AdvantageTexts,
  AdvantageContainer,
  Icon,
} from "./styles";

export default function Home() {
  const carouselRef = useRef<any>(null);

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
  };

  return (
    <Layout>
      <Content>
        <ContentBanner>
          <MainAnnouncement src="https://www.travelandleisure.com/thmb/jwKXCYzMmJWNaM2zOdPQW0F26c0=/fit-in/1500x2365/filters:no_upscale():max_bytes(150000):strip_icc()/tal-mens-travel-shoes-test-allbirds-tree-dasher-2-ivy-ford-03-344ca65ad63540ff9c4cd9a16d1ae962.jpg" />
          <Categories>
            <CategoriesTitle>CATEGORIAS</CategoriesTitle>
            <Category>Calçados Femininos</Category>
            <Category>Calçados Masculinos</Category>
            <Category>Calçados Infantis</Category>
          </Categories>
          <OtherAnnouncement src="https://i5.walmartimages.com/asr/9e444317-e0d6-4719-a3b0-bb693bce266b.5396b002879f4167c1f93a7710fa259d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" />
        </ContentBanner>
      </Content>
      <Section page={1}>
        <CarouselContainer>
          <Title>Nossos lançamentos</Title>
          <CarouselContent>
            <CardCarousel ref={carouselRef} {...settings}>
              {products.map((product) => (
                <CardProducts
                  key={product.id}
                  cover={<Image src={product.src} alt="product images"/>}
                >
                  <MetaProducts
                    title={product.title}
                    description={product.description}
                  />
                </CardProducts>
              ))}
            </CardCarousel>
          </CarouselContent>
          <ButtonContent>
            <CarouselButton
              onClick={prev}
              shape="circle"
              icon={<IoArrowBackOutline fontSize="16pt" />}
            />
            <CarouselButton
              onClick={next}
              shape="circle"
              icon={<IoArrowForward fontSize="16pt" />}
            />
          </ButtonContent>
        </CarouselContainer>
      </Section>
      <Section page={2}>
        <Title>Produtos relevantes</Title>
        <ContentSecondaryBanner>
          <Banner src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_2048/cms/5fpkfzYQ5cQnhuIz1VFU67/1266845421d7e9876b6375fbf91a4280/23Q4-ZombiePack-Secondary-Hero-Desktop.jpg" />
        </ContentSecondaryBanner>
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
