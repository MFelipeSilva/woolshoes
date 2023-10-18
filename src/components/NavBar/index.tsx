"use client";

import Link from "next/link";

import {
  IoPersonCircleOutline,
  IoCart,
  IoSearch,
  IoMenuSharp,
} from "react-icons/io5";

import { NavBar, Ul, Li, Logo } from "./styles";

export const Navbar = () => {
  return (
    <NavBar>
      <Logo>dev-ecommerce</Logo>
      <Ul>
        <Li>
          <Link href={"/"}>Produtos</Link>
        </Li>
        <Li>
          <Link href={"/"}>Sobre</Link>
        </Li>
        <Li>
          <Link href={"/"}>Contato</Link>
        </Li>
      </Ul>
      <Ul>
        <Li>
          <Link href={"/"}>
            <IoCart fontSize="18px" />
            <p>Carrinho</p>
          </Link>
        </Li>
        <Li>
          <Link href={"/"}>
            <IoPersonCircleOutline fontSize="18px" />
            <p>Login</p>
          </Link>
        </Li>
        <IoMenuSharp fontSize="18px" />
      </Ul>
    </NavBar>
  );
};
