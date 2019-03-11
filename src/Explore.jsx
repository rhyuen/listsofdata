import React, { Component } from "react";
import styled from "styled-components";
import Summary from "./Summary.jsx";
import fileData from "./data/personaldata.json";
import uuid from "uuid/v4";

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
        <div>
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
        </div>
        <Summary data={this.state.subset} />
        <div>
          {subset
            .map(item => {
              return (
                <div key={uuid()}>
                  <span>
                    <span>{item.month}</span>/<span>{item.day}</span>/
                    <span>{item.year.toString().slice(2)} &nbsp;</span>
                  </span>
                  <span>{item.pushups.join(" ")}</span>
                  <span>&nbsp;{item.pushups.reduce((a, b) => a + b)}</span>
                  <br />
                </div>
              );
            })
            .reverse()}
        </div>
      </div>
    );
  }
}

export default Explore;
