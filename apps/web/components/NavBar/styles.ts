import styled from "styled-components";

import { Drawer, Input, Popover } from "antd";

export const overlayStyle = {
  width: "180px",
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 24px 0px;
`;

export const NavBar = styled.nav`
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
    color: #ffffff;
    text-decoration: none;
  }
`;

export const Pages = styled.ul`
  display: flex;
  gap: 2em;
  list-style: none;

  &:nth-child(2) {
    li {
      a {
        border-bottom: 1px solid transparent;
        transition: border-bottom 0.3s ease;
      }
      a:hover {
        border-bottom: 1px solid #ffffff;
      }

      @media (max-width: 1000px) {
        & {
          display: none;
        }
      }
    }
  }
`;

export const CartAndLogin = styled.ul`
  display: flex;
  gap: 0.3em;
  list-style: none;
  align-items: center;
  justify-content: center;

  &:nth-child(3) {
    & > svg {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    gap: 1em;

    & > svg {
      display: flex !important;
      color: #ffffff;
      font-size: 15pt;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    & > li:nth-child(1) {
      svg {
        display: none;
      }
    }
  }
`;

export const Page = styled.li`
  display: flex;
  color: #ffffff;

  svg {
    width: 38px;
    font-size: 15pt;
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

  @media (max-width: 1000px) {
    width: 90vw;
  }
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
  width: 100%;
  height: 3em;
  padding: 0 2em;
  margin-top: 3.8em;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Categories = styled.ul`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
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

  .ant-input {
  }
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
  padding: 10px 10px;
  gap: 0.5em;
  border: none;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
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
