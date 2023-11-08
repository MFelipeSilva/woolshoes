import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  height: 55vh;
  gap: 5em;
  flex-direction: row;
  align-items: start;
  justify-content: center;
`;

export const ImageAndDescription = styled.section`
  display: flex;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 30vw;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  object-position: center;
`;

export const ProductDetails = styled.section`
  display: flex;
  width: 38%;
  gap: 2em;
  flex-direction: column;
  justify-content: center;

  & > button {
    height: 10% !important;
  }
`;

export const Title = styled.h1`
  font-size: 21pt;
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;

  svg {
    font-size: 21px;
  }
`;

export const Price = styled.p`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 21pt;
    color: #2d3142;
  }
`;

export const ProductColor = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

export const ButtonColor = styled.button`
  width: 3.3em;
  height: 3.3em;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgb(224, 226, 220) 50%,
    rgb(180, 182, 186) 50%
  );
`;

export const SelectSize = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

export const SubTitle = styled.h4`
  font-size: 14px;
  text-transform: uppercase;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
`;

export const ButtonSize = styled.button`
  width: 4.5em;
  height: 4.5em;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #000000;
  background-color: transparent;
`;
