"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import {
  RiUser3Fill,
  RiShoppingCartLine,
  RiShoppingCartFill,
  RiLogoutBoxLine,
  RiMenu3Fill,
  RiCloseFill,
  RiInboxUnarchiveLine,
} from "react-icons/ri";

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

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

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
              <RiShoppingCartFill />
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
                  <RiUser3Fill />
                </UserPopover>
              ) : (
                <Link href="/account">
                  <RiUser3Fill />
                </Link>
              )}
            </InfoPage>
            {openMenu ? (
              <RiMenu3Fill
                className="menu-icon"
                onClick={() => setOpenMenu(!openMenu)}
              />
            ) : (
              <RiCloseFill
                className="close-icon"
                onClick={() => setOpenMenu(!openMenu)}
              />
            )}
          </CartAndLogin>
          <CartDrawer
            title="Meu carrinho"
            placement="right"
            open={open}
            contentWrapperStyle={{ width: "510px" }}
            closeIcon={<RiCloseFill />}
            onClose={() => setOpen(false)}
          >
            {cart && cart.length > 0 ? (
              cart.map((product) => {
                return <CartProduct key={product.id} product={product} />;
              })
            ) : (
              <CartContent>
                <RiShoppingCartLine />
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
