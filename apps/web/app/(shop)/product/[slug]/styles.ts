import styled from "styled-components";

import { Card } from "antd";

const { Meta } = Card;

interface IButtonColor {
  color: string;
}

interface IColorStyles {
  background: string;
}

interface IColors {
  [key: string]: IColorStyles;
}

const colors: IColors = {
  "Cinza (Sola Cinza)": {
    background:
      "linear-gradient(135deg, rgb(224, 226, 220) 50%, rgb(180, 182, 186) 50%)",
  },
  "Preto/Azul (Sola Cinza)": {
    background:
      "linear-gradient(135deg, rgb(36, 39, 41) 50%, rgb(64, 74, 96) 50%)",
  },
  "Preto (Sola Cinza)": {
    background:
      "linear-gradient(135deg, rgb(36, 39, 41) 50%, rgb(211, 210, 209) 50%)",
  },
  "Cinza (Sola Bege)": {
    background:
      "linear-gradient(to right, rgb(59, 59, 52) 33%, rgb(223, 41, 50) 33%, rgb(223, 41, 50) 66%, rgb(226, 224, 209) 66%)",
  },
  "Preto (Sola Branca)": {
    background:
      "linear-gradient(135deg, rgb(36, 39, 41) 50%, rgb(224, 226, 220) 50%)",
  },
  "Preto (Sola Preta)": {
    background:
      "linear-gradient(135deg, rgb(36, 39, 41) 50%, rgb(36, 39, 41) 50%)",
  },
  "Cinza (Sola Branca)": {
    background:
      "linear-gradient(135deg, rgb(136, 134, 136) 50%, rgb(255, 255, 255) 50%)",
  },
  "Azul (Sola Branca)": {
    background:
      "linear-gradient(135deg, rgb(64, 74, 96) 50%, rgb(224, 226, 220) 50%)",
  },
  "Vermelho Vinho (Sola Branca)": {
    background:
      "linear-gradient(135deg, rgb(149, 73, 83) 50%, rgb(224, 226, 220) 50%)",
  },
  "Branco (Sola Branca)": {
    background: "rgb(224, 226, 220)",
  },
  "Vermelho Vinho (Sola Vinho)": {
    background: "rgb(149, 73, 83)",
  },
  "Rosa (Sola Branca)": {
    background:
      "linear-gradient(135deg, rgb(250,235,215) 50%, rgb(255, 255, 255) 50%)",
  },
  "Vermelho (Sola Branca)": {
    background:
      "linear-gradient(135deg, rgb(223, 41, 50) 50%, rgb(231, 228, 211) 50%)",
  },
};

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100%;
  padding-top: 4em;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ContentMain = styled.div`
  display: flex;
  height: 100%;
  gap: 3.5em;
  flex-wrap: wrap;
  align-items: start;

  @media (max-width: 1600px) {
    gap: 3em;
  }

  @media (max-width: 1199px) {
    gap: 2em;
  }

  @media (max-width: 768px) {
    width: 100vw;
    gap: 3em;
    align-items: center;
    justify-content: center;
  }
`;

export const ProductImages = styled.div`
  display: flex;
  gap: 1.5em;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 1600px) {
    gap: 2.2em;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentImages = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 7vw;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  object-position: center;

  @media (max-width: 1600px) {
    width: 8vw;
  }
`;

