import styled from "styled-components";

export const TableWrap = styled.section`
  width: 100%;
  text-align: left;
  max-width: 1000px;
  @media screen and (min-width: 650px) {
    margin: auto;
  }
`;

export const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;

  * {
    padding: 0.8em;
  }

  tr {
    border-top: solid thin black;
    border-bottom: solid thin black;
    background: rgba(186, 186, 186, 0.9);
    color: white;
  }
  tr:first-child {
    border-top: none;
  }
  tr:last-child {
    border-bottom: none;
  }
  td:first-child {
    border-right: solid thin black;
  }
`;
