import React, { ReactNode } from "react";

import { PrimaryButtonStyle } from "./PrimaryButtonStyle";

interface IPrimaryButton {
  children: ReactNode;
  size?: "small" | "middle" | "large";
  color?: string;
  icon?: any;
  onClick?: () => void;
}

export const PrimaryButton = (props: IPrimaryButton) => {
  return <PrimaryButtonStyle
    color={props.color}
    size={props.size}
    onClick={props.onClick}
  >
    {props.children}
  </PrimaryButtonStyle>;
};
