import React, { Component } from "react";
import Cardless from "./Cardless.jsx";
import styled from "styled-components";
import Header from "./CardlessHeader.jsx";

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
      <Cardless>
        <Header>Recent Updates</Header>
        <p>col 4 ad panel</p>
      </Cardless>
      <Cardless>
        <Header>Other links</Header>
        <p>link one</p>
      </Cardless>
      <Cardless>
        <Header>Subscribe</Header>
        <p>Email address entry</p>
      </Cardless>
    </SideColumn>
  );
};

export default ExportedSideColumn;
