import React, { Component } from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  margin-right: 10px;

  &:focus {
    outline: none;
    border-bottom-color: black;
  }
`;

const ExportedInput = ({ props }) => {
  return <Input {...props} />;
};

export default ExportedInput;
