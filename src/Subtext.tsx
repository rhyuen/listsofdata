import * as React from "react";
import styled from "styled-components";

const ReturnSubtext = styled.p`
  font-size: 14px;
  line-height: 1;
  color: #343434;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
interface Props {
  limit?: number;
  children: Array<string>;
}
export const Subtext: React.FunctionComponent<Props> = ({
  limit = 140,
  children
}) => {
  return (
    <ReturnSubtext>
      {children.length > limit
        ? children.slice(0, limit).concat("...")
        : children}
    </ReturnSubtext>
  );
};
