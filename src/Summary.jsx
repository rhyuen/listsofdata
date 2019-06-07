import React, { Component } from "react";
import Card from "./Card.jsx";
import Row from "./Row.jsx";
import Cell from "./Cell.jsx";
import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Summary = ({ data }) => {
  const frequency = data.length;
  const totalCount = data
    .map(item => item.pushups.reduce((a, b) => a + b))
    .reduce((c, d) => c + d);
  const averageCount = Math.floor(totalCount / frequency);
  const listOfCounts = data.map(item => item.pushups.reduce((a, b) => a + b));
  const listOfSetCounts = data.map(item => item.pushups.length);

  return (
    <Card>
      <h1>Data Summary</h1>
      <Row type="header" columns="7">
        <Column>
          <Cell>Sessions</Cell>
        </Column>
        <Column>
          <Cell>Avg/Session</Cell>
        </Column>
        <Column>
          <Cell>Min Ct.</Cell>
        </Column>
        <Column>
          <Cell>Max Ct.</Cell>
        </Column>
        <Column>
          <Cell>Min Set Ct.</Cell>
        </Column>
        <Column>
          <Cell>Max Set Ct.</Cell>
        </Column>
        <Column>
          <Cell>Total</Cell>
        </Column>
      </Row>
      <Row type="header" columns="7">
        <Column>
          <Cell>{frequency}</Cell>
        </Column>
        <Column>
          <Cell>{averageCount}</Cell>
        </Column>
        <Column>
          <Cell>{Math.min(...listOfCounts)}</Cell>
        </Column>
        <Column>
          <Cell>{Math.max(...listOfCounts)}</Cell>
        </Column>
        <Column>
          <Cell>{Math.min(...listOfSetCounts)}</Cell>
        </Column>
        <Column>
          <Cell>{Math.max(...listOfSetCounts)}</Cell>
        </Column>
        <Column>
          <Cell>{totalCount}</Cell>
        </Column>
      </Row>
    </Card>
  );
};

export default Summary;
