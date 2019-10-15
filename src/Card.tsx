import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 0;
  padding: 20px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: white;
  z-index: 5;
`;
interface Props {}
export const Card: React.FunctionComponent<Props> = props => {
  return <Container>{props.children}</Container>;
};
