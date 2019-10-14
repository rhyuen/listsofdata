import * as React from "react";
import fileData from "../data/personaldata.json";
import { DaysGraph } from "./DaysGraph";
import { SumGraph } from "./SumGraph";
import { SessionsPerMonth } from "./SessionsPerMonth";
import { SumPerMonth } from "./SumPerMonth";
import { Data } from "./types/SharedTypes";

export const IndexGraph: React.FunctionComponent<{}> = () => {
  const [graphData, setGraphData] = React.useState<Array<Data>>([]);
  React.useEffect(() => {
    setGraphData(fileData.me);
  }, [fileData]);

  return (
    <>
      <DaysGraph data={graphData} />
      <SumGraph data={graphData} />
      <SessionsPerMonth data={graphData} />
      <SumPerMonth data={graphData} />
    </>
  );
};
