import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  width: 100%;
  height: 4em;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f2f4f5;
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
    }
  }
`;

export const Li = styled.li`
  a {
    display: flex;
    gap: 0.5em;
    color: #000000;
    font-size: 11pt;
    font-weight: 500;
    text-decoration: none;
    align-items: center;
    justify-content: center;
  }
`;
