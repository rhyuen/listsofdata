import React, { Component } from "react";
import styled from "styled-components";

const Cardless = styled.div`
  margin: 20px 0;
  padding: 20px 20px;
`;
const ExportedCardless = props => {
  return <Cardless>{props.children}</Cardless>;
};

export default ExportedCardless;
