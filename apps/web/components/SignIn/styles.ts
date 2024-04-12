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

  @media (max-width: 768px) {
    & > button {
      height: 5em;
    }
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  width: 25em;
  gap: 20px;
  flex-direction: column;

  & > button {
    width: 100%;
    height: 4em;
  }

  @media (max-width: 768px) {
    & > button {
      height: 5em;
      font-size: 13px !important;
    }
  }

  @media (max-width: 480px) {
    width: 90vw;
  }
`;

export const Label = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const Input = styled.input<IInput>`
  width: auto;
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

export const ForgotPassword = styled.p`
  margin-bottom: 1.5em;
  font-size: 15px;
  cursor: pointer;
  text-decoration: underline;
  text-underline-position: under;
`;
