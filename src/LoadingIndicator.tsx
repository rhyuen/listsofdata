import * as React from "react";
import styled from "styled-components";

interface Props {
  message?: string;
}

const Container: React.FunctionComponent<{}> = styled.div`
  padding: 2rem;
  font-weight: bold;
  font-size: 20px;
`;
export const LoadingIndicator: React.FunctionComponent<Props> = ({
  message = "Default Message"
}) => {
  return <Container>{message}</Container>;
};
