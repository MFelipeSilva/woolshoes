import React from "react";

import { IconStar, IconStarHalf, IconStarOutline } from "@components/Icons";

import { Container, Content, Text } from "./styles";

interface StarsProps {
  rating: number;
  text?: string;
}

export const Stars = ({ rating, text }: StarsProps) => {
  const maxStars = 5;
  const starsArray = Array.from({ length: maxStars }, (_, index) => {
    if (index + 1 <= rating) {
      return <IconStar key={index} />;
    } else if (index < rating && index + 1 > rating) {
      return <IconStarHalf key={index} />;
    } else {
      return <IconStarOutline key={index} />;
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
