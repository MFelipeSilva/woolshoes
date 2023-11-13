"use client";

import { useQuery } from "react-query";

import { IoMdStar, IoMdStarHalf } from "react-icons/io";

import { getProduct } from "@/data/getProducts";

import { formatPrice } from "@/utils/formatPrice";

import { Layout } from "@/layout";

import { PrimaryButton } from "@/components/Buttons/PrimaryButton";

import {
  Container,
  ProductDetails,
  ImageAndDescription,
  ProductImage,
  Title,
  Price,
  SelectSize,
  Content,
  Stars,
  SubTitle,
  ButtonSize,
  Buttons,
  ProductColor,
  ButtonColor,
} from "./styles";

interface ProductIdProps {
  params: {
    id: string;
  };
}

export default function ProductId({ params: { id } }: ProductIdProps) {
  const { data, isLoading, error } = useQuery(
    "products",
    async () => await getProduct(id)
  );

  const ratingNumbers = Math.floor(Math.random() * 101) + 100;

  return (
    <Layout>
      <Container>
        {data ? (
          <Content>
            <ImageAndDescription>
              <ProductImage src={data.image} />
            </ImageAndDescription>
            <ProductDetails>
              <Title>{data.name}</Title>
              <Stars>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf /> ({ratingNumbers}) avaliações.
              </Stars>
              <Price>
                Por apenas: <h2>{formatPrice(data.price)}</h2>
              </Price>

              <ProductColor>
                <SubTitle>Cor do produto:</SubTitle>
                <Buttons>
                  <ButtonColor />
                </Buttons>
              </ProductColor>
              <SelectSize>
                <SubTitle>Selecione o tamanho:</SubTitle>
                <Buttons>
                  <ButtonSize>37</ButtonSize>
                  <ButtonSize>38</ButtonSize>
                  <ButtonSize>39</ButtonSize>
                  <ButtonSize>40</ButtonSize>
                  <ButtonSize>41</ButtonSize>
                  <ButtonSize>42</ButtonSize>
                  <ButtonSize>43</ButtonSize>
                </Buttons>
              </SelectSize>
              <PrimaryButton>Adicionar ao carrinho</PrimaryButton>
            </ProductDetails>
          </Content>
        ) : (
          ""
        )}
      </Container>
    </Layout>
  );
}
