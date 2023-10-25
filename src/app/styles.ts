import styled from "styled-components";

import { Button, Card, Carousel } from "antd";

const { Meta } = Card;

interface SectionProps {
  page: number;
}

export const Content = styled.section`
  display: flex;
  width: 100%;
  height: 90%;
  margin-top: 10em;
  align-items: start;
  justify-content: center;
`;

export const BannerContent = styled.section`
  display: flex;
  position: relative;
  width: 90%;
  height: 70vh;
  gap: 2.5em;
  align-items: center;
  justify-content: center;
`;

export const BannerHeader = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  gap: 2em;
  margin-left: 5em;
  flex-direction: column;

  button {
    width: 50% !important;
    font-size: 12pt !important;
    font-weight: 600 !important;
  }
`;

export const BannerTitle = styled.h1`
  color: #ffffff;
  font-size: 34pt;
  width: 11em;
  text-transform: uppercase;
`;

export const Categories = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  width: 15em;
  height: 17em;
  gap: 0.7em;
  padding: 0 1em;
  margin-top: 10em;
  margin-right: 32em;
  border: 1px solid black;
  border-left: 0;
  background-color: #ffffff;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const CategoriesTitle = styled.h4`
  margin-bottom: 1em;
  letter-spacing: 1px;
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
  border-radius: 5px;
  object-fit: cover;
  object-position: center;
`;

export const OtherAnnouncement = styled.img`
  width: 30%;
  height: 100%;
  border-radius: 5px;
  background-color: #f2f4f5;
  object-fit: cover;
`;

export const Section = styled.section<SectionProps>`
  display: flex;
  width: 100vw;
  height: ${(props) =>
    props.page === 1 ? "80%" : "100%" && props.page === 3 ? "40%" : "100%"};
  gap: 3em;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  @media (max-width: 1200px) {
    height: ${(props) =>
      props.page === 1 ? "80%" : "100%" && props.page === 3 && "60%"};
  }

  @media (max-width: 768px) {
    height: ${(props) =>
      props.page === 1 ? "80%" : "100%" && props.page === 3 && "70%"};
  }
`;

export const SecondaryBannerContent = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: start;
  justify-content: start;
`;

export const Banner = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 90%;
  height: 80%;
  border-radius: 0px 5px 5px 0;
  object-fit: cover;
  object-position: center;
`;

export const Title = styled.h1`
  font-size: 25pt;
  z-index: 1;
  font-weight: 700;
  text-align: start;
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

  & > h1 {
    margin-left: 0.7em;
  }
`;

export const CarouselContent = styled.div`
  z-index: 1;
  width: 80vw;
`;

export const CardCarousel = styled(Carousel)`
  cursor: pointer;

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

export const Image = styled.img``;

export const AdvantageContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  gap: 3em;
  flex-direction: column;

  h1 {
    align-self: flex-start;
    text-align: start;
  }

  @media (max-width: 1350px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    height: 80%;
  }
`;

export const AdvantageContent = styled.div`
  display: flex;
  gap: clamp(2em, 2vw, 3em);
  flex-wrap: wrap;
  align-items: center;
`;

export const Advantage = styled.div`
  display: flex;
  gap: 1em;
`;

export const AdvantageIcon = styled.div`
  display: flex;
  width: 4.7em;
  height: 4.7em;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: #f2f4f5;
`;

export const Icon = styled.img`
  width: 45px;
  height: 45px;
`;

export const AdvantageTexts = styled.div`
  display: flex;
  width: clamp(10em, 17vw, 24em);
  gap: 0.5em;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: clamp(20em, 17vw, 24em);
  }
`;

export const AdvantageTitle = styled.h2`
  font-size: 13pt;
  font-weight: 600;
`;

export const AdvantageDescription = styled.p`
  font-size: 11pt;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
