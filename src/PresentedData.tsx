import * as React from "react";
import uuid from "uuid/v4";
import { Card } from "./Card";
import { Row } from "./Row";
import { Cell } from "./Cell";

interface Item {
  day: number;
  month: number;
  year: number;
  pushups: Array<number>;
}

interface Props {
  data: any;
}

export const PresentedData: React.FunctionComponent<Props> = ({ data }) => {
  let max = 0;
  for (let i: number = 0; i < data.length; i++) {
    if (data[i].pushups.length > max) {
      max = data[i].pushups.length;
    }
  }
  return (
    <Card>
      <Row type="header">
        <Cell size={2}>Date</Cell>
        {Array(max).map((item: number) => (
          <Cell key={uuid()}>Set {item + 1}</Cell>
        ))}
        <Cell>Total</Cell>
      </Row>
      {data
        .map((item: any) => {
          return (
            <Row key={uuid()} type="content">
              <DateCell replica={item} />
              <RowOfCells replicas={item.pushups} maxReplicas={max} />
              <Cell>{item.pushups.reduce((a, b) => a + b)}</Cell>
            </Row>
          );
        })
        .reverse()}
    </Card>
  );
};

interface DateCellProps {
  replica: {
    month: number;
    day: number;
    year: number;
  };
}
const DateCell: React.FunctionComponent<DateCellProps> = ({ replica }) => {
  return (
    <Cell size={2}>
      {replica.month}/{replica.day}/{replica.year.toString().slice(2)}
    </Cell>
  );
};

interface RowOfCellsProps {
  replicas: Array<number>;
  maxReplicas: number;
}
const RowOfCells: React.FunctionComponent<RowOfCellsProps> = ({
  maxReplicas,
  replicas
}) => {
  let diffBetweenCurrAndMax = maxReplicas - replicas.length;
  let paddedArray = new Array(diffBetweenCurrAndMax).fill("-");

  const arr = replicas.map(rep => rep.toString()).concat(paddedArray);

  return (
    <div>
      {arr.map(subitem => (
        <Cell key={uuid()}>{subitem}</Cell>
      ))}
    </div>
  );
};
