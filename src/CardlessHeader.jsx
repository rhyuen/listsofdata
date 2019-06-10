import React, { Component } from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  padding-bottom: 20px;
  font-size: 18px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

const ExportedStyledHeader = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default ExportedStyledHeader;
