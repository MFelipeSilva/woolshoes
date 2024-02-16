import React from "react";

import Image from "next/image";

import { purchaseAdvantages } from "@helpers/purchaseAdvantages";

import {
  Container,
  Content,
  Title,
  AdvantageContainer,
  AdvantageContent,
  AdvantageDescription,
  AdvantageIcon,
  AdvantageTexts,
  AdvantageTitle,
} from "./styles";

export const Advantages = () => {
  return (
    <Container>
      <Content>
        <Title>Vantagens da Woolshoes</Title>
        <AdvantageContainer>
          {purchaseAdvantages.map((advantage) => (
            <AdvantageContent key={advantage.id}>
              <AdvantageIcon>
                <Image src={advantage.icon} alt="advantage icon" />
              </AdvantageIcon>
              <AdvantageTexts>
                <AdvantageTitle>{advantage.title}</AdvantageTitle>
                <AdvantageDescription>
                  {advantage.description}
                </AdvantageDescription>
              </AdvantageTexts>
            </AdvantageContent>
          ))}
        </AdvantageContainer>
      </Content>
    </Container>
  );
};
