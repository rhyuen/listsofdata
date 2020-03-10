import * as React from "react";
import styled from "styled-components";
import { Card } from "./Card"
import { StyledHeader } from "./StyledHeader";

interface Props {
    onClick: () => void;
}

const SmallerText = styled.p`
    font-size: 14px;
`;

const DismissButton = styled.button`
    cursor: pointer;
    border: 2px solid black;
    font-size: 18px; 
    font-weight: bold;
    padding: 5px 10px;
    text-align: center;
    text-transform: uppercase;
    background-color: black;
    color: white;
    transition: background-color color 0.1s ease-in 0.0s;

    &:hover{
        background: white;
        color: black;
    }
    &:focus{
        outline: none;
    }
`;

export const Disclaimer: React.FunctionComponent<Props> = ({ onClick }
) => {
    return (
        <Card>
            <StyledHeader>A brief description</StyledHeader>
            <SmallerText>Below denotes the number of pushups performed on the specified date.  Each column to the left of each date denotes the number of consecutive pushups before rest.  At the right-end of each row is a sum of the values in each column.</SmallerText>
            <SmallerText>You can use the 'Data Filters' below to project subsets of the data set and the 'Data Summary' below will dynamically compute the below specified fields based on the filters.</SmallerText>
            <DismissButton onClick={onClick} >Dismiss</DismissButton>
        </Card>
    );
};
