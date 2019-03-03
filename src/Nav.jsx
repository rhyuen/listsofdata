import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RootNav = styled.nav``;
const Home = () => {
  return (
    <RootNav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </RootNav>
  );
};

export default Home;
