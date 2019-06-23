import React, { Component } from "react";
import styled from "styled-components";

const Anchor = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
  text-spacing: 2px;

  &:hover {
    text-decoration: underline;
  }
`;

const ExportedAnchor = ({ href, children }) => {
  return <Anchor href={href}>{children}</Anchor>;
};

export default ExportedAnchor;
