import styled from "styled-components";

import { Button } from "antd";

export const PrimaryButton = styled(Button)`
  width: 100%;
  height: 60%;
  background-color: #2d3142;
  font-weight: 600;
  color: #FFFFFF;
  letter-spacing: 1px;
  font-size: clamp(9pt, 1vw, 11pt) !important;
  text-transform: uppercase;
  box-shadow: none !important;
  padding: 13px 20px !important;
  border-radius: 5px !important;
  

  
  &:hover {
    color: #000000 !important;
    box-shadow: none;
    border: 1px solid #000000 !important;
    background-color: #ffffff !important;
  }

`;
