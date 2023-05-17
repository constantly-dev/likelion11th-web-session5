import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body{
      font-family: 'Noto Sans KR', sans-serif;
    };
    button{
      cursor: pointer;
      outline: none;
      border: none;
      background: none;
      
    };
    input{
      outline: none;
      border: none;
      background-color: none;
      background-color:transparent;
      
    }
`;

export default GlobalStyle;
