import styled from "styled-components";

export const FormWrap = styled.section`
  padding:1em;
  margin: 1em auto auto auto;
  width: 100%;
  max-width: 400px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  color: white;
  
/* 
  margin: auto;
  width: 350px;
  text-align:center; */
  label {
      width:100px;
      display:inline-block;
  }
  select {
      margin:0.5em;
      font-size:14px;
  }
  button {
      width:80px;
      height:40px;
      :hover {
          border:1px solid white; 
           
      }
  }
 
`;

export const SettingsWrap = styled.section`
text-align:center;

`;
