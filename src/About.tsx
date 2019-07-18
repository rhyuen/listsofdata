import * as React from "react";
import styled from "styled-components";
import { Card } from "./Card";

const Banner: React.FunctionComponent<{}> = styled.section`
  width: 100%;
  height: 50vh;
  background: black;
  font-weight: bolder;
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

interface Props {}
export const About: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <Banner>JustCounting</Banner>
      <Card>
        <h1>About</h1>
        <p>
          Just counting some numbers over time so that it reduces the barrier to
          entry for data visualization.
        </p>
      </Card>
    </div>
  );
};
