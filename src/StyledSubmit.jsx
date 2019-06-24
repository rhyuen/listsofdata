import React, { Component } from "react";
import styled from "styled-components";

const Submit = styled.input`
  background: white;
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.4);
  font-size: 16px;
  font-weight: bold;
`;

const ExportedSubmit = () => {
  return <Submit type="Submit" />;
};

export default ExportedSubmit;
