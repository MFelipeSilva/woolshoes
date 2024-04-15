import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useRef,
  useState,
} from "react";

import { IconLeftArrow, IconRightArrow } from "@components/Icons";

import { CardCarousel, CarouselButton, CarouselButtonDisabled } from "./styles";

interface CarouselProps {
  children: ReactNode;
  setDragging: Dispatch<SetStateAction<boolean>>;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  setDragging,
}) => {
  const carouselRef = useRef<any>(null);

  const [showNextButton, setShowNextButton] = useState(true);
  const [showPrevButton, setShowPrevButton] = useState(false);

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  const handleCarouselSlide = (currentSlide: number, totalSlides: number) => {
    setShowNextButton(currentSlide < totalSlides - 1);
    setShowPrevButton(currentSlide > 0);
  };

  const handleAfterChange = (currentSlide: number) => {
    setDragging(false);
    handleCarouselSlide(currentSlide, 5.5);
  };

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3.5,
    slidesToScroll: 2,
    speed: 500,
    arrows: true,
    nextArrow: showNextButton ? (
      <CarouselButton onClick={next} shape="circle" icon={<IconRightArrow />} />
    ) : (
      <CarouselButtonDisabled />
    ),
    prevArrow: showPrevButton ? (
      <CarouselButton onClick={prev} shape="circle" icon={<IconLeftArrow />} />
    ) : (
      <CarouselButtonDisabled />
    ),
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CardCarousel
      ref={carouselRef}
      {...settings}
      draggable
      beforeChange={() => setDragging(true)}
      afterChange={handleAfterChange}
    >
      {React.Children.map(children, (child) => {
        return <>{child}</>;
      })}
    </CardCarousel>
  );
};
