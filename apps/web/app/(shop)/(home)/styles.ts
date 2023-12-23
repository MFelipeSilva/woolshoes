import styled from "styled-components";

import { Card } from "antd";

const { Meta } = Card;

interface SectionProps {
  $page: number;
}

export const Container = styled.main`
  width: 100vw;
  height: 100%;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const Content = styled.section`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const BannerContent = styled.section`
  display: flex;
  position: relative;
  width: 90vw;
  height: 70vh;
  gap: 2.5em;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100vw;
    height: 60vh;
  }
`;

export const BannerHeader = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  gap: 2em;
  z-index: 1;
  margin-left: clamp(1vw, 5vw, 5em);
  flex-direction: column;

  a {
    width: min-content;
    height: min-content;
    text-decoration: none;

    @media (max-width: 768px) {
      button {
        width: 90%;
      }
    }
  }
`;

export const BannerTitle = styled.h1`
  color: #ffffff;
  width: 11em;
  text-transform: uppercase;
  font-size: clamp(21pt, 3vw, 34pt);
`;

export const Categories = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  left: 0;
  margin-top: 6em;
  position: absolute;
  align-items: center;
  background-color: transparent;

  @media (max-width: 1500px) {
    width: 72%;
  }
`;

export const CategoriesContent = styled.div`
  display: flex;
  width: 15em;
  height: 17em;
  position: absolute;
  right: 0;
  gap: 0.7em;
  padding: 0 1em;
  border: 1px solid black;
  background-color: #ffffff;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-left: 0;
  z-index: 1;
  border-radius: 5px !important;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const CategoriesTitle = styled.h4`
  margin-bottom: 1em;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Category = styled.li`
  list-style: circle;

  a {
    color: #000000;
    font-size: 10pt;
    font-weight: 300;
    letter-spacing: 1px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MainAnnouncement = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 70%;
  height: 100%;
  z-index: 1;
  border-radius: 5px;
  object-fit: cover;
  object-position: center;

  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

export const OtherAnnouncement = styled.img`
  width: 30%;
  height: 100%;
  border-radius: 5px;
  background-color: #f2f4f5;
  object-fit: cover;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Section = styled.section<SectionProps>`
  display: flex;
  width: 100vw;
  height: 100%;
  gap: 3em;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SecondaryBannerContent = styled.section`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: start;

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

export const Banner = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 90vw;
  height: 80vh;
  border-radius: 0px 5px 5px 0;
  object-fit: cover;
  object-position: center;
`;

export const TitleContainer = styled.div`
  width: 80vw;
  margin-left: 15em;
  padding-top: 10em;

  @media (max-width: 1200px) {
    margin-left: 0em;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const Title = styled.h1`
  font-size: clamp(22pt, 2vw, 25pt);
  font-weight: 700;
  text-align: start;
`;

export const CarouselContainer = styled.div`
  width: 80vw;
  margin-left: 14em;
  padding-bottom: 10em;

  @media (max-width: 1200px) {
    margin-left: 0;
  }

  @media (max-width: 768px) {
    width: 95vw;
  }
`;

export const CarouselContent = styled.div`
  width: 80vw;

  @media (max-width: 1200px) {
    width: 85vw;
  }

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const ProductCard = styled(Card)`
  width: 100% !important;
  min-height: 100% !important;
  box-shadow: rgba(68, 68, 68, 0.2) 0px 8px 20px 2px;

  .ant-card-body {
    height: 120px;
    padding: 24px 15px !important;

    .ant-card-meta > .ant-card-meta-detail {
      display: flex;
      text-align: start;
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    width: 330px !important;

    .ant-card-body {
      height: 130px;
    }
  }
`;

export const CardMeta = styled(Meta)`
  font-family: "Inter", sans-serif;

  .ant-card-meta-title {
    font-size: clamp(13pt, 2vw, 14pt);
    font-weight: 800;
    overflow: auto;
    line-height: 1.3em;
    white-space: normal;
    text-overflow: clip;
  }

  .ant-card-meta-description {
    font-size: 11pt;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
