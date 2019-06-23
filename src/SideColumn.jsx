import React, { Component } from "react";
import styled from "styled-components";
import RecentUpdates from "./RecentUpdates.jsx";
import Subscribe from "./Subscribe.jsx";
import SuggestedLinks from "./SuggestedLinks.jsx";

const SideColumn = styled.aside`
  display: none;
  @media (min-width: 1024px) {
    grid-column: 9 / span 4;
    display: block;
  }
`;

const ExportedSideColumn = () => {
  return (
    <SideColumn>
      <RecentUpdates />
      <SuggestedLinks />
      <Subscribe />
    </SideColumn>
  );
};

export default ExportedSideColumn;
