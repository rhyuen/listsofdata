import * as React from "react";
import styled from "styled-components";
import { FullBanner } from "./FullBanner";
import { Card } from "./Card";
import data from "./data/personaldata.json";

const PostBanner: React.FunctionComponent<{}> = styled.section`
  position: relative;
  top: 55vh;
`;

const WIDTH = "1024px";
const GAP = "10px";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 25%));
  grid-auto-rows: calc((${WIDTH} - (3 * ${GAP})) / 4);

  grid-gap: ${GAP};
  margin-bottom: 200px;

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
  }
`;

const TileCard = styled(Card)`
  box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.1);
  grid-column: span 1;
`;

const Slant = styled.div`
  position: fixed;
  left: 0;
  top: 400px;
  z-index: 0;
  height: 500px;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.1);
  transform: skewY(-4deg);
`;

const Figure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5vh;
  margin: 0;
  font-family: sans-serif;
  font-weight: bold;
`;

const TileHeader = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 2vh;
  margin-top: 0;
`;
const FigCaption = styled.figcaption`
  text-align: center;
  text-transform: uppercase;
  font-size: 2vh;
  font-weight: bold;
`;

interface Props {}

export const About: React.FunctionComponent<Props> = () => {
  const tileData = [
    { time: "Last 14 Days", number: "14", unit: "sessions" },
    { time: "Last 30 Days", number: "30", unit: "sessions" },
    { time: "This Year", number: "365", unit: "sessions" },
    { time: "Lifetime", number: "999", unit: "sessions" }
  ];

  return (
    <div>
      <FullBanner>JustCounting</FullBanner>
      <Slant />
      <PostBanner>
        <Card>
          <h1>About</h1>
          <p>
            Just counting some numbers over time so that it reduces the barrier
            to entry for data visualization. The numbers are counted because
            things that are not counted will not be improved.
          </p>
        </Card>
        <Grid>
          {tileData.map((item: any) => (
            <TileCard>
              <TileHeader>{item.time}</TileHeader>
              <Figure>{item.number}</Figure>
              <FigCaption>{item.unit}</FigCaption>
            </TileCard>
          ))}
        </Grid>
      </PostBanner>
    </div>
  );
};
