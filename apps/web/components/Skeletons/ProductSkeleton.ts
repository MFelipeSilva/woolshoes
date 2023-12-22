import { styled } from "styled-components";

import { Skeleton } from "antd";

export const ImagesContainerSkeleton = styled.div`
  display: flex;
  width: 100%;
  gap: 2.5em;

  @media (max-width: 1600px) {
    height: 42.3vw;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const ImagesSkeleton = styled.div`
  width: 134px;
  height: 134px;
  border-radius: 5px;
  background-color: #f5f5f5;

  @media (max-width: 1600px) {
    width: 8vw;
  }
`;

export const ImageSkeleton = styled.div`
  width: 31.5vw;
  height: 100%;
  border-radius: 5px;
  background-color: #f5f5f5;

  @media (max-width: 1600px) {
    width: 40vw;
  }

  @media (max-width: 768px) {
    width: 100vw;
    aspect-ratio: 1 / 1;
  }
`;

export const DescriptionSkeleton = styled.div`
  display: flex;
  height: 378px;
  padding: 2em;
  border-radius: 5px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const TitleSkeleton = styled(Skeleton.Input)`
  span {
    height: 1.5em !important;
  }
`;

export const ButtonSkeleton = styled(Skeleton.Button)`
  span {
    padding: 2em !important;
  }
`;

export const RecommendationsSkeleton = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  gap: 18px;

  a {
    text-decoration: none;
  }
`;

export const CardsProductsSkeleton = styled.div`
  max-width: 230px !important;
  height: 320px !important;
  background-color: #f5f5f5;
  box-shadow: rgba(68, 68, 68, 0.1) 2px 5px 10px 2px;

  @media (max-width: 768px) {
    max-width: 330px !important;
  }
`;
