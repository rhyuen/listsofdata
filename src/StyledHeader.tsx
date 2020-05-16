import * as React from "react";
import styled from "styled-components";

export const StyledHeader = styled.h1`
  color: black;
  font-size: 20px;
  text-transform: uppercase;
  display: flex;

  &:after {
    margin-left: 20px;
    flex-grow: 1;
    align-self: center;
    height: 20px;
    background: rgba(0, 0, 0, 0.1);
    content: "";
  }
`;
