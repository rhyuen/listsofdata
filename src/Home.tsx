import * as React from "react";
import { Card } from "./Card";

export const Home: React.FunctionComponent<{}> = () => {
  return (
    <section>
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
