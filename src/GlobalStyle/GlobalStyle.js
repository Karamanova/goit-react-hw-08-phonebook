import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
    background-image: linear-gradient(
    252.43deg, 
    #D45B78 0.01%,
    #903DE8 101.01%);
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  p {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  img {
    display: block;
  }
`;
