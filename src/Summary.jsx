import React, { Component } from "react";
import styled from "styled-components";

const Summary = ({ data }) => {
  const frequency = data.length;
  const totalCount = data
    .map(item => item.pushups.reduce((a, b) => a + b))
    .reduce((c, d) => c + d);
  const averageCount = Math.floor(totalCount / frequency);
  const listOfCounts = data.map(item => item.pushups.reduce((a, b) => a + b));
  const listOfSetCounts = data.map(item => item.pushups.length);

  return (
    <div>
      <h1>Data Summary</h1>
      <p>Sessions: {frequency}</p>
      <p>Average/Session: {averageCount}</p>
      <p>Lowest Count: {Math.min(...listOfCounts)}</p>
      <p>Highest Count: {Math.max(...listOfCounts)}</p>
      <p>Lowest Set Count: {Math.min(...listOfSetCounts)}</p>
      <p>Highest Set Count: {Math.max(...listOfSetCounts)}</p>
      <p>Total: {totalCount}</p>
    </div>
  );
};

export default Summary;
