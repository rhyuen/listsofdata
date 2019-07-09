import * as React from "react";
import { Card } from "./Card";
import styled from "styled-components";

const FilterContainer = styled.section`
  display: flex;
`;
const FilterLabel = styled.label`
  font-size: 16px;
`;

interface Props {
  year: string;
  years: Array<number>;
  month: string;
  months: Array<number>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const Filters: React.FunctionComponent<Props> = ({
  year,
  years,
  month,
  months,
  onChange
}) => {
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
              <option value={yr}>{yr}</option>
            ))}
          </select>
        </div>
        <div>
          <FilterLabel>Month</FilterLabel>
          <br />
          <select name="month" value={month} onChange={onChange}>
            <option value="None">None</option>
            {months.map(m => (
              <option value={m}>{m}</option>
            ))}
          </select>
        </div>
      </FilterContainer>
    </Card>
  );
};
