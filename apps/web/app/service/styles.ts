import styled from "styled-components";

import { Col, Row } from "antd";

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100%;
  gap: 5em;
  margin: 5em 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HelpContent = styled.section`
  display: flex;
  gap: 3.3em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  width: 35vw;
  gap: 0.5em;
  max-width: 664px;
  text-align: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 90vw;
  }
`;

export const SubTitle = styled.h2`
  position: relative;
  color: #191b24;
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 700;
  justify-content: center;
  text-transform: uppercase;

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    border-bottom: 3px solid #1d3557;
  }
`;

export const Title = styled.h1`
  color: #191b24;
  font-size: clamp(33px, 4vw, 48px);
  font-weight: 700;
`;
export const HelpCardContainer = styled.div`
  display: flex;
  gap: 7.1em;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 90vw;
    gap: 0;
    justify-content: space-between;
  }

  @media (max-width: 1000px) {
    width: 90vw;
    gap: 3em;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const CardsRow = styled(Row)`
  display: flex;
  max-width: 1090px;
  width: 80em;

  @media (max-width: 1200px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    .ant-col {
      padding: 0 20px !important;
    }
  }

  @media (max-width: 480px) {
    width: 90%;

    .ant-col {
      padding: 10px 0 !important;
    }
  }
`;

export const CardsCol = styled(Col)`
  display: flex;
`;

export const HelpCard = styled.div`
  display: flex;
  width: 209px;
  height: 170px;
  gap: 0.5em;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #ced4da;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 515px) {
    width: 170px;
    height: 131px;
  }
`;

export const CardText = styled.p`
  display: flex;
  width: 7em;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const FaqContent = styled.section`
  display: flex;
  max-width: 1170px;
  width: 75em;
  height: 100%;
  gap: 4em;
  padding-bottom: 3em;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  border: 1px solid #ced4da;

  @media (max-width: 1200px) {
    width: 90vw !important;
  }
`;

export const FaqHeader = styled.div`
  display: flex;
  width: 90%;
  height: 4.5em;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ced4da;
`;

export const FaqTitle = styled.p`
  display: flex;
  font-size: 22px;
  font-weight: 500;
`;

export const FaqCard = styled.div`
  display: flex;
  width: 340px;
  min-height: 200px;
  padding: 20px;
  gap: 1em;
  border-radius: 5px;
  background-color: #f9f9f9;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const FaqCardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 0.5em;
`;

export const FaqCardText = styled.p`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);

  &:hover {
    color: rgba(0, 0, 0);
  }
`;

export const ContactContent = styled.section`
  display: flex;
  gap: 2.5em;
  align-items: center;
  flex-direction: column;
`;

export const ContactHeader = styled.header`
  display: flex;
  gap: 1.5em;
  text-align: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 23px;
  font-weight: 700;
`;

export const ContactSubTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

export const ContactCardContainer = styled.div`
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ContactCard = styled.div`
  display: flex;
  width: 230px;
  height: 200px;
  gap: 0.5em;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const ContactCardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;

export const ContactCardText = styled.p`
  width: 11em;
  font-size: 13px;
  font-weight: 300;
  text-align: center;
`;
