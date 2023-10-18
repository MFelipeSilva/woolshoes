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
  AdvantageRow,
  AdvantageCol,
  Advantage,
  AdvantageIcon,
  AdvantageContent,
  AdvantageTitle,
  AdvantageDescription,
  CardProducts,
  CarouselContent,
  MetaProducts,
  CarouselContainer,
  CardCarousel,
  CarouselButton,
  ButtonContent,
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
          <MainAnnouncement src="https://i.pinimg.com/originals/79/ab/59/79ab596ef07577afa1ec05a05b1f804c.jpg" />
          <OtherAnnouncement src="https://cdn.shopify.com/s/files/1/0050/1750/1809/products/M51SM_5.jpg?v=1668000280" />
        </ContentBanner>
      </Content>
      <Section>
        <CarouselContainer>
          <Title>Nossos lançamentos</Title>
          <CarouselContent>
            <CardCarousel ref={carouselRef} {...settings}>
              {products.map((product) => (
                <CardProducts cover={<img alt="example" src={product.src} />}>
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
      <Section>
        <Title>Vantagens de comprar no nosso site</Title>
        <AdvantageRow gutter={[50, 50]}>
          {purchase_advantage.map((advantage) => (
            <AdvantageCol span={12}>
              <Advantage>
                <AdvantageIcon></AdvantageIcon>
                <AdvantageContent>
                  <AdvantageTitle>{advantage.title}</AdvantageTitle>
                  <AdvantageDescription>
                    {advantage.description}
                  </AdvantageDescription>
                </AdvantageContent>
              </Advantage>
            </AdvantageCol>
          ))}
        </AdvantageRow>
      </Section>
    </Layout>
  );
}
