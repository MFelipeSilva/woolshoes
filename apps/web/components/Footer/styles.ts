import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  width: 100vw;
  padding: 6em 0;
  gap: 5em;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #2d3142;
`;

export const ContentRow = styled.div`
  display: flex;
  width: 70%;
  gap: 5em 13em;
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

export const ContentCol = styled.div`
  display: flex;
  gap: 1em;
  align-items: start;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 1.5em;
    align-items: center;
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 0.5em;
  list-style: none;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.h3`
  font-size: 15px;
  text-transform: uppercase;
`;

export const Li = styled.li`
  font-size: 13px;
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;

  & > ul {
    gap: 1.5em;
    flex-direction: row;

    li > a > svg {
      color: #ffffff;
      font-size: 45px;
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    gap: 2em;
    text-align: center;
    justify-content: center;
  }
`;

export const CopyrightText = styled.span`
  font-size: 13px;
  display: flex;
  gap: 0.3em;
  align-items: center;
`;

export const Img = styled.img`
  width: 25px;
`;
