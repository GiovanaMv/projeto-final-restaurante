import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html, body, #root {
    width: 100%;
    
  } 
  body {
    background: #FFF8F2;
    color: #222;
    font-family: 'Roboto';
  }

  #root {
    min-height: 100vh;
  }
  main{
    flex: 1;
  }
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export default GlobalStyle;