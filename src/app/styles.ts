import styled from "styled-components";

import { Button, Card, Carousel, Col, Row } from "antd";

const { Meta } = Card;

export const Content = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: start;
  justify-content: center;
`;

export const ContentBanner = styled.section`
  display: flex;
  width: 90%;
  height: 70%;
  gap: 2.5em;
  margin-top: 5em;
  align-items: center;
  justify-content: center;
`;

export const MainAnnouncement = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 70%;
  height: 100%;
  border-radius: 5px;
  background-color: #f2f4f5;
  object-fit: cover;
  object-position: bottom;
`;

export const OtherAnnouncement = styled.img`
  width: 30%;
  height: 100%;
  border-radius: 5px;
  background-color: #f2f4f5;
  object-fit: cover;
`;

export const Section = styled.section`
  display: flex;
  width: 100vw;
  height: 100%;
  gap: 3em;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 25pt;
  z-index: 1;
  font-weight: 700;
  text-align: start;
  margin-left: 0.7em;
`;

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  gap: 3em;
  flex-direction: column;
  margin-left: 15em;

  @media (max-width: 1200px) {
    margin-left: 0;
  }
`;

export const CarouselContent = styled.div`
  z-index: 1;
  width: 80vw;
`;

export const CardCarousel = styled(Carousel)`
  & > div > div {
    display: flex !important;
    margin-left: 9em;
    gap: 3em !important;
  }

  .slick-slide > div {
    min-height: 38em;
  }

  @media (min-width: 1200px) {
    .slick-slide {
      width: 5.5% !important;
    }
  }

  @media (max-width: 1199px) and (min-width: 992px) {
    .slick-slide {
      width: 3.5% !important;
    }
  }

  @media (max-width: 991px) and (min-width: 768px) {
    .slick-slide {
      width: 50% !important;
    }
  }

  @media (max-width: 767px) {
    .slick-slide {
      width: 100% !important;
    }
  }
`;

export const ButtonContent = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  button:nth-child(1) {
    opacity: 0;
  }
`;

export const CarouselButton = styled(Button)`
  display: flex;
  z-index: 2;
  width: 48px !important;
  height: 48px !important;
  align-items: center;
  justify-content: center;
`;

export const CardProducts = styled(Card)`
  width: 400px !important;
  box-shadow: rgba(68, 68, 68, 0.2) 0px 8px 20px 2px;
`;

export const MetaProducts = styled(Meta)`
  & > div > div:nth-child(1) {
    font-size: 16pt !important;
    font-weight: 700;
  }
`;

export const AdvantageRow = styled(Row)`
  display: flex;
  width: 100vh;
  align-items: center;
  justify-content: center;
`;

export const AdvantageCol = styled(Col)``;

export const Advantage = styled.div`
  display: flex;
  width: 100vw;
  gap: 1em;
`;

export const AdvantageIcon = styled.div`
  width: 4.5em;
  height: 4.5em;
  background-color: #f2f4f5;
`;

export const AdvantageContent = styled.div`
  width: 30em;
`;

export const AdvantageTitle = styled.h2`
  font-size: 14pt;
  font-weight: 500;
`;

export const AdvantageDescription = styled.p``;
