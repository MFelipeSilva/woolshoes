import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  width: 100vw;
  padding: 10em 0;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  background-color: #2d3142;
`;

export const ContentRow = styled.div`
  display: flex;
  width: 80%;
  gap: 5em 15em;
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
  font-size: 14px;
`;
