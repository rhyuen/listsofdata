import * as React from "react";
import fileData from "../data/personaldata.json";
import { DaysGraph } from "./DaysGraph";
import { SumGraph } from "./SumGraph";
import { SessionsPerMonth } from "./SessionsPerMonth";
import { SumPerMonth } from "./SumPerMonth";
import { Data } from "./types/SharedTypes";
import { Card } from "../Card";
import { Slant, SlantOffset, SlantContent } from "../shared/Slant";

export const IndexGraph: React.FunctionComponent<{}> = () => {
  const [graphData, setGraphData] = React.useState<Array<Data>>([]);
  React.useEffect(() => {
    setGraphData(fileData.me);
  }, [fileData]);

  return (
    <>
      <Slant>
        <SlantContent>
          <strong>Graphs</strong>: Just some graphs made from the data in
          'explore'
        </SlantContent>
      </Slant>
      <SlantOffset>
        <Card>
          <DaysGraph data={graphData} />
        </Card>
        <Card>
          <SumGraph data={graphData} />
        </Card>
        <Card>
          <SessionsPerMonth data={graphData} />
        </Card>
        <Card>
          <SumPerMonth data={graphData} />
        </Card>
      </SlantOffset>
    </>
  );
};
