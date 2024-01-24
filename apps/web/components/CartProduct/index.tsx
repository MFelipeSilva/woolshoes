import React from "react";

import { RiDeleteBin7Line, RiAddFill, RiSubtractFill } from "react-icons/ri";

import { useCart } from "@providers/cart";

import { ProductType } from "@/types/ProductType";

import { formatPrice } from "@helpers/formatPrice";

import { CloseButton } from "ui";

import {
  Container,
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
      <Image alt="product image" src={product.imageUrls?.[0]} />
      <ProductInformation>
        <Title>{product.name}</Title>
        <Color>{product.color}</Color>
        <Size>Tamanho: {product.sizes}</Size>
        <Price>{formatPrice(product.price)}</Price>
      </ProductInformation>
      <Buttons>
        <CloseButton
          icon={
            <RiDeleteBin7Line
              fontSize={18}
              onClick={() => removeProductFromCart(product.id)}
            />
          }
        />
        <ContentQuantity>
          <IncreaseAndDecreaseButton
            icon={<RiSubtractFill />}
            type="link"
            onClick={() => decreaseProductQuantity(product.id)}
          />
          <Quantity>{product.quantity}</Quantity>
          <IncreaseAndDecreaseButton
            icon={<RiAddFill />}
            type="link"
            onClick={() => increaseProductQuantity(product.id)}
          />
        </ContentQuantity>
      </Buttons>
    </Container>
  );
};
