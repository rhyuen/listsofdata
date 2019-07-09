import * as React from "react";
import styled from "styled-components";

const ReturnCardItem = styled.section`
  padding-bottom: 10px;

  &:last-child {
    padding-bottom: 0px;
  }
`;

interface Props {}
export const CardItem: React.FunctionComponent<Props> = ({ children }) => {
  return <ReturnCardItem>{children}</ReturnCardItem>;
};
