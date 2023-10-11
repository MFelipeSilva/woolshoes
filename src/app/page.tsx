"use client";

import GlobalStyle from "@/styles/global";

import { Navbar } from "@/components/Navbar";

import {
  MainAnnouncement,
  Container,
  Content,
  ContentBanner,
  OtherAnnouncement,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <Content>
        <ContentBanner>
          <MainAnnouncement>.</MainAnnouncement>
          <OtherAnnouncement>.</OtherAnnouncement>
        </ContentBanner>
      </Content>
    </Container>
  );
}
