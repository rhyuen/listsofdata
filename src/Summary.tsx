import * as React from "react";
import { Card } from "./Card";
import { Row } from "./Row";
import { Cell } from "./Cell";
import styled from "styled-components";
import { v4 } from "uuid";
import { StyledHeader } from "./StyledHeader";

const Column: React.FunctionComponent = styled.div`
  display: flex;
  flex-direction: column;
`;
interface Props {
  data: Array<object>;
}

let summaryColumns = {
  Sessions: 0,
  "Average Count Per Session": 0,
  "Min Count": 0,
  "Max Count": 0,
  "Min Set Count": 0,
  "Max Set Count": 0,
  Total: 0
};

export const Summary: React.FunctionComponent<Props> = ({ data }) => {
  summaryColumns["Sessions"] = data.length;
  summaryColumns["Total"] = data
    .map((item: any) => item.pushups.reduce((a: number, b: number) => a + b))
    .reduce((c: number, d: number) => c + d);
  summaryColumns["Average Count Per Session"] = Math.floor(
    summaryColumns["Total"] / summaryColumns["Sessions"]
  );
  const listOfCounts = data.map((item: any) =>
    item.pushups.reduce((a: number, b: number) => a + b)
  );
  const listOfSetCounts = data.map((item: any) => item.pushups.length);

  summaryColumns["Min Count"] = Math.min(...listOfCounts);
  summaryColumns["Max Count"] = Math.max(...listOfCounts);
  summaryColumns["Min Set Count"] = Math.min(...listOfSetCounts);
  summaryColumns["Max Set Count"] = Math.max(...listOfSetCounts);

  const numOfCols = Object.keys(summaryColumns).length.toString();
  return (
    <Card>
      <StyledHeader>Data Summary</StyledHeader>
      <Row type="header" columns={numOfCols}>
        {Object.keys(summaryColumns).map(col => {
          return (
            <Column key={v4()}>
              <Cell>{col}</Cell>
            </Column>
          );
        })}
      </Row>
      <Row type="header" columns={numOfCols}>
        {Object.values(summaryColumns).map(col => {
          return (
            <Column key={v4()}>
              <Cell>{col}</Cell>
            </Column>
          );
        })}
      </Row>
    </Card>
  );
};
