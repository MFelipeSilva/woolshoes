import styled from "styled-components";

import { Button } from "antd";

export const PrimaryButton = styled(Button)`
  display: flex;
  height: 60%;
  background-color: #2d3142;
  letter-spacing: 1px;
  color: #ffffff;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  font-size: clamp(9pt, 1vw, 11pt) !important;
  text-transform: uppercase;
  box-shadow: none;
  padding: 13px 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;

  & > div > div {
    box-shadow: none !important;
  }

  &:hover {
    color: #000000 !important;
    box-shadow: none;
    border: 1px solid #000000 !important;
    background-color: #ffffff !important;
  }
`;
