import * as React from "react";
import { Card } from "./Card";

interface State {
  isError: boolean;
}
export class RootErrorBoundary extends React.Component<{}, State> {
  state = {
    isError: false
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? (
      <Card>
        <h1>Something unfortunate has happened on my end.</h1>
        <p>An error occurred.</p>
        <p>It's probably best to go back to the beginning.</p>
      </Card>
    ) : (
      children
    );
  }
}
