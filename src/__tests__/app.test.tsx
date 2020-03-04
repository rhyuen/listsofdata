import React from "react";
import { render, fireEvent, screen, getByText } from "@testing-library/react";
import { App } from "../App";
import { Blog } from "../Blog";
import ReactDOM from "react-dom";

describe("hello", () => {
  test("asdf", done => {
    expect(true).toBe(true);
    done();
  });
});

describe("app", () => {
  test("should render loading indicator", done => {
    const { getByText } = render(<App />);
    expect(getByText("Just getting stuff going behind the scenes.")).toBeTruthy();
    done();
  });


  test("should render the blog component", done => {
    const { getByText } = render(<Blog />);
    expect(getByText(": A log of updates and changes made")).toBeTruthy()
    done()
  });
});
