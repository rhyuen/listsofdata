import * as React from "react";
import { Card } from "./Card";
import { Row } from "./Row";
import { Cell } from "./Cell";
import styled from "styled-components";

const Column: React.FunctionComponent = styled.div`
  display: flex;
  flex-direction: column;
`;
interface Props {
  data: Array<object>;
}

export const Summary: React.FunctionComponent<Props> = ({ data }) => {
  const numOfArrayElements = data.length;
  const pushupSumInAllArrayElements = data
    .map((item: any) => item.pushups.reduce((a: number, b: number) => a + b))
    .reduce((c: number, d: number) => c + d);
  const averageCount = Math.floor(
    pushupSumInAllArrayElements / numOfArrayElements
  );
  const listOfCounts = data.map((item: any) =>
    item.pushups.reduce((a: number, b: number) => a + b)
  );
  const listOfSetCounts = data.map((item: any) => item.pushups.length);

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
          <Cell>{numOfArrayElements}</Cell>
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
          <Cell>{pushupSumInAllArrayElements}</Cell>
        </Column>
      </Row>
    </Card>
  );
};
