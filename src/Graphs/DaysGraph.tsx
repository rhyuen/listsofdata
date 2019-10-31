import * as React from "react";
import { Data } from "./types/SharedTypes";
import Chart from "chart.js";

interface Props {
  data: Array<Data>;
}

export const DaysGraph: React.FunctionComponent<Props> = (props: Props) => {
  const ref = React.useRef<HTMLCanvasElement>(null);

  let { data } = props;
  let startIndex;
  for (let i = 0; i < data.length; i++) {
    const { year, month, day } = data[i];

    if (year === 2018 && month === 11 && day === 19) {
      startIndex = i;
    }
  }
  const truncatedData = data.slice(startIndex + 1);

  const setX = (): Array<string> => {
    const dates = truncatedData.map(item => {
      const { year, month, day } = item;
      return `${year
        .toString()
        .slice(2)}/${month.toString()}/${day.toString()}`;
    });
    return dates;
  };

  const setY = (): Array<Number> => {
    let days = [0];
    for (let i = 1; i < truncatedData.length; i++) {
      const previous = i - 1;
      const prevDate = +new Date(
        `${truncatedData[previous].year}/${truncatedData[previous].month}/${
          truncatedData[previous].day
        }`
      );
      const currDate = +new Date(
        `${truncatedData[i].year}/${truncatedData[i].month}/${
          truncatedData[i].day
        }`
      );
      const diffInDays: number = Math.ceil(
        Math.abs(currDate - prevDate) / (3600 * 24 * 1000)
      );
      days.push(diffInDays);
    }
    return days;
  };

  React.useEffect(() => {
    const yValues = setY();
    const xValues = setX();

    const average =
      yValues.reduce((curr: any, acc: any) => curr + acc, 0) / xValues.length;

    const averageArray = Array(xValues.length).fill(
      Math.ceil(average),
      0,
      xValues.length
    );

    const ctx = ref!.current!.getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [
          {
            label: "Number of Days between Activities",
            data: yValues,
            order: 1
          },
          {
            label: "Average Days of Rest",
            data: averageArray,
            type: "scatter",
            fill: false,
            order: 2
          }
        ]
      },
      options: {
        title: {
          display: true,
          text:
            "The Number of Days of Rest between Activities (2018/11/19 to Present)."
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Days"
              }
            }
          ],
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Dates (YY/MM/DD)"
              }
            }
          ]
        }
      }
    });
  }, [data]);
  return (
    <div>
      <canvas ref={ref} />
    </div>
  );
};
