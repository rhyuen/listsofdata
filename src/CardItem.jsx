import React, { Component } from "react";
import styled from "styled-components";

const CardItem = styled.section`
  padding-bottom: 10px;

  &:last-child {
    padding-bottom: 0px;
  }
`;

const ExportedCardItem = ({ children }) => {
  return <CardItem>{children}</CardItem>;
};

export default ExportedCardItem;
