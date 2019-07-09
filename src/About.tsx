import * as React from "react";
import { Card } from "./Card";

interface Props {}
export const About: React.FunctionComponent<Props> = () => {
  return (
    <Card>
      <h1>About</h1>
      <p>
        Just counting some numbers over time so that it reduces the barrier to
        entry for data visualization.
      </p>
    </Card>
  );
};
