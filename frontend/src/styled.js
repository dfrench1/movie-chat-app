import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    color:black;
    font-size: 16px;
    font-family: sans-serif;
    margin:0;

  }
  a {
    color:white;
    text-decoration:none;
  }
  input, button {
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    padding:0.5em;
    background-color: white;
    line-height:1.5;
    margin:0.5em;
  }
  button {
    background: #008000;
    color: white;
    font-size: 14px;
    border:none;
    :focus {
      border:none;
      outline:none;
    }
  }
  input {
    font-size: 14px;
    :hover{
      border-color: #7aabdb;
    }
    :focus {
      outline:none !important;
      border-color: #7aabdb;
    }
  }
  h4, h3 {
    font-weight:500;
  }
 
  .sc-user-input--file-icon-wrapper{
    display:none !important;
  }
`