import React from "react";

import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

import { Container, Content, Text } from "./styles";

interface StarsProps {
  rating: number;
  text?: string;
}

export const Stars = ({ rating, text }: StarsProps) => {
  const maxStars = 5;
  const starsArray = Array.from({ length: maxStars }, (_, index) => {
    if (index + 1 <= rating) {
      return <IoMdStar key={index} />;
    } else if (index < rating && index + 1 > rating) {
      return <IoMdStarHalf key={index} />;
    } else {
      return <IoMdStarOutline key={index} />;
    }
  });

  return (
    <Container>
      {starsArray.map((star, index) => (
        <Content key={index}>{star}</Content>
      ))}
      <Text>{text}</Text>
    </Container>
  );
};
