import React from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import { LoadingIndicator } from "./LoadingIndicator";
import { HashRouter, Route, Switch } from "react-router-dom";


const Home = React.lazy(() =>
  import("./Home").then(({ Home }) => ({ default: Home }))
);
const About = React.lazy(() =>
  import("./About").then(({ About }) => ({ default: About }))
);
const Explore = React.lazy(() =>
  import("./Explore").then(({ Explore }) => ({ default: Explore }))
);
const Graph = React.lazy(() => import("./Graph").then(({ Graph }) => ({ default: Graph })));

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

interface Props { }
interface State { }
export class App extends React.Component<Props, State> {
  render() {
    return (
      <Root>
        <HashRouter>
          <AppContainer>
            <Nav />
            <RouteContainer>
              <React.Suspense fallback={<LoadingIndicator message="Just getting stuff going behind the scenes." />}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/explore" component={Explore} />
                  <Route exact path="/graph" component={Graph} />
                  <Route component={NotFound} />
                </Switch>
              </React.Suspense>
            </RouteContainer>
          </AppContainer>
        </HashRouter>
      </Root>
    );
  }
}

//export default hot(module)(App);
