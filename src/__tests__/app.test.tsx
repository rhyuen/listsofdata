import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { screen, waitForElementToBeRemoved, getByTestId } from "@testing-library/dom";
import { App } from "../App";
import { Blog } from "../Blog";
import { RecentUpdates } from "../RecentUpdates";
import { SuggestedLinks } from "../SuggestedLinks";


describe("Router interactions", () => {
  test("should render loading indicator", async (done) => {
    const { getByText } = render(<App />);
    expect(getByText("Just getting stuff going behind the scenes.")).toBeTruthy();

    done();
  });

  test("landing page should load", async (done) => {
    const { getByText } = render(<App />);
    const target = "Just counting some numbers over time so that it reduces the barrier to entry for data visualization.";
    await waitFor(() => {
      expect(getByText(target, { exact: false }).textContent).toMatch(target);
    });
    expect(getByText(target, { exact: false }).textContent).toMatch(target);
    done();
  });

  test("should render the blog component", async (done) => {
    const { getByText } = render(<App />);
    const blogNavButton = screen.getByTestId("blog");
    fireEvent.click(blogNavButton);

    await waitFor(() => {
      const target = /a log of updates and changes made/i;
      expect(getByText(target, { exact: false }).textContent).toMatch(target);
      done();
    });
  });

  test.skip("should render the Explore Tab", async (done) => {
    const { getByText } = render(<App />);
    const exploreNavButton = screen.getByTestId("explore");
    fireEvent.click(exploreNavButton);



    // await waitFor(() => {
    //   expect(getByText("Other Links").textContent).toMatch("Other Links");
    //   expect(getByText("Recent Updates").textContent).toMatch("Recent Updates");
    //   expect(screen.getByTestId("suggested_links_loading")).toBeInTheDocument();
    //   expect(screen.getByTestId("recent_updates_loading")).toBeInTheDocument();
    // });
    // await waitForElementToBeRemoved(() => {
    //   screen.getByTestId("suggested_links_loading");
    // });
    // await waitForElementToBeRemoved(() => {
    //   screen.getByTestId("recent_updates_loading");
    // });
    await waitFor(() => {
      const target = /a brief description/i;
      expect(getByText(target, { exact: false }).textContent).toMatch(target);

      done();
    });
  });

  test.skip("should render the Graph Tab", async (done) => {
    const { getByText } = render(<App />);
    const graphNavButton = screen.getByTestId("graph");
    fireEvent.click(graphNavButton);

    await waitFor(() => {
      const target = /just some graphs made from the data in 'explore'/i;
      expect(getByText(target, { exact: false }).textContent).toMatch(target);
      done();
    });
  });
});

describe("Recent Updates", () => {
  test("header is present.", async () => {
    const { getByText } = render(<RecentUpdates />);
    const target = "Recent Updates";
    expect(getByText("Recent Updates", { exact: false }).textContent).toMatch(target);

    await waitForElementToBeRemoved(() => getByText("Loading Updates...", { exact: false }).textContent);
  });
});

describe("Suggested Links", () => {
  test("header is present.", async () => {
    const { getByText } = render(<SuggestedLinks />);
    const target = "Other Links";
    expect(getByText("Other Links", { exact: false }).textContent).toMatch(target);

    await waitForElementToBeRemoved(() => getByText("Loading Links...", { exact: false }).textContent);
  });
});