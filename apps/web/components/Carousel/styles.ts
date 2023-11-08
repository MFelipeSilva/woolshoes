import styled from "styled-components";

import { Button, Carousel } from "antd";

export const CardCarousel = styled(Carousel)`
  & > .slick-list > .slick-track {
    display: flex !important;
    height: 600px;
    margin-left: 0.9em;
  }

  & > button {
    margin: -50px 30px 0 30px !important;
  }

  .slick-slide > div {
    width: 90%;
    min-height: 38em;
    pointer-events: auto;
  }

  @media (min-width: 1200px) {
    .slick-slide {
      width: 5.5% !important;
    }
  }

  @media (max-width: 1199px) and (min-width: 992px) {
    .slick-slide {
      width: 3.5% !important;
    }
  }

  @media (max-width: 991px) and (min-width: 768px) {
    .slick-slide {
      width: 50% !important;
    }
  }

  @media (max-width: 767px) {
    .slick-slide {
      width: 100% !important;
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
