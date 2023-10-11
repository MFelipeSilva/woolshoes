"use client";

import Link from "next/link";

import { IoPersonCircle, IoCart } from "react-icons/io5";

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
            Carrinho
          </Link>
        </Li>
        <Li>
          <Link href={"/"}>
            <IoPersonCircle fontSize="18px" />
            Login
          </Link>
        </Li>
      </Ul>
    </NavBar>
  );
};
