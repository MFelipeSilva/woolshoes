import styled from "styled-components";

import { Drawer } from "antd";

export const NavBar = styled.nav`
  display: flex;
  position: relative;
  top: 0;
  z-index: 4;
  width: 100%;
  height: 3.8em;
  padding: 0 3em;
  align-items: center;
  justify-content: space-between;
  background-color: #2d3142;
  transition: transform 100ms ease-out 0s;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 24px 0px;

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
  gap: 2em;
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
      font-size: 20pt;
      cursor: pointer;
    }
  }
`;

export const Page = styled.li`
  display: flex;

  svg {
    font-size: 13pt;
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
    .ant-drawer-header-title > button {
      display: flex;
      color: #000000;
      font-size: 27pt;
    }
  }

  .ant-drawer-body {
    display: flex;
    gap: 3em;
    padding: 40px 24px;
    flex-direction: column;
  }
`;

export const Content = styled.div`
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

export const Text = styled.p`
  font-size: 12pt;
  font-weight: 700;
`;

export const SubText = styled.span`
  font-size: 12pt;
  font-weight: 100;
`;
