import styled from "styled-components";

export const Slant = styled.section`
  position: fixed;
  left: 0;
  top: -20px;
  z-index: -1;
  height: 500px;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background-color: rgba(0, 0, 0, 0.1);
  transform: skewY(-4deg);
`;
export const SlantContent = styled.section`
  position: absolute;
  top: 0;
  font-size: 30px;
  grid-column: 3 / span 8;
  grid-row: 2 / span 1;
  color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  transform: skewY(4deg);
`;

export const SlantOffset = styled.section`
  margin-top: 400px;
`;
