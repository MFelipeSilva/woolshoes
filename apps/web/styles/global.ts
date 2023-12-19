import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding-top: 8em;
    font-family: "Inter", sans-serif;

    @media (max-width: 768px) {
      padding-top: 0;
    }
  }
`;
