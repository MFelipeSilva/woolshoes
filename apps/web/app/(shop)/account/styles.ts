import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100%;
  padding: 10em 0;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  gap: 13em;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1200px) {
    gap: 6em;
  }
`;

export const LoginSection = styled.section`
  display: flex;
  width: auto;
  height: 80%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RegisterSection = styled.section`
  display: flex;
  width: auto;
  height: 80%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SectionContent = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  & > button {
    width: 100%;
    height: 4em;
  }
`;

export const Title = styled.h1`
  font-size: 22px;
`;

export const Label = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const Inputs = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 25em;
  height: 3em;
  border-radius: 5px;
  border: 1px solid #636363;
  background-color: #f5f5f5;
  outline: none;
  padding: 0 1em;
  font-size: 12pt;
  font-family: "Inter", sans-serif;

  &:focus {
    border: 1px solid #000000;
  }
`;

export const Separator = styled.div`
  display: flex;
  width: 100%;
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
  font-size: 15px;
  cursor: pointer;
  text-decoration: underline;
  text-underline-position: under;
`;

export const RequiredFields = styled.p`
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
`;
