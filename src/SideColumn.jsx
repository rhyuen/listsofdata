import React, { Component } from "react";
import Cardless from "./Cardless.jsx";
import styled from "styled-components";

const SideColumn = styled.aside`
  grid-column: 10 / span 3;
`;
const ExportedSideColumn = () => {
  return (
    <SideColumn>
      <Cardless>
        <h1>Recent Updates</h1>
        <p>col 4 ad panel</p>
      </Cardless>
      <Cardless>
        <h1>Other links</h1>
        <p>link one</p>
      </Cardless>
      <Cardless>
        <h1>Subscribe</h1>
        <p>Email address entry</p>
      </Cardless>
    </SideColumn>
  );
};

export default ExportedSideColumn;
