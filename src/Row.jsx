import React, { Component } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:first-child {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  &:hover {
    background: rgba(0, 0, 150, 0.1);
  }
`;
const ExportedRow = props => {
  return <Row>{props.children}</Row>;
};

export default ExportedRow;
