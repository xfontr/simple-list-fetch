import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: montserrat, sans-serif;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button, input {
    font: inherit;
  }
`;

export default GlobalStyle;
