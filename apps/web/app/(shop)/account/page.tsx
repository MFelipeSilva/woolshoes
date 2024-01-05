"use client";

import React from "react";

import { FcGoogle } from "react-icons/fc";

import { Layout } from "@layout";

import { PrimaryButton } from "ui";

import {
  Container,
  Content,
  ForgotPassword,
  Input,
  Inputs,
  Label,
  LoginSection,
  RegisterSection,
  RequiredFields,
  SectionContent,
  Separator,
  Title,
} from "./styles";

export default function Account() {
  return (
    <Layout>
      <Container>
        <Content>
          <LoginSection>
            <SectionContent>
              <Title>Acessar conta</Title>
              <Inputs>
                <Label>
                  Email
                  <Input type="text" />
                </Label>
                <Label>
                  Senha
                  <Input type="password" />
                </Label>
                <ForgotPassword>Esqueci minha senha</ForgotPassword>
              </Inputs>
              <PrimaryButton>Entrar</PrimaryButton>
              <Separator>ou</Separator>
              <PrimaryButton color="#FFFFFF" border="#636363">
                <FcGoogle fontSize={23} />
              </PrimaryButton>
            </SectionContent>
          </LoginSection>
          <RegisterSection>
            <SectionContent>
              <Title>Criar uma conta</Title>
              <Inputs>
                <Label>
                  Nome
                  <Input type="text" />
                </Label>
                <Label>
                  Email *
                  <Input type="text" />
                </Label>
                <Label>
                  Senha *
                  <Input type="password" />
                </Label>
                <Label>
                  Confirmar senha *
                  <Input type="password" />
                </Label>
                <RequiredFields>* Campos obrigatórios</RequiredFields>
              </Inputs>
              <PrimaryButton>Registrar</PrimaryButton>
            </SectionContent>
          </RegisterSection>
        </Content>
      </Container>
    </Layout>
  );
}
