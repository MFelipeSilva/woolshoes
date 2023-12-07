import styled from "styled-components";

import { Card } from "antd";

const { Meta } = Card;

export const Container = styled.main`
  display: flex;
  width: 100vw;
  margin: 10em 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Sidebar = styled.aside``;

export const CustomSwitch = styled.div``;

export const SwitchGender = styled.div`
  display: flex;
  height: 2.2em;
  gap: 1em;
  padding: 0 1em 0 1px;
  border-radius: 25px;
  border: 1px solid rgb(211, 212, 213);
  flex-direction: row;
  align-items: center;
  justify-content: center;

  a {
    color: #000000;
    font-size: 10pt;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
  }

  a:nth-child(1) {
    color: #ffffff;
    padding: 6.5px 13px;
    border-radius: 25px;
    background-color: #2d3142;
  }
`;

export const ProductsContent = styled.section`
  display: flex;
  width: 55vw;
  height: 100%;
  gap: 2em;
  align-items: start;
  flex-direction: column;
  justify-content: start;

  @media (max-width: 1850px) {
    width: 65vw;
  }
`;

export const CardProducts = styled(Card)`
  width: 320px !important;
`;

export const MetaProducts = styled(Meta)`
  .ant-card-meta-title {
    font-size: 12pt !important;
    font-weight: 700;
  }
`;

export const Image = styled.img``;
