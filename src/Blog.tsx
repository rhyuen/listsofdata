import * as React from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { StyledHeader } from "./StyledHeader";
import { Link, Redirect } from "react-router-dom";
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

interface Props {
  match: {
    params: {
      page: string;
    };
  };
}

type Post = {
  title: string;
  content: Array<String>;
  tags: Array<string>;
};

export const Blog: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <section>
      <Slant />
      <div>
        {Posts.map((post: Post, index: Number) => {
          return (
            <Card>
              <StyledHeader>{post.title}</StyledHeader>
              {post.content.map(text => {
                return <p>{text}</p>;
              })}
            </Card>
          );
        })}
      </div>
    </section>
  );
};
