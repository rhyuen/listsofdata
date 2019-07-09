import * as React from "react";
import styled from "styled-components";

const ReturnCardless = styled.div`
  margin: 20px 0;
  padding: 20px 20px;
`;
interface Props {}
export const Cardless: React.FunctionComponent<Props> = ({ children }) => {
  return <ReturnCardless>{children}</ReturnCardless>;
};
