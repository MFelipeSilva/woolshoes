import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10em 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1350px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: clamp(22pt, 2vw, 25pt);
  font-weight: 700;
  text-align: start;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 70%;
  gap: 3em;
  align-items: start;
  flex-direction: column;

  @media (max-width: 1007px) {
    width: 90%;
    align-items: center;
  }
`;

export const AdvantageContainer = styled.div`
  display: flex;
  gap: clamp(2em, 2vw, 3em);
  align-items: center;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }

  @media (max-width: 1007px) {
    justify-content: center;
  }
`;

export const AdvantageContent = styled.div`
  display: flex;
  gap: 1em;

  @media (max-width: 1007px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const AdvantageIcon = styled.div`
  display: flex;
  width: 4.7em;
  height: 4.7em;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: #f2f4f5;

  & > img {
    width: 100%;
    height: 100%;
    max-width: 45px;
    max-height: 45px;
    object-fit: contain;
  }
`;

export const AdvantageTexts = styled.div`
  display: flex;
  width: clamp(10em, 17vw, 24em);
  gap: 0.5em;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: clamp(15em, 17vw, 24em);
  }

  @media (max-width: 1007px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 70vw;
    text-align: center;
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
