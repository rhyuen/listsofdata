import * as React from "react";
import styled from "styled-components";

const StyledBanner = styled.section`
  width: 100%;
  height: 60vh;
  background: black;
  font-weight: bolder;
  letter-spacing: 2px;
  font-size: 25px;
  position: fixed;
  left: 0;
  top: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;  
`;

interface Props {
    children: any
}

export const FullBanner: React.FunctionComponent<Props> = ({ children }) => {
    return <StyledBanner>{children}</StyledBanner>;
}