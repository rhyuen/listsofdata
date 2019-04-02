import React, { Component } from "react";
import styled from "styled-components";

const Cell = styled.span`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:first-child {
    border-left: none;
  }

  &:hover {
    border: 1px solid rgba(0, 0, FF, 1);
  }
`;
const ExportedCell = props => {
  return <Cell>{props.children}</Cell>;
};

export default ExportedCell;
