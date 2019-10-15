import * as React from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { StyledHeader } from "./StyledHeader";
import Posts from "./data/postupdates.js";

const Slant = styled.div`
  position: fixed;
  left: 0;
  top: -20px;
  z-index: -1;
  height: 500px;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.1);
  transform: skewY(-4deg);
`;

export const Home: React.FunctionComponent<{}> = () => {
  return (
    <section>
      <Slant />
      {Posts.map(p => {
        return (
          <Card>
            <StyledHeader>{p.title}</StyledHeader>
            {p.content.map(c => {
              return <p>{c}</p>;
            })}
          </Card>
        );
      })}
    </section>
  );
};
