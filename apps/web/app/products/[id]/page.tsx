"use client";

import { useQuery } from "react-query";

import { IoMdStar, IoMdStarHalf } from "react-icons/io";

import { getProduct } from "@services/api/getProducts";

import { formatPrice } from "@/utils/formatPrice";

import { useCart } from "@services/cart/CartStorageProvider";

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
  const {
    data: product,
    isLoading,
    error,
  } = useQuery(["product", id], () => getProduct(id), {
    enabled: !!id,
  });

  const { addProductToCart } = useCart();

  const ratingNumbers = Math.floor(Math.random() * 101) + 100;

  return (
    <Layout>
      <Container>
        {product ? (
          <Content>
            <ImageAndDescription>
              <ProductImage src={product.image} />
            </ImageAndDescription>
            <ProductDetails>
              <Title>{product.name}</Title>
              <Stars>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf /> ({ratingNumbers}) avaliações.
              </Stars>
              <Price>
                Por apenas: <h2>{formatPrice(product.price)}</h2>
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
              <PrimaryButton onClick={() => addProductToCart(product)}>
                Adicionar ao carrinho
              </PrimaryButton>
            </ProductDetails>
          </Content>
        ) : (
          ""
        )}
      </Container>
    </Layout>
  );
}
