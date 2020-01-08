import React from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import { LoadingIndicator } from "./shared/LoadingIndicator";
import { HashRouter, Route, Switch } from "react-router-dom";

import "@babel/polyfill";

const Blog = React.lazy(() =>
  import("./Blog").then(({ Blog }) => ({ default: Blog }))
);
const Landing = React.lazy(() =>
  import("./Landing").then(({ Landing }) => ({ default: Landing }))
);
const Explore = React.lazy(() =>
  import("./Explore").then(({ Explore }) => ({ default: Explore }))
);
const Graph = React.lazy(() =>
  import("./Graphs/IndexGraph").then(({ IndexGraph }) => ({
    default: IndexGraph
  }))
);

const Footer = React.lazy(() =>
  import("./shared/Footer").then(({ Footer }) => ({
    default: Footer
  }))
);

const NotFound = React.lazy(() =>
  import("./NotFound").then(({ NotFound }) => ({ default: NotFound }))
);

import { Nav } from "./Nav";

const Root = styled.div`
  width: 100%;
`;

const AppContainer = styled.section`
  width: 100%;
`;
const RouteContainer = styled.section`
  position: relative;
  top: 5vh;
  padding: 10px;
  width: 100%;
`;

export const App: React.FunctionComponent<{}> = () => {
  return (
    <Root>
      <HashRouter>
        <AppContainer>
          <Nav />
          <RouteContainer>
            <React.Suspense
              fallback={
                <LoadingIndicator message="Just getting stuff going behind the scenes." />
              }
            >
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/graph" component={Graph} />
                <Route exact path="/blog/:page" component={Blog} />
                <Route component={NotFound} />
              </Switch>
            </React.Suspense>
          </RouteContainer>
          <React.Suspense fallback={<p>Loading...</p>}>
            <Footer />
          </React.Suspense>
        </AppContainer>
      </HashRouter>
    </Root>
  );
};

//export default hot(module)(App);
