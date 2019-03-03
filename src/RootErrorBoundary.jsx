import React, { Component } from "react";

export default class RootErrorBoundary extends Component {
  state = {
    isError: false
  };

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? <section>An error occurred.</section> : children;
  }
}
