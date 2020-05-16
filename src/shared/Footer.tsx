import * as React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 40px 10px;
  margin: 60px 0 40px 0;
  scroll-behavior: smooth;
`;
const FooterEl = styled.span`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
`;

const ScrollFooterEl = styled(FooterEl)`
  cursor: pointer;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid black;
  }
  transition: all 0s ease-in 0.1s;
`;

const FooterAnchor = styled.a`
  padding-bottom: 20px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  color: black;
  &:hover {
    border-bottom: 2px solid black;    
  }
  &:visited{
    color: black;
  }
  transition: border-bottom 0.2s ease-in 0s;
`;

export const Footer: React.FunctionComponent<{}> = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledFooter>
      <FooterEl>By &nbsp;
        <FooterAnchor href="https://ryuen.now.sh">Robert</FooterAnchor>
      </FooterEl>
      <ScrollFooterEl onClick={handleClick}>top</ScrollFooterEl>
      <FooterEl>
        Last updated <br />
        MAY 15,2020
      </FooterEl>
    </StyledFooter>
  );
};
