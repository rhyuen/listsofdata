import React, { Component } from "react";
import styled from "styled-components";

const Cell = styled.span`
  padding: 10px;
`;
const ExportedCell = props => {
  return <Cell>{props.children}</Cell>;
};

export default ExportedCell;
