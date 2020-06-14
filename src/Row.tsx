import * as React from "react";
import styled from "styled-components";

const ReturnedRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    font-weight: bold;
  }
`;

interface Props {
  type: string;
  columns?: string;
}

const getHeaderRow = (col: number): React.FunctionComponent<{}> => {
  const HeaderRow = styled(ReturnedRow)`
      grid-template-columns: repeat(${col}, minmax(20px, 1fr));
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      &:hover {
        background: transparent;
        font-weight: 400;
      }
    `;
  return HeaderRow
}

export const Row: React.FunctionComponent<Props> = ({
  type,
  columns,
  children
}) => {
  if (type === "header") {
    // const HeaderRow = styled(ReturnedRow)`
    //   grid-template-columns: repeat(${columns}, minmax(20px, 1fr));
    //   border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    //   &:hover {
    //     background: transparent;
    //     font-weight: 400;
    //   }
    // `;

    const HRow = getHeaderRow(Number(columns));
    return <HRow>{children}</HRow>;
  } else {
    return <ReturnedRow>{children}</ReturnedRow>;
  }
};