export const MainImage = styled.div`
  display: flex;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 31.5vw;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  object-position: center;

  @media (max-width: 1600px) {
    width: 40vw;
  }

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const ImagesAndDescription = styled.section`
  display: flex;
  gap: 3em;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100vw;
    align-items: center;
    justify-content: center;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2.5em;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  display: flex;
  width: 40.5vw;
  padding: 2em;
  border-radius: 5px;
  align-items: start;
  flex-direction: column;
  background-color: #f5f5f5;

  div:nth-child(2) {
    padding-top: 1.5em;
  }

  div:nth-child(n + 3) {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }

  div:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 1600px) {
    width: 51vw;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const Rows = styled.div`
  display: flex;
  width: 100%;
  padding: 1em 0;
  align-items: center;
`;

export const DescriptionTitle = styled.h1`
  font-size: 21px;
  letter-spacing: 0.5px;
`;

export const DescriptionText = styled.p`
  font-size: 15px;
`;

export const DescriptionSubTitle = styled.h2`
  font-size: 15px;
  letter-spacing: 0.5px;
`;

export const DetailsAndRecommendations = styled.section`
  display: flex;
  gap: 2em;
  align-items: center;
  flex-direction: column;
`;

export const DetailsContainer = styled.div`
  display: flex;
  width: 30em;
  gap: 1.7em;
  flex-direction: column;

  & > button {
    margin-top: 1em;
    height: 4em !important;
  }

  @media (max-width: 1199px) {
    width: 35vw;
  }

  @media (max-width: 768px) {
    width: 90vw;

    & > button {
      margin-top: 0;
      height: 4.5em !important;
    }
  }
`;

export const DetailsHeader = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

export const ProductPath = styled.span`
  font-size: 12px;
  font-weight: 600;

  a {
    color: #000000;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  font-size: clamp(18pt, 3vw, 21pt);
`;

export const StarsContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.span`
  display: flex;
  font-size: 16px;
  font-weight: normal;
  flex-direction: column;

  span {
    color: #2d3142;
    font-weight: 700;
    font-size: clamp(18pt, 3vw, 21pt);
  }
`;

export const ProductColor = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

export const ButtonColor = styled.button`
  display: inline-block;
  border: none;
  cursor: pointer;
  text-align: center;
  background: transparent;
`;

export const Color = styled.div<IButtonColor>`
  position: relative;
  width: 3.3em;
  height: 3.3em;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background: ${(props) => {
    const colorStyle = colors[props.color];
    return colorStyle ? colorStyle.background : "inherit";
  }};

  &::after {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 2px solid rgb(116, 121, 124);
    box-sizing: border-box;
  }
`;

export const SelectSize = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

export const SubTitle = styled.h4`
  font-size: 14px;
  text-transform: uppercase;

  span {
    font-size: 14px;
    font-weight: 500;
    text-transform: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.7em;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1em;
  }

  @media (max-width: 480px) {
    gap: 0.5em;
  }
`;

export const ButtonSize = styled.button`
  display: inline-block;
  border: none;
  cursor: pointer;
  background: transparent;
`;

export const Size = styled.span`
  display: flex;
  width: clamp(3.6em, 3vw, 4.5em);
  height: clamp(3.6em, 3vw, 4.5em);
  cursor: pointer;
  color: #000000;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  background-color: transparent;
  font-family: "Inter", sans-serif;

  &:hover {
    border: 1px solid #2d3142;
    background-color: rgba(45, 49, 66, 0.2);
  }

  @media (max-width: 768px) {
    width: 4.5em;
    height: 4.5em;
  }

  @media (max-width: 480px) {
    width: 3.5em;
    height: 3.5em;
    font-size: 9pt;
  }
`;

export const SizeAlert = styled.span`
  font-size: 14px;
  font-weight: 300;

  span {
    font-weight: 500;
    text-decoration: underline;
  }
`;

export const FreeShippingContainer = styled.div`
  display: flex;
  width: 30em;
  height: 5em;
  gap: 1em;
  padding: 0 25px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: #3a5a40;

  svg {
    color: #ffffff;
    font-size: 25px;
  }

  @media (max-width: 1199px) {
    width: 35vw;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const TextFreeShipping = styled.p`
  display: flex;
  width: 27em;
  color: #ffffff;
  font-size: 14px;
`;

export const RecommendationsContainer = styled.div`
  display: flex;
  gap: 2em;
  width: 100%;
  height: 100%;
  flex-direction: column;

  @media (max-width: 1199px) {
    width: 35vw;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const RecommendationsTitle = styled.h1`
  font-size: 24px;
  letter-spacing: 0.5px;
`;

export const Recommendations = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  gap: 18px;

  a {
    text-decoration: none;
  }
`;

export const CardProducts = styled(Card)`
  max-width: 230px !important;
  height: 100% !important;
  box-shadow: rgba(68, 68, 68, 0.1) 2px 5px 10px 2px;

  .ant-card-body {
    padding: 25px !important;
  }

  @media (max-width: 768px) {
    max-width: 330px !important;
  }
`;

export const MetaProducts = styled(Meta)`
  font-family: "Inter", sans-serif;

  .ant-card-meta-title {
    font-size: 15px !important;
    font-weight: 600;
    overflow: auto;
    white-space: normal;
    text-overflow: clip;
  }
`;

export const Image = styled.img``;

export const ReviewsContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  gap: 2em;
  margin-top: 8em;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ReviewsContent = styled.div`
  display: flex;
  gap: 2.5em;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const CardContent = styled.div``;

export const ReviewsCard = styled.div`
  display: flex;
  width: 70vw;
  height: 28vh;
  gap: 1.5em;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const ReviewsTitle = styled.h2`
  font-size: clamp(23px, 3vw, 25px);
`;

export const CommentTitle = styled.h2`
  font-size: clamp(18px, 3vw, 22px);
  letter-spacing: 0.5px;
`;

export const CommentDescription = styled.p`
  font-size: clamp(14px, 2.5vw, 16px);
`;
