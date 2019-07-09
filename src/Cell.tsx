import * as React from "react";
import styled from "styled-components";

interface Props {
  size?: number;
}

const ReturnedCell = styled.span<Props>`
  padding: 10px;
  text-align: left;
  grid-column: span ${props => props.size};
`;

export const Cell: React.FunctionComponent<Props> = ({
  size = 1,
  children
}) => {
  return <ReturnedCell size={size}>{children}</ReturnedCell>;
};
