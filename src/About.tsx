import * as React from "react";
import styled from "styled-components";
import { FullBanner } from "./FullBanner";
import { Card } from "./Card";

const PostBanner: React.FunctionComponent<{}> = styled.section`
  position: relative;
  top: 55vh;
`;


interface Props { }
export const About: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <FullBanner>JustCounting</FullBanner>
      <PostBanner>
        <Card>
          <h1>About</h1>
          <p>
            Just counting some numbers over time so that it reduces the barrier to
            entry for data visualization.
          </p>
        </Card>
      </PostBanner>
    </div>
  );
};
