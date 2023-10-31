import styled from "styled-components";

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
    & > svg {
      display: flex !important;
      color: #ffffff;
      font-size: 18pt;
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
    }

    @media (max-width: 1000px) {
      & > svg {
        font-size: 18pt;
      }
    }
  }
`;
