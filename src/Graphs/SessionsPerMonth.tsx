import * as React from "react";
import { Data } from "./types/SharedTypes";
import Chart from "chart.js";

interface Props {
  data: Array<Data>;
}

export const SessionsPerMonth: React.FunctionComponent<Props> = (
  props: Props
) => {
  const ref = React.useRef<HTMLCanvasElement>(null);

  const getData = (): Object => {
    const { data } = props;
    let setsPerMonth = {};
    for (let i = 0; i < data.length; i++) {
      const { year, month } = data[i];
      const key = `${year.toString().slice(2)}/${month.toString()}`;
      if (key in setsPerMonth) {
        setsPerMonth[key]++;
      } else {
        setsPerMonth[key] = 0;
      }
    }
    return setsPerMonth;
  };

  React.useEffect(() => {
    const dataSet = getData();
    console.log(dataSet);
    const xValues: Array<String> = Object.keys(dataSet);
    const yValues: Array<Number> = Object.values(dataSet);

    const ctx: any = ref.current!.getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [
          {
            label: "Number of Sessions",
            data: yValues
          }
        ]
      },
      options: {
        title: {
          display: true,
          text:
            "Total Number of Pushups Performed per Month (2017/12/21 to Present)."
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              scaleLabel: {
                display: true,
                labelString: "Number of Sessions"
              }
            }
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Months (YY/MM)"
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
