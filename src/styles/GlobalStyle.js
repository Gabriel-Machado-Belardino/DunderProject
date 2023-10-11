import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    background-color: #f5f5f5;
    color: #333;
}
a{
    text-decoration: none;
    color: inherit;
}
ul, li{
    list-style: none;
    padding: 0;
    margin: 0;
}

`;

export default GlobalStyle;
