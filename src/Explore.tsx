import * as React from "react";
import styled from "styled-components";
import { Summary } from "./Summary";
import fileData from "./data/personaldata.json";
import uuid from "uuid/v4";
import { Card } from "./Card";
import { SideColumn } from "./SideColumn";
import { Filters } from "./Filters";
import { Row } from "./Row";
import { Cell } from "./Cell";

const ExploreRoot = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const MainColumn = styled.main`
  @media (max-width: 768px) {
    grid-column: 1 / span 12;
  }

  @media (max-width: 1023px) {
    grid-column: 1 / span 12;
  }

  @media (min-width: 1024px) {
    grid-column: 1 / span 8;
  }
`;
interface Item {
  day: number;
  month: number;
  year: number;
  pushups: Array<number>;
}

interface State {
  data: Array<Item>;
  subset: Array<Item>;
  year: string;
  month: string;
}
export class Explore extends React.Component<{}, State> {
  state = {
    data: fileData.me,
    subset: fileData.me,
    year: "None",
    month: "None"
  };

  handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
    const inputField: string = name;

    if (value === "None") {
      this.setState(ps => {
        return {
          ...ps,
          year: "None",
          month: "None",
          subset: ps.data
        };
      });
    } else {
      this.setState(ps => {
        return {
          ...ps,
          [name]: value,
          subset: ps.data.filter(
            (item: Item) => item[inputField] === parseInt(value)
          )
        };
      });
    }
  };

  render() {
    const { subset, data, year, month } = this.state;
    const months = [...new Set(data.map(item => Number(item.month)))];
    const years = [...new Set(data.map(item => Number(item.year)))];
    let max = 0;
    for (let i: number = 0; i < subset.length; i++) {
      if (subset[i].pushups.length > max) {
        max = subset[i].pushups.length;
      }
    }

    return (
      <ExploreRoot>
        <MainColumn>
          <Filters
            years={years}
            year={year}
            month={month}
            months={months}
            onChange={this.handleChange}
          />
          <Summary data={subset} />
          <Card>
            <Row type="header">
              <Cell size={2}>Date</Cell>
              {Array(max)
                .fill("", 0, max)
                .map((_, index) => (
                  <Cell key={uuid()}>Set {index + 1}</Cell>
                ))}
              <Cell>Total</Cell>
            </Row>
            {subset
              .map((item: Item, index: number) => {
                if (
                  index > 0 &&
                  (subset[index - 1].month !== item.month ||
                    subset[index - 1].year !== item.year)
                ) {
                  console.log("New Month goes here %s", subset[index].month);
                }

                return (
                  <Row key={uuid()} type="content">
                    <RowOfCells replicas={item} maxReplicas={max} />
                  </Row>
                );
              })
              .reverse()}
          </Card>
        </MainColumn>
        <SideColumn />
      </ExploreRoot>
    );
  }
}

interface DateCellProps {
  month: number;
  day: number;
  year: number;
}
const DateCell: React.FunctionComponent<DateCellProps> = ({
  month,
  day,
  year
}) => {
  return (
    <Cell size={2}>
      {month}/{day}/{year.toString().slice(2)}
    </Cell>
  );
};

interface RowOfCellsProps {
  replicas: Item;
  maxReplicas: number;
}
const RowOfCells: React.FunctionComponent<RowOfCellsProps> = ({
  replicas,
  maxReplicas
}) => {
  let diffBetweenCurrAndMax = maxReplicas - replicas.pushups.length;
  let paddedArray = new Array(diffBetweenCurrAndMax).fill("-");

  const arr = replicas.pushups.map(rep => rep.toString()).concat(paddedArray);

  const Gtr = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
  `;

  return (
    <Gtr>
      <DateCell
        month={replicas.month}
        day={replicas.day}
        year={replicas.year}
      />
      {arr.map(subitem => (
        <Cell key={uuid()}>{subitem}</Cell>
      ))}
      <Cell key={uuid()}>{replicas.pushups.reduce((a, b) => a + b)}</Cell>
    </Gtr>
  );
};
