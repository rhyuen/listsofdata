import React, { Component } from "react";
import styled from "styled-components";

const Submit = styled.input`
  background: white;
  border: 2px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.4);
  font-size: 16px;
  font-weight: bold;

  &:focus {
    outline: none;
  }

  &:hover {
    border-color: black;
    color: black;
  }
`;

const ExportedSubmit = props => {
  if (props.disabled === true) {
    const DisabledSubmit = styled(Submit)`
      background: grey;
    `;
    return <DisabledSubmit {...props} />;
  } else {
    return <Submit {...props} />;
  }
};

export default ExportedSubmit;
