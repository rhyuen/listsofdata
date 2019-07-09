import * as React from "react";
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

interface Props {
  href: string;
}
export const StyledAnchor: React.FunctionComponent<Props> = ({
  href,
  children
}) => {
  return <Anchor href={href}>{children}</Anchor>;
};
