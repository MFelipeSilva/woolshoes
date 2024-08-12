import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100%;
  margin: 5em 0;
  gap: 5em;
  align-items: center;
  flex-direction: column;
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

export const Content = styled.section`
  display: flex;
  width: 70vw;
  max-width: 1335.59px;
  gap: 10em;
  flex-direction: column;

  @media (max-width: 1750px) {
    width: 80vw;
  }

  @media (max-width: 1000px) {
    width: 90vw;
  }

  @media (max-width: 768px) {
    gap: 5em;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 100%;
    max-height: 100%;
    width: 700px;
    height: auto;
    object-fit: contain;

    @media (max-width: 1750px) {
      width: 40vw;
      height: auto;
    }

    @media (max-width: 1400px) {
      width: 50vw;
      height: auto;
    }

    @media (max-width: 1000px) {
      width: 90vw;
      height: auto;
      object-fit: contain;
    }
  }

  @media (max-width: 1000px) {
    gap: 4em;
    flex-wrap: wrap;

    &:nth-child(2) {
      flex-direction: column-reverse;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  width: 25vw;
  max-width: 478px;
  gap: 2em;
  flex-direction: column;

  @media (max-width: 1750px) {
    width: 40vw;
  }

  @media (max-width: 1400px) {
    width: 25vw;
  }

  @media (max-width: 1000px) {
    width: 90vw;
    max-width: 90vw;
    justify-content: start;
  }
`;

export const InfoTitle = styled.h2`
  color: #191b24;
  font-size: clamp(30px, 3vw, 40px);
  font-weight: 600;
`;

export const InfoText = styled.p`
  color: #000000;
  font-size: clamp(16px, 1.5vw, 20px);
  font-weight: 300;
`;

export const SneakersBanner = styled.div`
  display: flex;
  padding: 5em 0;
  gap: 5em;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #f2f2f2;

  img {
    max-width: 100%;
    max-height: 100%;
    width: 800px;
    height: 330px;
    object-fit: contain;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 7em;
  padding: 0 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BannerCard = styled.div`
  display: flex;
  width: 300px;
  gap: 1.5em;
  text-align: center;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const CardTitle = styled.h2`
  color: #191b24;
  font-size: clamp(19px, 4vw, 21px);
  font-weight: 700;
  text-transform: uppercase;
`;

export const CardText = styled.p`
  font-size: clamp(14px, 4vw, 17px);
  font-weight: 300;
`;
