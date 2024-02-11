import styled from "styled-components";

import { Button, Carousel } from "antd";

export const CardCarousel = styled(Carousel)`
  & > .slick-list > .slick-track {
    display: flex !important;
    z-index: 99;
    cursor: -webkit-grab;
  }

  & > button {
    margin: -50px 45px 0 45px !important;

    @media (max-width: 768px) {
      display: none !important;
    }
  }

  .slick-slide {
    height: max-content;
    padding: 25px 0;
  }

  .slick-slide > div {
    width: 92%;
    margin-left: 1em;
    user-select: none;
    pointer-events: all;

    @media (max-width: 768px) {
      width: 96%;
    }
  }

  @media (max-width: 1199px) and (min-width: 992px) {
    .slick-slide {
      width: 32em !important;
    }
  }

  @media (max-width: 768px) {
    .slick-slide {
      width: 100%;
      height: 100%;
      padding-bottom: 20px;
    }
  }
`;

export const CarouselButton = styled(Button)`
  display: flex;
  z-index: 2;
  width: 48px !important;
  height: 48px !important;
  align-items: center;
  justify-content: center;
  background-color: #ffffff !important;

  & > span {
    color: #000000;
  }
`;

export const CarouselButtonDisabled = styled(Button)`
  display: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 125ms ease 0s;
`;
