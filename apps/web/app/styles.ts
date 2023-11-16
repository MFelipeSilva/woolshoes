import styled from "styled-components";

import { Card } from "antd";

const { Meta } = Card;

interface SectionProps {
  $page: number;
}

export const Content = styled.section`
  display: flex;
  width: 100vw;
  height: 90vh;
  align-items: center;
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

  @media (max-width: 768px) {
    display: flex;
    width: 80vw;
    justify-content: center;
  }
`;

export const BannerHeader = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  gap: 2em;
  margin-left: clamp(1vw, 5vw, 5em);
  flex-direction: column;

  button {
    width: 15em;
    height: 60% !important;
  }
`;

export const BannerTitle = styled.h1`
  color: #ffffff;
  font-size: clamp(20pt, 3vw, 34pt);
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
  border: 1px solid black;
  border-left: 0;
  border-radius: 5px !important;
  background-color: #ffffff;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-top: 10vh;
  margin-right: 26.8vw;

  @media (max-width: 1650px) {
    margin-right: 25vw;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const CategoriesTitle = styled.h4`
  margin-bottom: 1em;
  letter-spacing: 1px;
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
  border-radius: 5px;
  object-fit: cover;
  object-position: center;

  @media (max-width: 1000px) {
    width: 100%;
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
  height: ${(props) =>
    props.$page === 1 ? "70%" : props.$page === 3 ? "40%" : "100%"};
  margin-top: ${(props) =>
    props.$page === 1 ? "5em" : props.$page === 2 ? "5em" : props.$page === 3 ? "0" : ""};
    gap: 3em;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  @media (max-width: 1200px) {
    height: ${(props) =>
      props.$page === 1 ? "70%" : (props.$page === 3 ? "60%" : "100%")};
  }

  @media (max-width: 768px) {
    height: ${(props) =>
      props.$page === 1 ? "70%" : (props.$page === 3 ? "60%" : "100%")};
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
  font-size: clamp(22pt, 2vw, 25pt);
  z-index: 1;
  font-weight: 700;
  text-align: start;
`;

export const CarouselContainer = styled.div`
  display: flex;
  gap: 3em;
  margin-left: 15em;
  flex-direction: column;

  @media (max-width: 1200px) {
    margin-left: 0;
  }
`;

export const CarouselContent = styled.div`
  z-index: 1;
  width: 80vw;
`;

export const CardProducts = styled(Card)`
  width: 400px !important;
  height: 530px !important;
  box-shadow: rgba(68, 68, 68, 0.2) 0px 8px 20px 2px;
`;

export const MetaProducts = styled(Meta)`
  & > div > div:nth-child(1) {
    font-size: 16pt !important;
    font-weight: 700;
  }

  & > div > div:nth-child(2) {
    font-size: 11pt !important;
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
