"use client";

import { useState } from "react";

import Link from "next/link";

import {
  RiUser3Fill,
  RiShoppingCartLine,
  RiShoppingCartFill,
  RiLogoutBoxLine,
  RiSearchLine,
  RiMenu5Fill,
  RiCloseFill,
  RiInboxUnarchiveLine,
} from "react-icons/ri";

import { useAuth } from "@lib/auth";
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
  UserPopover,
  PopoverContent,
  PopoverOptions,
  PopoverTitle,
  CartContent,
  overlayStyle,
} from "./styles";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { cart } = useCart();
  const { accessToken, user, handleLeaveAccount } = useAuth();

  const UserContent = (
    <PopoverContent>
      <PopoverOptions>
        <RiInboxUnarchiveLine />
        Meus pedidos
      </PopoverOptions>
      <PopoverOptions onClick={handleLeaveAccount}>
        <RiLogoutBoxLine />
        Sair
      </PopoverOptions>
    </PopoverContent>
  );

  return (
    <Container>
      <NavBar>
        <Content>
          <Logo>
            <Link href="/">Woolshoes</Link>
          </Logo>
          <Pages>
            <Page>
              <Link href="/category/men">Produtos</Link>
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
              <Link href="#">
                <RiSearchLine />
              </Link>
            </Page>
            <Page onClick={() => setOpen(true)}>
              <RiShoppingCartFill />
            </Page>
            <Page>
              {accessToken ? (
                <UserPopover
                  content={UserContent}
                  overlayStyle={overlayStyle}
                  placement="bottomRight"
                  title={
                    <PopoverTitle>Olá, {user?.name} &#x1F590;</PopoverTitle>
                  }
                >
                  <RiUser3Fill />
                </UserPopover>
              ) : (
                <Link href="/account">
                  <RiUser3Fill />
                </Link>
              )}
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
              <CartContent>
                <RiShoppingCartLine />
                <Text>Carrinho vazio!</Text>
                <SubText>Adicione produtos no seu carrinho.</SubText>
              </CartContent>
            )}
          </CartDrawer>
        </Content>
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
