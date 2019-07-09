import * as React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  color: black;
  margin-right: 10px;

  &:focus {
    outline: none;
    border-bottom-color: black;
  }
`;

interface Props {
  type: string;
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const StyledInput: React.FunctionComponent<Props> = props => {
  return <Input {...props} />;
};
