import styled from "styled-components";

interface IInput {
  error?: boolean;
}

export const Container = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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

export const RequiredFields = styled.p`
  margin-bottom: 2em;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
`;
