import styled from "styled-components";

interface IPrimaryButtonStyle {
  size?: "small" | "middle" | "large";
  color?: string;
  border?: string;
}

export const PrimaryButtonStyle = styled.button<IPrimaryButtonStyle>`
  display: flex;
  height: 3.5em;
  background-color: ${(props) => (props.color ? props.color : "#2d3142")};
  letter-spacing: 1px;
  color: #ffffff;
  font-weight: 600;
  font-size: clamp(13px, 1.5vw, 14px) !important;
  text-transform: uppercase;
  box-shadow: none;
  padding: 13px 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => (props.border ? props.border : "#2d3142")};
  outline: none;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: #000000;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 1);
  }
`;
