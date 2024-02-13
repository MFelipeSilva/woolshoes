import styled from "styled-components";

import { Drawer, Input, Popover } from "antd";

interface INavLinks {
  openMenu: boolean;
}

export const overlayStyle = {
  width: "180px",
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 24px 0px;
`;

export const NavigationBar = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100vw;
  height: 3.8em;
  align-items: center;
  justify-content: center;
  background-color: #2d3142;

  @media (max-width: 1000px) {
    & {
      padding: 0 2em;
    }
  }
`;

export const Logo = styled.h2`
  a {
    img {
      width: 45px;
      height: 45px;
    }
  }
`;

export const NavLinks = styled.ul<INavLinks>`
  display: flex;
  z-index: 1;
  width: 100%;
  margin: 0 2em;
  list-style: none;
  justify-content: space-between;

  &:nth-child(2) {
    li {
      a {
        border-bottom: 1px solid transparent;
        transition: border-bottom 0.3s ease;
      }
      a:hover {
        border-bottom: 1px solid #ffffff;
      }

      @media (max-width: 1024px) {
        & {
          display: flex;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: -1;
    transform: translateY(${({ openMenu }) => (openMenu ? "0" : "-100em")});
    top: 3.8em;
    left: 0%;
    width: 100%;
    height: 25em;
    margin: 0;
    gap: 2.5em;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #2d3142;
    transition: ${({ openMenu }) =>
      openMenu
        ? "transform 0.5s ease-in-out, opacity 0.1s ease-in-out"
        : "none"};

    & > div {
      gap: 2.5em;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export const CategoriesLinks = styled.div`
  display: flex;
  gap: 1.5em;
`;

export const InformationsLinks = styled.div`
  display: flex;
  gap: 1.5em;
`;

export const CartAndLogin = styled.ul`
  display: flex;
  gap: 0.5em;
  list-style: none;
  align-items: center;
  justify-content: center;

  & > svg {
    display: none;
  }

  @media (max-width: 1024px) {
    .menu-icon {
      display: flex;
      width: 35px;
      color: #ffffff;
      font-size: 25px;
      cursor: pointer;
      user-select: none;
    }

    .close-icon {
      display: flex;
      width: 35px;
      color: #ffffff;
      font-size: 35px;
      margin-top: 2px;
      cursor: pointer;
      user-select: none;
    }
  }
`;

export const CategoryPage = styled.li`
  display: flex;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }

  a {
    display: flex;
    gap: 0.5em;
    color: #ffffff;
    align-items: center;
    justify-content: center;
    font-size: 10pt;
    font-weight: 700;
    letter-spacing: 1.7px;
    text-decoration: none;
    text-transform: uppercase;

    @media (max-width: 1200px) {
      p {
        display: none;
      }

      & > svg {
        font-size: 15pt;
      }
    }
  }
`;

export const InfoPage = styled.li`
  display: flex;
  color: #ffffff;

  svg {
    width: 38px;
    font-size: 18pt;
  }

  &:hover {
    cursor: pointer;
  }

  a {
    display: flex;
    gap: 0.5em;
    color: #ffffff;
    align-items: center;
    justify-content: center;
    font-size: 10pt;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-decoration: none;
    text-transform: uppercase;

    @media (max-width: 1200px) {
      p {
        display: none;
      }

      & > svg {
        font-size: 16pt;
      }
    }

    @media (max-width: 1000px) {
      & > svg {
        display: none;
      }
    }
  }
`;

export const CartDrawer = styled(Drawer)`
  .ant-drawer-header {
    .ant-drawer-header-title {
      font-family: "Inter", sans-serif;

      button {
        display: flex;
        color: #000000;
        font-size: 27pt;
      }
    }
  }

  .ant-drawer-body {
    display: flex;
    gap: 3em;
    padding: 40px 24px;
    flex-direction: column;
    font-family: "Inter", sans-serif;

    span {
      font-weight: 200;
    }
  }
`;

export const CartContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 70pt;
    margin-bottom: 0.3em;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 90vw;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-size: 12pt;
  font-weight: 700;
`;

export const SubText = styled.span`
  font-size: 12pt;
  font-weight: 100;
`;

export const CategoriesContainer = styled.div`
  display: none;
  width: 100vw;
  height: 3em;
  margin-top: 3.8em;
  overflow-x: auto;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;

  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 480px) {
    padding: 0 3.5em;
    align-items: normal;
    justify-content: normal;
  }
`;

export const Categories = styled.ul`
  display: flex;
  gap: 3.5em;
  align-items: center;
  justify-content: center;

  & > a {
    color: #000000;
    text-decoration: none;
  }
`;

export const Category = styled.ul`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const SearchInput = styled(Input)`
  display: flex;
  height: 2.5em;
  border-radius: 10px;
`;

export const UserPopover = styled(Popover)``;

export const PopoverTitle = styled.h3`
  display: flex;
  font-size: 15px;
  font-family: "Inter", sans-serif;
  align-items: center;
`;

export const PopoverContent = styled.div`
  display: flex;
  margin-top: 1em;
  flex-direction: column;
`;

export const PopoverOptions = styled.button`
  display: flex;
  padding: 10px;
  gap: 0.5em;
  border: none;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  color: #000000;
  font-size: 15px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  background-color: transparent;

  svg {
    font-size: 16px;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;
