import React, { Component } from "react";
import styled from "styled-components";

const Subtext = styled.p`
  font-size: 14px;
  line-height: 1;
  color: #343434;
  padding: 0;
  margin: 0;
`;

const ExportedSubtext = ({ limit = 140, children }) => {
  return (
    <Subtext>
      {children.length > limit
        ? children.slice(0, 140).concat("...")
        : children}
    </Subtext>
  );
};

export default ExportedSubtext;
