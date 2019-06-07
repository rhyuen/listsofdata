import React, { Component } from "react";
import styled from "styled-components";

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(10, minmax(20px, 1fr));

  &:hover {
    background: rgba(0, 0, 150, 0.1);
  }
`;

const ExportedRow = props => {
  if (props.type === "header") {
    const HeaderRow = styled(Row)`
      grid-template-columns: repeat(${props.columns}, minmax(20px, 1fr));
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      &:hover {
        background: transparent;
      }
    `;
    return <HeaderRow>{props.children}</HeaderRow>;
  } else {
    return <Row>{props.children}</Row>;
  }
};

export default ExportedRow;
