import * as React from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import { HashRouter, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Explore } from "./Explore";
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

interface Props {}
interface State {}
export class App extends React.Component<Props, State> {
  render() {
    return (
      <Root>
        <HashRouter>
          <AppContainer>
            <Nav />
            <RouteContainer>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/explore" component={Explore} />
            </RouteContainer>
          </AppContainer>
        </HashRouter>
      </Root>
    );
  }
}

//export default hot(module)(App);
