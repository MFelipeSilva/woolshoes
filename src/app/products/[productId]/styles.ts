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

export const Content = styled.section`
  display: flex;
  width: 55vw;
  height: 100%;
`;

export const CardProducts = styled(Card)`
  width: 320px !important;
`;

export const MetaProducts = styled(Meta)`
  & > div > div:nth-child(1) {
    font-size: 12pt !important;
    font-weight: 700;
  }
`;

export const Image = styled.img``;
