import * as React from "react";
import styled from "styled-components";
import { Spinner } from "./LoadingSpinner";

interface Props {
  message?: string;
}

const Container: React.FunctionComponent<{}> = styled.section`
  padding: 2rem;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
`;
export const LoadingIndicator: React.FunctionComponent<Props> = ({
  message = "Default Message"
}) => {
  return (
    <>
      <Spinner />
      <Container>{message}</Container>
    </>
  );
};
