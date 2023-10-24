"use client";

import Link from "next/link";

import {
  IoPersonCircleOutline,
  IoCart,
  IoSearch,
  IoMenuSharp,
} from "react-icons/io5";

import { NavBar, Logo, Pages, Page, CartAndLogin } from "./styles";

export const Navbar = () => {
  return (
    <NavBar>
      <Logo>Woolshoes</Logo>
      <Pages>
        <Page>
          <Link href={"/"}>Produtos</Link>
        </Page>
        <Page>
          <Link href={"/"}>Sobre</Link>
        </Page>
        <Page>
          <Link href={"/"}>Contato</Link>
        </Page>
      </Pages>
      <CartAndLogin>
        <Page>
          <Link href={"/"}>
            <IoCart />
            <p>Carrinho</p>
          </Link>
        </Page>
        <Page>
          <Link href={"/"}>
            <IoPersonCircleOutline />
            <p>Login</p>
          </Link>
        </Page>
        <IoMenuSharp />
      </CartAndLogin>
    </NavBar>
  );
};
