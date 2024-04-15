import React from "react";

import { IconBin, IconMinus, IconPlus } from "@components/Icons";

import { useCart } from "@providers/cart";

import { ProductType } from "@/types/ProductType";

import { formatPrice } from "@helpers/formatPrice";

import { CloseButton } from "ui";

import {
  Container,
  ContentImageAndInfo,
  Image,
  Title,
  Color,
  ProductInformation,
  Size,
  Price,
  Buttons,
  Quantity,
  ContentQuantity,
  IncreaseAndDecreaseButton,
} from "./styles";

interface CartProduct {
  product: ProductType;
}

export const CartProduct = ({ product }: CartProduct) => {
  const {
    removeProductFromCart,
    decreaseProductQuantity,
    increaseProductQuantity,
  } = useCart();

  return (
    <Container>
      <ContentImageAndInfo>
        <Image alt="product image" src={product.imageUrls?.[0]} />
        <ProductInformation>
          <Title>{product.name}</Title>
          <Color>{product.color}</Color>
          <Size>Tamanho: {product.sizes}</Size>
          <Price>{formatPrice(product.price)}</Price>
        </ProductInformation>
      </ContentImageAndInfo>
      <Buttons>
        <CloseButton
          icon={
            <span onClick={() => removeProductFromCart(product.id)}>
              <IconBin />
            </span>
          }
        />

        <ContentQuantity>
          <IncreaseAndDecreaseButton
            icon={<IconMinus />}
            type="link"
            onClick={() => decreaseProductQuantity(product.id)}
          />
          <Quantity>{product.quantity}</Quantity>
          <IncreaseAndDecreaseButton
            icon={<IconPlus />}
            type="link"
            onClick={() => increaseProductQuantity(product.id)}
          />
        </ContentQuantity>
      </Buttons>
    </Container>
  );
};
