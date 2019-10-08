import * as React from "react";
import {Data} from "./types/SharedTypes";
import Chart from "chart.js";

interface Props{
    data : Array<Data>;
}

export const SumGraph : React.FunctionComponent<Props> = (props: Props) => {
    const ref = React.useRef<HTMLCanvasElement>(null);
    
    const setX = (): Array<string> => {
        const { data } = props;
        const dates = data.map(item => {
            const { year, month, day } = item;
            return `${year.toString().slice(2)}/${month.toString()}/${day.toString()}`;
        });
        return dates;
    }
    const setY = (): Array<Number> => {
        const { data } = props;
        const setOfPushups = data.map(item => item.pushups);
        const setOfTotalPushups = setOfPushups.map(item => item.reduce((a, b) => (a + b), 0));
        return setOfTotalPushups;

    }

   React.useEffect(() => {
    const xValues = setX();
    const yValues = setY();
   
    const ctx : any= ref.current!.getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                label: "Total Count of Pushups per day (2017/12/21 to Present).",
                data: yValues
            }]
        },
        options: {

        }
    });
   }, [props]);
              
    return (
        <>
            <div>
                <h1>Total sum of Pushups performed on a Day (2017/12/21 to Present).</h1>
                <canvas ref={ref} />
            </div>             
        </>
    );    
}