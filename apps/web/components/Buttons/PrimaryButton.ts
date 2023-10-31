import styled from "styled-components";

import { Button } from "antd";

export const PrimaryButton = styled(Button)`
  width: 15em;
  height: 60% !important;
  background-color: #2d3142;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: clamp(9pt, 1vw, 11pt) !important;
  text-transform: uppercase;
  box-shadow: none !important;
  padding: 13px 20px !important;
  border-radius: 5px !important;
  
  &:active,
  &:focus {
    border-color: #2d3142;
  }
  
  &:hover {
    color: #000000 !important;
    background-color: #ffffff !important;
    box-shadow: 0 0 10px 0 #2d3142 !important;
  }

`;
