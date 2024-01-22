import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100%;
  padding: 12em 0;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  gap: 13em;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1200px) {
    gap: 6em;
  }
`;

export const Section = styled.section`
  display: flex;
  width: auto;
  height: 80%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

