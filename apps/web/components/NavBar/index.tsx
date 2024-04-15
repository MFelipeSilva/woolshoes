"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import {
  IconCartFill,
  IconBox,
  IconCartOutline,
  IconClose,
  IconLogout,
  IconMenu,
  IconPersonFill,
} from "@components/Icons";

import { useAuth } from "@lib/auth";
import { useCart } from "@providers/cart";

import { CartProduct } from "@components/CartProduct";

import logo from "@/public/logo.svg";

import {
  NavigationBar,
  Logo,
  NavLinks,
  CategoryPage,
  InfoPage,
  CategoriesLinks,
  InformationsLinks,
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
import { ProductType } from "@/types/ProductType";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const { cart } = useCart();
  const { accessToken, user, handleLeaveAccount } = useAuth();

  const totalQuantity = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const UserContent = (
    <PopoverContent>
      <PopoverOptions>
        <IconBox />
        Meus pedidos
      </PopoverOptions>
      <PopoverOptions onClick={handleLeaveAccount}>
        <IconLogout />
        Sair
      </PopoverOptions>
    </PopoverContent>
  );

  return (
    <Container>
      <NavigationBar>
        <Content>
          <Logo>
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </Logo>
          <NavLinks openMenu={openMenu} onClick={() => setOpenMenu(false)}>
            <CategoriesLinks>
              <CategoryPage>
                <Link href="/category/men">Masculino</Link>
              </CategoryPage>
              <CategoryPage>
                <Link href="/category/women">Feminino</Link>
              </CategoryPage>
              <CategoryPage>
                <Link href="/category/kids">Infantis</Link>
              </CategoryPage>
            </CategoriesLinks>
            <InformationsLinks>
              <InfoPage>
                <Link href="/about-us">Sobre nós</Link>
              </InfoPage>
              <InfoPage>
                <Link href="/service">Atendimento</Link>
              </InfoPage>
            </InformationsLinks>
          </NavLinks>
          <CartAndLogin>
            <InfoPage onClick={() => setOpen(true)}>
              <span>
                <IconCartFill />
                <span>{totalQuantity}</span>
              </span>
            </InfoPage>
            <InfoPage>
              {accessToken ? (
                <UserPopover
                  content={UserContent}
                  overlayStyle={overlayStyle}
                  placement="bottomRight"
                  title={
                    <PopoverTitle>Olá, {user?.name} &#x1F590;</PopoverTitle>
                  }
                >
                  <span>
                    <IconPersonFill />
                  </span>
                </UserPopover>
              ) : (
                <Link href="/account">
                  <IconPersonFill />
                </Link>
              )}
            </InfoPage>
            {openMenu ? (
              <span
                className="menu-icon"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <IconClose />
              </span>
            ) : (
              <span
                className="menu-icon"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <IconMenu />
              </span>
            )}
          </CartAndLogin>
          <CartDrawer
            title="Meu carrinho"
            placement="right"
            open={open}
            contentWrapperStyle={{ width: "510px" }}
            closeIcon={<IconClose />}
            onClose={() => setOpen(false)}
          >
            {cart && cart.length > 0 ? (
              cart.map((product) => {
                return <CartProduct key={product.id} product={product} />;
              })
            ) : (
              <CartContent>
                <IconCartOutline />
                <Text>Carrinho vazio!</Text>
                <SubText>Adicione produtos no seu carrinho.</SubText>
              </CartContent>
            )}
          </CartDrawer>
        </Content>
      </NavigationBar>
      <CategoriesContainer>
        <Categories>
          <Link href="/category/men">
            <Category>Masculinos</Category>
          </Link>
          <Link href="/category/women">
            <Category>Femininos</Category>
          </Link>
          <Link href="/category/kids">
            <Category>Infantis</Category>
          </Link>
        </Categories>
      </CategoriesContainer>
    </Container>
  );
};
