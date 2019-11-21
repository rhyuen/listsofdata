import * as React from "react";
import { Slant, SlantContent, SlantOffset } from "./shared/Slant";
import { Card } from "./Card";
import { StyledHeader } from "./StyledHeader";
import Posts from "./data/postupdates.js";

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
    <>
      <Slant>
        <SlantContent>
          <strong>BLOG</strong>: A log of updates and changes made
        </SlantContent>
      </Slant>
      <SlantOffset>
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
      </SlantOffset>
    </>
  );
};
