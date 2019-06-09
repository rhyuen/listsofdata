import React, { Component } from "react";
import styled from "styled-components";
import Summary from "./Summary.jsx";
import fileData from "./data/personaldata.json";
import uuid from "uuid/v4";
import Card from "./Card.jsx";
import SideColumn from "./SideColumn.jsx";
import Filters from "./Filters.jsx";
import Row from "./Row.jsx";
import Cell from "./Cell.jsx";

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

class Explore extends Component {
  state = {
    data: fileData.me,
    subset: fileData.me,
    year: "None",
    month: "None"
  };

  handleChange = e => {
    const { name, value } = e.target;
    const inputField = name;

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
          subset: ps.data.filter(item => item[inputField] === parseInt(value))
        };
      });
    }
  };

  render() {
    const { subset, data } = this.state;
    const months = [...new Set(data.map(item => item.month))];
    const years = [...new Set(data.map(item => item.year))];
    let max = 0;
    for (let i = 0; i < subset.length; i++) {
      if (subset[i].pushups.length > max) {
        max = subset[i].pushups.length;
      }
    }
    const headerItems = Array(max)
      .fill()
      .map((_, i) => i);
    return (
      <ExploreRoot>
        <MainColumn>
          <Filters
            years={years}
            year={this.state.year}
            month={this.state.month}
            months={months}
            onChange={this.handleChange}
          />
          <Summary data={subset} />
          <Card>
            <Row type="header">
              <Cell>Date</Cell>
              {headerItems.map(item => (
                <Cell>Set {item + 1}</Cell>
              ))}
              <Cell>Total</Cell>
            </Row>
            {subset
              .map(item => {
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
        </MainColumn>
        <SideColumn />
      </ExploreRoot>
    );
  }
}

const DateCell = ({ replica }) => {
  return (
    <Cell>
      {replica.month}/{replica.day}/{replica.year.toString().slice(2)}
    </Cell>
  );
};

const RowOfCells = ({ replicas, maxReplicas }) => {
  let paddedReplicas = replicas;

  let diffBetweenCurrAndMax = maxReplicas - replicas.length;
  if (diffBetweenCurrAndMax > 0) {
    for (let i = 0; i < diffBetweenCurrAndMax; i++) {
      paddedReplicas.push("-");
    }
  }
  return paddedReplicas.map(subitem => {
    return <Cell key={uuid()}>{subitem}</Cell>;
  });
};

export default Explore;
