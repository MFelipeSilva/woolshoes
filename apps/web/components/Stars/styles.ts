import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  div + p {
    margin-left: 0.5em;
  }
`;

export const Content = styled.div`
  display: flex;
  font-size: clamp(19px, 3vw, 23px);
  align-items: center;
`;

export const Text = styled.p`
  font-size: clamp(15px, 2vw, 17px);
  font-weight: 500;
`;
