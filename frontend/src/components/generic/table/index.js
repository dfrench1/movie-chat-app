import React from "react";
import { TableStyle, TableWrap } from "./styled";

const InfoTable = ({ data }) => (
  <TableWrap>
    <TableStyle>
      <tbody>
      {data.map(el => (
        <tr>
          <td>{el.title}</td>
          <td>{el.value}</td>
        </tr>
      ))}
      </tbody>
    </TableStyle>
  </TableWrap>
);

export default InfoTable;
