import React, { Component } from "react";
import styled from "styled-components";
import Summary from "./Summary.jsx";
import fileData from "./data/personaldata.json";
import uuid from "uuid/v4";
import Card from "./Card.jsx";
import Row from "./Row.jsx";
import Cell from "./Cell.jsx";

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
    return (
      <div>
        <Card>
          <h1>Filters</h1>
          <select
            name="year"
            value={this.state.year}
            onChange={this.handleChange}
          >
            <option value="None">None</option>
            {years.map(yr => (
              <option value={parseInt(yr)}>{yr}</option>
            ))}
          </select>
          <select
            name="month"
            value={this.state.month}
            onChange={this.handleChange}
          >
            <option value="None">None</option>
            {months.map(m => (
              <option value={parseInt(m)}>{m}</option>
            ))}
          </select>
        </Card>
        <Summary data={this.state.subset} />
        <Card>
          {subset
            .map(item => {
              return (
                <Row key={uuid()}>
                  <Cell>
                    <span>{item.month}</span>/<span>{item.day}</span>/
                    <span>{item.year.toString().slice(2)}</span>
                  </Cell>
                  {item.pushups.map(subitem => (
                    <Cell>{subitem}</Cell>
                  ))}
                  <Cell>{item.pushups.reduce((a, b) => a + b)}</Cell>
                  <br />
                </Row>
              );
            })
            .reverse()}
        </Card>
      </div>
    );
  }
}

export default Explore;
