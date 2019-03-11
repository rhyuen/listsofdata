import React, { Component } from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Explore from "./Explore.jsx";
import Nav from "./Nav.jsx";

class App extends Component {
  render() {
    return (
      <div className="root">
        <HashRouter>
          <div>
            <Nav />
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/explore" component={Explore} />
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default hot(module)(App);
