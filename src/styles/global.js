import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    font-family: 'Roboto', sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  /* Change Autocomplete styles in Chrome*/
  input:-webkit-autofill {
    background-color: rgb(0, 0, 0, 0) !important;
    -webkit-box-shadow: 0 0 0px 1000px #f9f9f9 inset;
  }
`;
