import React, { Component } from "react";
import styled from "styled-components";

const Cell = styled.span`
  padding: 10px;
  text-align: left;
  grid-column: span 1;
`;
const ExportedCell = props => {
  return <Cell>{props.children}</Cell>;
};

export default ExportedCell;
