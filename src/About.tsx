import * as React from "react";
import styled from "styled-components";
import { Card } from "./Card";

const Banner: React.FunctionComponent<{}> = styled.section`
  width: 100%;
  height: 50vh;
  background: black;
  font-weight: bolder;
  letter-spacing: 2px;
  font-size: 25px;
  position: fixed;
  left: 0;
  top: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;  
`;

const PostBanner: React.FunctionComponent<{}> = styled.section`
  position: relative;
  top: 55vh;
`;


interface Props { }
export const About: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <Banner>JustCounting</Banner>
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
