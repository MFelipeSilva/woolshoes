import { styled } from "styled-components";

export const ProductCardSkeleton = styled.div`
  display: flex;
  width: 100%;
  max-width: 710px;
  padding-top: 100%;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.11) 2px 8px 20px 2px;

  & > div {
    border-radius: 0 0 8px 8px;
  }

  @media (max-width: 768px) {
    box-shadow: rgba(0, 0, 0, 0.11) 2px 4px 15px 2px;
  }
`;

export const ProductsCardSkeleton = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1.3;
  border-radius: 8px;
  align-items: flex-end;
  background-color: #f5f5f5;
  border: 1px solid #f0f0f0;

  div {
    border-radius: 0 0 8px 8px;
  }

  @media (max-width: 992px) {
    aspect-ratio: 1 / 1.2;
  }

  @media (max-width: 768px) {
    aspect-ratio: 1 / 1.3;
  }

  @media (max-width: 480px) {
    aspect-ratio: 1 / 1.4;
  }
`;

export const CardMetaSkeleton = styled.div`
  display: flex;
  width: 100%;
  height: 140px;
  gap: 1.5em;
  padding: 30px 20px;
  flex-direction: column;
  background-color: #ffffff;

  @media (max-width: 320px) {
    height: 160px;
  }
`;

export const ProductsCardMetaSkeleton = styled(CardMetaSkeleton)`
  display: flex;
  min-width: 100%;
  width: 322px;
  height: auto;
  padding: 24px 15px;

  @media (max-width: 480px) {
    height: 90px;
  }
`;

export const TitleSkeleton = styled.div`
  width: 80%;
  height: 1.5em !important;
  background-color: #f0f0f0;
  border-radius: 5px !important;
`;

export const DescriptionSkeleton = styled.div`
  width: 90%;
  height: 1.5em !important;
  background-color: #f0f0f0;
  border-radius: 5px !important;
`;
