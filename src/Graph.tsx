import * as React from "react";
import Chart from "chart.js";
import fileData from "./data/personaldata.json";


interface Props { }

interface State {
    data: Array<Data>;
    x: Array<string>
    y: Array<number>
}

interface Data {
    day: number,
    month: number,
    year: number,
    pushups: Array<number>
}

export class Graph extends React.Component<Props, State>{
    chartRef: any = React.createRef();

    state = {
        data: fileData.me,
        x: [],
        y: []
    }

    setX = (): Array<string> => {
        const { data } = this.state;
        const dates = data.map(item => {
            const { year, month, day } = item;
            return `${year.toString().slice(2)}/${month.toString()}/${day.toString()}`;

        })
        return dates;
    }
    setY = (): Array<Number> => {
        const { data } = this.state;
        const setOfPushups = data.map(item => item.pushups);
        const setOfTotalPushups = setOfPushups.map(item => item.reduce((a, b) => (a + b), 0));
        return setOfTotalPushups;
    }

    componentDidMount() {

        const xValues = this.setX();
        const yValues = this.setY();

        const myChartRef: any = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    label: "Pushup Sum",
                    data: yValues
                }]
            },
            options: {

            }
        });
    }

    render() {
        return (
            <div>
                <h1>Totals over Dates</h1>
                <canvas ref={this.chartRef} />
            </div>
        );
    }
}