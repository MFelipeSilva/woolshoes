import styled from "styled-components";

interface IInput {
  error: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & > button {
    width: 100%;
    height: 4em;
  }

  & > h1 {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;

  & > button {
    width: 100%;
    height: 4em;
  }
`;

export const Label = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const Input = styled.input<IInput>`
  width: 25em;
  height: 3em;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.error ? "#FF0000" : "#636363")};
  background-color: #f5f5f5;
  outline: none;
  padding: 0 1em;
  font-size: 12pt;
  font-family: "Inter", sans-serif;

  &:focus {
    border: 1px solid ${(props) => (props.error ? "#FF0000" : "#000000")};
  }
`;

export const ErrorText = styled.span`
  color: #ff0000;
  font-size: 10pt;
`;

export const Separator = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 0;
  position: relative;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    display: block;
    width: 11em;
    height: 1px;
    left: 0;
    top: 50%;
    position: absolute;
    background-color: #000000;
  }
  &::after {
    content: "";
    display: block;
    width: 11em;
    height: 1px;
    right: 0;
    top: 50%;
    position: absolute;
    background-color: #000000;
  }
`;

export const ForgotPassword = styled.p`
  margin-bottom: 1.5em;
  font-size: 15px;
  cursor: pointer;
  text-decoration: underline;
  text-underline-position: under;
`;
