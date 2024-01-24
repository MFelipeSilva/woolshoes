import React from "react";

import Link from "next/link";

import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "react-icons/ri";

import {
  Container,
  ContentCol,
  ContentRow,
  Title,
  Ul,
  Li,
  Copyright,
  CopyrightText,
  SocialMedia,
  Img,
} from "./styles";

export const Footer = () => {
  return (
    <Container>
      <ContentRow>
        <ContentCol>
          <Title>Companhia</Title>
          <Ul>
            <Li>Nossas lojas</Li>
            <Li>Nossa história</Li>
            <Li>Investidores</Li>
            <Li>Parcerias</Li>
            <Li>Cuidados com os sapatos</Li>
            <Li>Afiliados</Li>
            <Li>Impresa</Li>
            <Li>Pedidos em massa</Li>
            <Li>Testes de produtos</Li>
            <Li>Ofertas da comunidade</Li>
          </Ul>
        </ContentCol>
        <ContentCol>
          <Title>Central</Title>
          <Ul>
            <Li>Regulamentos</Li>
            <Li>Política de cookies</Li>
            <Li>Políticas de trocas e arrependimento</Li>
            <Li>Perguntas frequentes</Li>
            <Li>Termos e Condições</Li>
            <Li>Fornecedores</Li>
            <Li>Serviços</Li>
          </Ul>
        </ContentCol>
        <ContentCol>
          <Title>Fale conosco</Title>
          <Ul>
            <Li>1-888-963-8944</Li>
            <Li>help@woolshoes.com</Li>
            <Li>FAQ/Fale Conosco</Li>
            <Li>Pós-pagamento</Li>
            <Li>Devoluções/Trocas</Li>
          </Ul>
        </ContentCol>
        <SocialMedia>
          <Title>Nossas redes sociais</Title>
          <Ul>
            <Li>
              <Link href="https://www.instagram.com/" target="_blank">
                <RiInstagramFill />
              </Link>
            </Li>
            <Li>
              <Link href="https://twitter.com/" target="_blank">
                <RiTwitterXFill />
              </Link>
            </Li>
            <Li>
              <Link href="https://www.facebook.com/" target="_blank">
                <RiFacebookCircleFill />
              </Link>
            </Li>
          </Ul>
        </SocialMedia>
      </ContentRow>
      <Copyright>
        <CopyrightText>
          Brasil
          <Img
            src="https://woolshoes.s3.amazonaws.com/brasil.png"
            alt="brazil flag"
          />
        </CopyrightText>
        <CopyrightText>
          © 2024 Woolshoes, Inc. Todos os direitos reservados. Termos,
          privacidade e acessibilidade.
        </CopyrightText>
      </Copyright>
    </Container>
  );
};
