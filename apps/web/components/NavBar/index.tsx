"use client";

import { useState } from "react";

import Link from "next/link";

import {
  RiUser3Fill,
  RiShoppingCartLine,
  RiShoppingCartFill,
  RiSearchLine,
  RiMenu5Fill,
  RiCloseFill,
} from "react-icons/ri";

import { useCart } from "@providers/cart";

import { CartProduct } from "@components/CartProduct";

import {
  NavBar,
  Logo,
  Pages,
  Page,
  CartAndLogin,
  CartDrawer,
  Content,
  Text,
  SubText,
  CategoriesContainer,
  Container,
  Categories,
  Category,
} from "./styles";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { cart } = useCart();

  return (
    <Container>
      <NavBar>
        <Logo>
          <Link href="/">Woolshoes</Link>
        </Logo>
        <Pages>
          <Page>
            <Link href="/products">Produtos</Link>
          </Page>
          <Page>
            <Link href="#">Sobre</Link>
          </Page>
          <Page>
            <Link href="#">Contato</Link>
          </Page>
        </Pages>
        <CartAndLogin>
          <Page>
            <Link href={"#"}>
              <RiSearchLine />
            </Link>
          </Page>
          <Page onClick={() => setOpen(true)}>
            <RiShoppingCartFill />
          </Page>
          <Page>
            <Link href={"#"}>
              <RiUser3Fill />
            </Link>
          </Page>
          <RiMenu5Fill />
        </CartAndLogin>
        <CartDrawer
          title="Meu carrinho"
          placement="right"
          open={open}
          width="510px"
          closeIcon={<RiCloseFill />}
          onClose={() => setOpen(false)}
        >
          {cart && cart.length > 0 ? (
            cart.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))
          ) : (
            <Content>
              <RiShoppingCartLine />
              <Text>Carrinho vazio!</Text>
              <SubText>Adicione produtos no seu carrinho.</SubText>
            </Content>
          )}
        </CartDrawer>
      </NavBar>
      <CategoriesContainer>
        <Categories>
          <Category>Masculinos</Category>
          <Category>Femininos</Category>
          <Category>Infantis</Category>
        </Categories>
      </CategoriesContainer>
    </Container>
  );
};
