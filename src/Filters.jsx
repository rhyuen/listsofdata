import React, { Component } from "react";
import Card from "./Card.jsx";
import styled from "styled-components";

const FilterContainer = styled.section`
  display: flex;
`;
const FilterLabel = styled.label`
  font-size: 16px;
`;

const ExportedFilters = props => {
  const { year, years, month, months, onChange } = props;
  return (
    <Card>
      <h1>Filters</h1>
      <FilterContainer>
        <div>
          <FilterLabel>Year</FilterLabel>
          <br />
          <select name="year" value={year} onChange={onChange}>
            <option value="None">None</option>
            {years.map(yr => (
              <option value={parseInt(yr)}>{yr}</option>
            ))}
          </select>
        </div>
        <div>
          <FilterLabel>Month</FilterLabel>
          <br />
          <select name="month" value={month} onChange={onChange}>
            <option value="None">None</option>
            {months.map(m => (
              <option value={parseInt(m)}>{m}</option>
            ))}
          </select>
        </div>
      </FilterContainer>
    </Card>
  );
};

export default ExportedFilters;
