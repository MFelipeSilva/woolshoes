"use client";

import { useState } from "react";

import Link from "next/link";

import {
  IoPersonCircleOutline,
  IoCart,
  IoMenuSharp,
  IoCloseSharp,
  IoCartOutline,
} from "react-icons/io5";

import { useCart } from "@services/cart/CartStorageProvider";

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
} from "./styles";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { cart } = useCart();

  return (
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
          <Link href="#" onClick={() => setOpen(true)}>
            <IoCart />
            <p>Carrinho</p>
          </Link>
        </Page>
        <Page>
          <Link href={"#"}>
            <IoPersonCircleOutline />
            <p>Login</p>
          </Link>
        </Page>
        <IoMenuSharp />
      </CartAndLogin>
      <CartDrawer
        title="Meu carrinho"
        placement="right"
        open={open}
        width="510px"
        closeIcon={<IoCloseSharp />}
        onClose={() => setOpen(false)}
      >
        {cart && cart.length > 0 ? (
          cart.map((product) => <CartProduct key={product.id} product={product} />)
        ) : (
          <Content>
            <IoCartOutline />
            <Text>Carrinho vazio!</Text>
            <SubText>Adicione produtos no seu carrinho.</SubText>
          </Content>
        )}
      </CartDrawer>
    </NavBar>
  );
};
