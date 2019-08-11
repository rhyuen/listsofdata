import * as React from "react";
import { Card } from "./Card";
import * as Sentry from "@sentry/browser";

interface State {
  isError: boolean;
  eventId: string;
}
export class RootErrorBoundary extends React.Component<{}, State> {
  state = {
    isError: false,
    eventId: ""
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? (
      <Card>
        <h1>Something unfortunate has happened on my end.</h1>
        <p>An error occurred.</p>
        <p>It's probably best to go back to the beginning.</p>
        <button
          onClick={() =>
            Sentry.showReportDialog({ eventId: this.state.eventId })
          }
        >
          Report feedback
        </button>
      </Card>
    ) : (
      children
    );
  }
}
