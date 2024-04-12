"use client";

import React from "react";

import {
  MdOutlineShoppingBag,
  MdOutlineCached,
  MdPersonOutline,
  MdLockOutline,
  MdOutlineEmail,
} from "react-icons/md";

import { TbMessageCircle, TbPhone } from "react-icons/tb";

import { Layout } from "@layout";

import { faqList } from "@helpers/faqList";

import {
  CardText,
  CardsCol,
  HelpCardContainer,
  CardsRow,
  ContactCard,
  ContactCardContainer,
  ContactContent,
  ContactHeader,
  ContactSubTitle,
  ContactTitle,
  Container,
  HelpCard,
  HelpContent,
  HelpTitle,
  FaqCard,
  FaqCardText,
  FaqCardTitle,
  FaqContent,
  FaqHeader,
  FaqTitle,
  ContactCardTitle,
  ContactCardText,
} from "./styles";

export default function Service() {
  return (
    <Layout>
      <Container>
        <HelpContent>
          <HelpTitle>Central de ajuda</HelpTitle>
          <HelpCardContainer>
            <HelpCard>
              <MdOutlineShoppingBag />
              <CardText>Meus pedidos</CardText>
            </HelpCard>
            <HelpCard>
              <MdOutlineCached />
              <CardText>Trocas e cancelamento</CardText>
            </HelpCard>
            <HelpCard>
              <MdPersonOutline />
              <CardText>Meu cadastro</CardText>
            </HelpCard>
            <HelpCard>
              <MdLockOutline />
              <CardText>Segurança e privacidade</CardText>
            </HelpCard>
          </HelpCardContainer>
        </HelpContent>
        <FaqContent>
          <FaqHeader>
            <FaqTitle>Perguntas frequentes</FaqTitle>
          </FaqHeader>
          <CardsRow gutter={[40, 40]}>
            {faqList.map((list) => (
              <CardsCol
                xxl={8}
                xl={8}
                lg={12}
                md={12}
                sm={12}
                xs={24}
                key={list.id}
              >
                <FaqCard>
                  <FaqCardTitle>{list.title}</FaqCardTitle>
                  {list.questions.map((question, index) => (
                    <FaqCardText key={index}>{question}</FaqCardText>
                  ))}
                </FaqCard>
              </CardsCol>
            ))}
          </CardsRow>
        </FaqContent>
        <ContactContent>
          <ContactHeader>
            <ContactTitle>Entre em contato</ContactTitle>
            <ContactSubTitle>
              Nossa equipe está disponível de segunda a sábado das 08h às 20h,
              exceto feriados.
            </ContactSubTitle>
          </ContactHeader>
          <ContactCardContainer>
            <ContactCard>
              <MdOutlineEmail />
              <ContactCardTitle>E-mail</ContactCardTitle>
              <ContactCardText>
                Envie uma mensagem para o nosso time de atendimento.
              </ContactCardText>
            </ContactCard>
            <ContactCard>
              <TbMessageCircle />
              <ContactCardTitle>Assistente virtual</ContactCardTitle>
              <ContactCardText>
                Tire dúvidas, consulte seus pedidos e veja o status do
                atendimento.
              </ContactCardText>
            </ContactCard>
            <ContactCard>
              <TbPhone />
              <ContactCardTitle>(11) 11111-1111</ContactCardTitle>
              <ContactCardText>
                Faça uma ligação para o nosso time de atendimento.
              </ContactCardText>
            </ContactCard>
          </ContactCardContainer>
        </ContactContent>
      </Container>
    </Layout>
  );
}
