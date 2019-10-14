import * as React from "react";
import { Data } from "./types/SharedTypes";
import Chart from "chart.js";

interface Props {
  data: Array<Data>;
}

export const SumGraph: React.FunctionComponent<Props> = (props: Props) => {
  const ref = React.useRef<HTMLCanvasElement>(null);

  const setX = (): Array<string> => {
    const { data } = props;
    const dates = data.map(item => {
      const { year, month, day } = item;
      return `${year
        .toString()
        .slice(2)}/${month.toString()}/${day.toString()}`;
    });
    return dates;
  };
  const setY = (): Array<Number> => {
    const { data } = props;
    const setOfPushups = data.map(item => item.pushups);
    const setOfTotalPushups = setOfPushups.map(item =>
      item.reduce((a, b) => a + b, 0)
    );
    return setOfTotalPushups;
  };

  React.useEffect(() => {
    const xValues = setX();
    const yValues = setY();

    const ctx: any = ref.current!.getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [
          {
            label: "Number of Pushups.",
            data: yValues
          }
        ]
      },
      options: {
        title: {
          display: true,
          text:
            "Total Number of Pushups Performed per Day (2017/12/21 to Present)."
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Pushups Performed"
              }
            }
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Days (YY/MM/DD)"
              }
            }
          ]
        }
      }
    });
  }, [props]);

  return (
    <>
      <canvas ref={ref} />
    </>
  );
};
