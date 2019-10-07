import * as React from "react";
import { Card } from "./Card";
import {Link} from "react-router-dom";
import styled from "styled-components";
import * as Sentry from "@sentry/browser";

const Button = styled.button`
  padding: 10px;
  background: black;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  border: 2px solid black;

  &:hover{
    background: white;
    color: black;    
  }

  &:focus{
    outline: none;
  }
`;

const HyperLink = styled.a`
  font-weight: bold;
  color: black;
  padding: 2px 5px;
  background: rgba(0,0,0,0.1);
  text-decoration: none;
`;

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

  handleSentryClick = () => {
    console.log("Sentry Send Logs button clicked!");
    Sentry.showReportDialog({ eventId: this.state.eventId })
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? (
      <Card>
        <h1>Something unfortunate has happened on my end.</h1>
        <p>An error has occurred.</p>
        <p>It's probably best to go back to the beginning.  Click <HyperLink href ="/">here</HyperLink> to do so.</p>
        <Button onClick={this.handleSentryClick}>
          Report Feedback
        </Button>
      </Card>
    ) : (
      children
    );
  }
}
