import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  width: 100%;
  height: 4em;
  align-items: center;
  background-color: #f2f4f5;
  padding: 0 3em;
  justify-content: space-between;
`;

export const Logo = styled.h2``;

export const Ul = styled.ul`
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
        border-bottom: 1px solid black;
      }

      @media (max-width: 1000px) {
        & {
          display: none;
        }
      }
    }
  }

  &:nth-child(3) {
    & > svg {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    & > svg {
      display: flex !important;
      font-size: 18pt;
      cursor: pointer;
    }
  }
`;

export const Li = styled.li`
  a {
    display: flex;
    gap: 0.5em;
    color: #000000;
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
  }
`;
