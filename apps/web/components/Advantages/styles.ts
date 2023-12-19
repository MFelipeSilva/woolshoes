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
`;

export const Content = styled.div`
  display: flex;
  width: 70%;
  gap: 3em;
  align-items: start;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const AdvantageContainer = styled.div`
  display: flex;
  gap: clamp(2em, 2vw, 3em);
  flex-wrap: wrap;
  align-items: center;
`;

export const AdvantageContent = styled.div`
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
    width: clamp(15em, 17vw, 24em);
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
