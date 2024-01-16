import { ReactNode } from "react";

import { PrimaryButtonStyle } from "./PrimaryButtonStyle";

interface IPrimaryButton {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  size?: "small" | "middle" | "large";
  color?: string;
  border?: string;
  icon?: any;
  onClick?: () => void;
}

export const PrimaryButton = (props: IPrimaryButton) => {
  return (
    <PrimaryButtonStyle
      type={props.type}
      size={props.size}
      color={props.color}
      border={props.border}
      onClick={props.onClick}
    >
      {props.children}
    </PrimaryButtonStyle>
  );
};
