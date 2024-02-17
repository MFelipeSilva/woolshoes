import styled from "styled-components";

import { Card } from "antd";

const { Meta } = Card;

interface SectionProps {
  $page: number;
}

export const Container = styled.main`
  width: 100vw;
  height: 100%;
  padding-top:4em;

  @media (max-width: 768px) {
    padding-top: 0;
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

  & > .banner-01 {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
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
  }

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
  margin-left: clamp(1vw, 5vw, 6em);
  flex-direction: column;

  a {
    width: max-content;
    height: min-content;
    text-decoration: none;

    button {
      width: max-content;
      height: 4em;
    }

    @media (max-width: 768px) {
      & {
        width: max-content;
      }
    }
  }
`;

export const BannerTitle = styled.h1`
  color: #ffffff;
  width: 11em;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: clamp(23pt, 5vw, 38pt);

  @media (max-width: 768px) {
    width: 58vw;
  }

  @media (max-width: 280px) {
    width: 50vw;
    font-size: 20pt;
  }
`;

export const Categories = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  align-items: center;
  background-color: transparent;
`;

export const CategoriesContent = styled.div`
  display: flex;
  width: 15em;
  height: 17em;
  position: absolute;
  right: 0;
  gap: 0.7em;
  padding: 0 1em;
  z-index: 1;
  background-color: #ffffff;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-left: 0;

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

  & > .banner-02 {
    max-width: 100%;
    max-height: 100%;
    width: 95vw;
    height: 80vh;
    border-radius: 0px 5px 5px 0;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

export const Banner = styled.img``;

export const TitleContainer = styled.div`
  width: 70%;
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
  width: 70%;
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
  width: 100%;
  min-height: 100%;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.11) 2px 8px 20px 2px;

  .ant-card-body {
    height: 140px;
    overflow: hidden;
    padding: 30px 20px;

    .ant-card-meta > .ant-card-meta-detail {
      display: flex;
      text-align: start;
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    box-shadow: rgba(0, 0, 0, 0.11) 2px 4px 15px 2px;
  }

  @media (max-width: 320px) {
    .ant-card-body {
      height: 160px;
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

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
