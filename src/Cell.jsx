import React, { Component } from "react";
import styled from "styled-components";

const Cell = styled.span`
  padding: 10px;
  text-align: left;
  grid-column: span ${props => props.size};
`;
const ExportedCell = ({ size = 1, children }) => {
  return <Cell size={size}>{children}</Cell>;
};

export default ExportedCell;
