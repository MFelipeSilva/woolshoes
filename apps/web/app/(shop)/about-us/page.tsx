"use client";

import { Layout } from "@layout";

import Image from "next/image";

import image_01 from "@/public/image-about-us-01.png";
import image_02 from "@/public/image-about-us-02.png";
import gif_banner_01 from "@/public/gif-about-us-01.gif";

import {
  BannerCard,
  CardContainer,
  CardText,
  CardTitle,
  Container,
  Content,
  Header,
  InfoContainer,
  InfoText,
  InfoTitle,
  SneakersBanner,
  SubTitle,
  TextContainer,
  Title,
} from "./styles";

export default function AboutUs() {
  return (
    <Layout>
      <Container>
        <Header>
          <SubTitle>Sobre nós</SubTitle>
          <Title>Conheça um pouco mais sobre a Woolshoes</Title>
        </Header>
        <Content>
          <InfoContainer>
            <Image src={image_01} alt="image_01" />
            <TextContainer>
              <InfoTitle>A importância dos nossos tênis.</InfoTitle>
              <InfoText>
                Os tênis da Woolshoes vai além da estética, abraçando a inovação
                e o respeito pelo meio ambiente. Optamos pela lã como material
                principal não apenas pela sua durabilidade e conforto, mas
                também por ser uma escolha sustentável.
              </InfoText>
            </TextContainer>
          </InfoContainer>
          <InfoContainer>
            <TextContainer>
              <InfoTitle>Nossos cuidados com o meio ambiente.</InfoTitle>
              <InfoText>
                Ao escolher um dos nossos par, você está fazendo uma escolha
                consciente. Estamos comprometidos com a sustentabilidade em cada
                etapa do processo de produção, desde a seleção cuidadosa da
                matéria-prima até a embalagem eco-friendly. Nossos tênis são uma
                extensão do seu compromisso com o estilo de vida sustentável.
              </InfoText>
            </TextContainer>
            <Image src={image_02} alt="image_01" />
          </InfoContainer>
          <SneakersBanner>
            <Image src={gif_banner_01} alt="gif banner" />
            <CardContainer>
              <BannerCard>
                <CardTitle>Simplicidade no design</CardTitle>
                <CardText>
                  Sem logotipos chamativos. Sem detalhes sem sentido. Apenas os
                  sapatos mais confortáveis do mundo, feitos naturalmente e
                  projetados de forma prática. Simples assim.
                </CardText>
              </BannerCard>
              <BannerCard>
                <CardTitle>Confiança no conforto</CardTitle>
                <CardText>
                  Tentar é acreditar. Dê uma chance aos nossos sapatos por 30
                  dias e, se você não estiver andando na nuvem, nós os levaremos
                  de volta – sem perguntas.
                </CardText>
              </BannerCard>
              <BannerCard>
                <CardTitle>Feito da natureza</CardTitle>
                <CardText>
                  A indústria calçadista muitas vezes negligencia os materiais
                  da Mãe Natureza em favor de alternativas sintéticas mais
                  baratas. Achamos que é hora de mudar isso.
                </CardText>
              </BannerCard>
            </CardContainer>
          </SneakersBanner>
        </Content>
      </Container>
    </Layout>
  );
}
