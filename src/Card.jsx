import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 0;
  padding: 20px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;
const Card = props => {
  return <Container>{props.children}</Container>;
};

export default Card;
