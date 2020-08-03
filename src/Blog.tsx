import * as React from "react";
import { Slant, SlantContent, SlantOffset } from "./shared/Slant";
import { Card } from "./Card";
import { StyledHeader } from "./StyledHeader";
import Posts from "./data/postupdates.js";
import { v4 } from "uuid";

// interface Props {
//   match: {
//     params: {
//       page: string;
//     };
//   };
// }

type Post = {
  title: string;
  content: Array<string>;
  tags: Array<string>;
};

export const Blog: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Slant>
        <SlantContent>
          <strong>BLOG</strong>: A log of updates and changes made
        </SlantContent>
      </Slant>
      <SlantOffset>
        {Posts.map((post: Post) => {
          return (
            <Card key={v4()}>
              <StyledHeader>{post.title}</StyledHeader>
              {post.content.map(text => {
                return <p key={v4()}>{text}</p>;
              })}
            </Card>
          );
        })}
      </SlantOffset>
    </>
  );
};
