import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RootNav = styled.nav`
  background: white;
  position: fixed;
  left: 0;
  display: flex;
  width: 100vw;
  height: 5vh;
  justify-content: center;
  align-items: center;
  z-index: 5;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const NavContainer = styled.div`
  display: flex;
  width: 1024px;
  padding: 0 10px;
  height: 100%;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-right: 20px;
  height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  border-bottom: 3px solid transparent;
  &:visited{
    color: black;
  }
  &:hover {
    border-bottom: 3px solid black;  
`;
const Home = () => {
  return (
    <RootNav>
      <NavContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/explore">Explore</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </NavContainer>
    </RootNav>
  );
};

export default Home;
