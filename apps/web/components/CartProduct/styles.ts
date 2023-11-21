import styled from "styled-components";

import { Button } from "antd";

export const Container = styled.div`
  display: flex;
  gap: 0.9em;
  width: 100%;
  padding-bottom: 2.5em;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 5px;
`;

export const ProductInformation = styled.div`
  display: flex;
  width: 49%;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 12pt;
  line-height: 25px;
  letter-spacing: 0.5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Color = styled.p`
  line-height: 25px;
`;

export const Size = styled.p`
  line-height: 25px;
`;

export const Price = styled.p`
  margin-top: 5px;
  font-size: 11pt;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.5px;
`;

export const Buttons = styled.div`
  display: flex;
  height: 100%;
  width: 21%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ContentQuantity = styled.div`
  display: flex;
  width: 7em;
  height: 2.5em;
  padding: 10px;
  gap: 0.7em;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(0, 0, 0, 0.2);
`;

export const IncreaseAndDecreaseButton = styled(Button)`
  display: flex;
  height: 20px;
  width: 20px !important;
  cursor: pointer;
  align-items: center;
  background-color: transparent;

  span > svg {
    font-size: 15pt;
    color: rgba(0, 0, 0, 0.2);
  }

  span > svg:hover {
    color: #1677ff !important;
  }
`;

export const Quantity = styled.span`
  display: flex;
  font-weight: 700;
  width: 15px !important;
  justify-content: center;
`;
