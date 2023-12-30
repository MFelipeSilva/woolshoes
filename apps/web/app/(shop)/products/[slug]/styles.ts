import styled from "styled-components";

import { Card, Checkbox, Col, Drawer, Row } from "antd";

const { Meta } = Card;

interface ISidebar {
  display: boolean;
}

interface ISwitchLink {
  active: boolean;
}

export const Container = styled.main`
  display: flex;
  width: 100vw;
  gap: 3em;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 5em;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100vw;
  gap: 3em;
  flex-direction: row;
  align-items: start;
  justify-content: center;

  @media (max-width: 992px) {
    align-items: center;
    flex-direction: column;

    & > :nth-child(1) {
      display: none;
    }
  }
`;

export const Sidebar = styled.aside<ISidebar>`
  display: flex;
  gap: 2.5em;
  width: 15vw;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  @media (max-width: 1750px) {
    width: 20vw;
  }

  @media (max-width: 990px) {
    width: 100%;
    display: ${(props) => (props.display === true ? "flex" : "none")};
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

export const ProductPath = styled.span`
  font-size: 12px;
  font-weight: 600;

  a {
    color: #000000;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h2`
  font-size: 25px;
`;

export const Shoes = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: #000000;
    font-size: 15px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Filter = styled.div`
  display: flex;
  gap: 1.5em;
  flex-direction: column;
`;

export const FilterTitle = styled.h3`
  font-size: 17px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Categories = styled.div`
  display: flex;
  gap: 1.5em;
  padding-top: 1em;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

export const CategoryTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
`;

export const SizeGroup = styled.div`
  display: flex;
  gap: 0.8em;
  width: 90%;
  flex-wrap: wrap;
`;

export const ButtonSize = styled.button`
  display: flex;
  width: clamp(3.5em, 3vw, 4em);
  height: clamp(3.5em, 3vw, 4em);
  cursor: pointer;
  color: #000000;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  background-color: transparent;
  font-family: "Inter", sans-serif;

  &:hover {
    border: 1px solid #2d3142;
    background-color: rgba(45, 49, 66, 0.2);
  }

  @media (max-width: 480px) {
    font-size: 9pt;
  }
`;

export const Materials = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

export const Material = styled.div``;

export const Genres = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

export const Gender = styled.div``;

export const CheckboxAndText = styled(Checkbox)`
  & > span:nth-child(1) > span {
    width: 17px;
    height: 17px;
  }
  & > span:nth-child(2) {
    font-size: 14px !important;
    font-weight: 400;
    font-family: "Inter", sans-serif;
  }
`;


export const SwitchContainer = styled.div`
  display: flex;
  width: 170px;
  padding: 0.1em 0;
  border-radius: 25px;
  border: 1px solid rgb(211, 212, 213);
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const SwitchLink = styled.a<ISwitchLink>`
  color: ${({ active }) => (active === true ? "#ffffff" : "#000000;")};
  font-size: 10pt;
  font-weight: 700;
  padding: 6.5px 13px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 25px;
  background-color: ${({ active }) =>
    active === true ? "#2d3142" : "#ffffff"};
`;

export const FilterButton = styled.button`
  display: none;
  padding: 0 2em;
  height: 2.5em;
  gap: 1em;
  cursor: pointer;
  color: #000000;
  font-size: 10pt;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
  border-radius: 25px;
  border: 1px solid rgb(211, 212, 213);
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: border-color 250ms ease 0s;

  &:hover {
    border-color: rgb(0, 0, 0);
  }

  svg {
    font-size: 17px;
  }

  @media (max-width: 992px) {
    display: flex;
  }
`;

export const ProductsContent = styled.section`
  display: flex;
  width: 55vw;
  height: 100%;
  gap: 2em;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1850px) {
    width: 65vw;
  }

  @media (max-width: 992px) {
    width: 90vw;
  }
`;

export const ProductsHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ProductsRow = styled(Row)`
  row-gap: 2.5em;

  @media (max-width: 992px) {
    row-gap: 2em;
    width: 100vw !important;
  }
`;

export const ProductsCol = styled(Col)`
  @media (max-width: 992px) {
    padding: 0 1em !important;
  }

  @media (max-width: 768px) {
    padding: 0 0.5em !important;
  }

  @media (max-width: 576px) {
    padding: 0 0.5em !important;
  }
`;

export const ProductsCard = styled(Card)`
  width: 100%;
  max-width: 100%;

  .ant-card-body {
    padding: 24px 15px !important;
  }

  @media (max-width: 992px) {
    height: 100%;
  }
`;

export const MetaProducts = styled(Meta)`
  font-family: "Inter", sans-serif;

  .ant-card-meta-title {
    font-size: clamp(10pt, 2vw, 12pt) !important;
    font-weight: 700;
  }

  .ant-card-meta-description {
    font-size: clamp(10pt, 2vw, 11pt);
    font-weight: 500;
  }
`;

export const ProductImage = styled.img``;

export const FilterDrawer = styled(Drawer)`
  .ant-drawer-header {
    padding: 10px 24px !important;
  }

  .ant-drawer-header > .ant-drawer-header-title > button > svg {
    color: #000000;
    font-size: 28pt;
  }
`;
