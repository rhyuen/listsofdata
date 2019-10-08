import * as React from "react";
import styled from "styled-components";
import { Card } from "./Card";

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

export const Home: React.FunctionComponent<{}> = () => {
  return (
    <section>
      <Slant />
      <Card>
        <h1>October 7, 2019</h1>
        <p>A Chart has been added.   Number of pushup sessions per month has been graphed.</p>
      </Card>
      <Card>
        <h1>October 4, 2019</h1>
        <p>A Chart has been added.  Number of days between pushup sessions has been graphed.</p>
      </Card>
      <Card>
        <h1>More Charts: September 16, 2019</h1>
        <p>More charts may soon be added.</p>
      </Card>
      <Card>
        <h1>Charts: August 28, 2019</h1>
        <p>
          A Chart may or may not have been added. Feature flags may or may not
          be attempted.
        </p>
      </Card>
      <Card>
        <h1>Added a 404: August 28, 2019</h1>
        <p>
          It turns out I neglected to add a 'Not Found' or '404' page. That has
          been remedied.
        </p>
      </Card>
      <Card>
        <h1>Added Sentry Logging: August 10, 2019</h1>
        <p>
          I added Sentry logging to the root of the application as well as the
          Root Error boundary. I am, however, not entirely sure if it works.
        </p>
        <p>
          Some things to add in the future are react-spring for the loading
          animations. Cleaning up the css grid and removing some of the media
          queries are also a concern. ChartJS for the data visualization is also
          something that is in the cards.
        </p>
      </Card>
      <Card>
        <h1>Typescript and Code Splitting: July 12, 2019</h1>
        <p>
          I updated the code base to use Typescript. I had to use type 'any' for
          some of the variables though. I also started using React.Suspense for
          some of the components so that the initial download by users that
          don't click on all of the routes is minimized.
        </p>
      </Card>
      <Card>
        <h1>Other Links: June 21, 2019</h1>
        <p>
          Added the 'Other Links' Side column portion to actually have links
          that hit a service that I made. Sadly, the data duplicates itself
          because that's all there is in the data store.
        </p>
      </Card>
      <Card>
        <h1>Styling Updates: June 6, 2019</h1>
        <p>
          Refactored some of the UI Components since I didn't realize I would
          stick with this site/app. The 'Explore' component looked like a mess;
          it still does. However, it looks a smidgen more tidier now.
        </p>
        <p>
          I'm mainly working on this now because the router needs to be 'power
          cycled' and I can't be bothered to get up. As such, I can only work on
          stuff that's offline.
        </p>
      </Card>
      <Card>
        <h1>Counting things</h1>
        <p>
          Hi, I'm Robert and I am just doing some data entry and aggregation of
          some data. There's no goal. It's just some busy work to see if
          something more interesting can come as a result.
        </p>
      </Card>
    </section>
  );
};
