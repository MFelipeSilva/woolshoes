import styled from "styled-components";

import { Button } from "antd";

export const Container = styled.div`
  display: flex;
  gap: 0.9em;
  width: 100%;
  padding-bottom: 2.5em;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const ContentImageAndInfo = styled.div`
  display: flex;
  gap: 0.9em;
  width: 70%;
  flex-direction: row;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 35%;
  height: 35%;
  object-fit: contain;
  border-radius: 5px;

  @media (max-width: 480px) {
    width: 40%;
    height: auto;
    object-fit: cover;
  }
`;

export const ProductInformation = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 50%;
  }
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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Size = styled.p`
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Price = styled.p`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.1px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Buttons = styled.div`
  display: flex;
  height: 100%;
  z-index: 1;
  background-color: #ffffff;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 480px) {
    width: 20%;
  }
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
  background-color: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 6em;
    height: 2em;
  }
`;

export const IncreaseAndDecreaseButton = styled(Button)`
  display: flex;
  height: 20px;
  width: 20px !important;
  cursor: pointer;
  align-items: center;
  background-color: transparent;

  span > svg {
    color: rgba(0, 0, 0, 0.2);
  }

  span > svg:hover {
    color: #1677ff !important;
  }
`;

export const Quantity = styled.span`
  display: flex;
  width: 15px !important;
  font-size: clamp(13px, 2vw, 15px);
  font-weight: 600 !important;
  justify-content: center;
`;
