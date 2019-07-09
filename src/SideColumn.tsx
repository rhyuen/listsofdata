import * as React from "react";
import styled from "styled-components";
import { RecentUpdates } from "./RecentUpdates";
import { Subscribe } from "./Subscribe";
import { SuggestedLinks } from "./SuggestedLinks";

const Root = styled.aside`
  display: none;
  @media (min-width: 1024px) {
    grid-column: 9 / span 4;
    display: block;
  }
`;

export const SideColumn: React.FunctionComponent<{}> = () => {
  return (
    <Root>
      <RecentUpdates />
      <SuggestedLinks />
      <Subscribe />
    </Root>
  );
};
