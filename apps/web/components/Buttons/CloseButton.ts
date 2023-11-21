import styled from "styled-components";

import { Button } from "antd";

export const CloseButton = styled(Button)`
  border: none;
  width: 18px !important;
  background-color: transparent;

  & > div > div {
    box-shadow: none !important;
  }
`;
