"use client";

import { Layout } from "@layout";

import { SignIn } from "@components/SignIn";
import { SignUp } from "@components/SignUp";

import { Container, Content, Section } from "./styles";

export default function LoginAndRegister() {
  return (
    <Layout>
      <Container>
        <Content>
          <Section>
            <SignIn />
          </Section>
          <Section>
            <SignUp />
          </Section>
        </Content>
      </Container>
    </Layout>
  );
}
