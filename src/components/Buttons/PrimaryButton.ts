import styled from "styled-components";

import { Button } from "antd";

export const PrimaryButton = styled(Button)`
  height: 60% !important;
  background-color: #2d3142;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 11pt !important;
  text-transform: uppercase;
  padding: 13px 20px !important;
  border-radius: 5px !important;

  &:hover {
    background-color: #ffffff !important;
    color: #000000 !important;
  }
`;
