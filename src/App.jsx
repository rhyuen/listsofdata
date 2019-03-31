import React, { Component } from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Explore from "./Explore.jsx";
import Nav from "./Nav.jsx";

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
class App extends Component {
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

export default hot(module)(App);
