import React, { ReactNode } from "react";

import { PrimaryButtonStyle } from "./PrimaryButtonStyle";

interface IPrimaryButton {
  children: ReactNode;
  size?: "small" | "middle" | "large";
  color?: string;
  border?: string;
  icon?: any;
  onClick?: () => void;
}

export const PrimaryButton = (props: IPrimaryButton) => {
  return (
    <PrimaryButtonStyle
      size={props.size}
      color={props.color}
      border={props.border}
      onClick={props.onClick}
    >
      {props.children}
    </PrimaryButtonStyle>
  );
};
