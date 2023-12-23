import { styled } from "styled-components";

import { Skeleton } from "antd";

interface ISizes {
  sizes: string;
}

export const ProductCardSkeleton = styled.div`
  display: flex;
  width: 403px !important;
  min-height: 524px !important;
  align-items: flex-end;
  background-color: #f5f5f5;
  box-shadow: rgba(68, 68, 68, 0.2) 0px 8px 20px 2px;

  div {
    border-radius: 0 0 8px 8px;
  }

  @media (max-width: 768px) {
    width: 320px !important;
    min-height: 470px !important;
  }
`;

export const ProductsCardSkeleton = styled.div`
  display: flex;
  width: 320px !important;
  height: 417px !important;
  border-radius: 8px;
  align-items: flex-end;
  background-color: #f5f5f5;
  border: 1px solid #f0f0f0;

  div {
    border-radius: 0 0 8px 8px;
  }
`;

export const CardMetaSkeleton = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  gap: 1.5em;
  flex-direction: column;
  background-color: #ffffff;
  padding: 24px 15px !important;
`;

export const TitleSkeleton = styled(Skeleton.Input)<ISizes>`
  span {
    width: ${(props) =>
      props.sizes === "large"
        ? " 250px !important;"
        : props.sizes === "default"
          ? "200px !important"
          : ""};
    height: 1.5em !important;

    @media (max-width: 768px) {
      width: 230px !important;
    }
  }
`;

export const DescriptionSkeleton = styled(Skeleton.Input)<ISizes>`
  span {
    width: ${(props) =>
      props.sizes === "large"
        ? " 330px !important;"
        : props.sizes === "default"
          ? "250px !important"
          : ""};
    height: 1.5em !important;

    @media (max-width: 768px) {
      width: 285px !important;
    }
  }
`;
