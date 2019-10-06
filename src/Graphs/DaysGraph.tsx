import * as React from "react";
import {Data} from "./types/SharedTypes";
import Chart from "chart.js";

interface Props{
    data : Array<Data>;
}
  
export const DaysGraph: React.FunctionComponent<Props> = (props : Props) => {    
    const ref = React.useRef(null);    
            
    let {data} = props;
    console.log(data);
    let startIndex;
    for(let i = 0; i < data.length; i++){
        const {year, month, day} = data[i];                    
        
        if(year === 2018 && month === 11 && day === 19){
            startIndex = i;
        }
    }    
    const truncatedData = data.slice(startIndex + 1);
                
    const setX = (): Array<string> => {               
        const dates = truncatedData.map(item => {
            const { year, month, day } = item;
            return `${year.toString().slice(2)}/${month.toString()}/${day.toString()}`;

        })
        return dates;
    }

    const setY = (): Array<Number> => {             
        let days = [0];
        for (let i = 1 ; i < truncatedData.length; i++){
            const previous = i - 1;
            const prevDate = +new Date(`${truncatedData[previous].year}/${truncatedData[previous].month}/${truncatedData[previous].day}`);
            const currDate = +new Date(`${truncatedData[i].year}/${truncatedData[i].month}/${truncatedData[i].day}`);
            const diffInDays:number = Math.ceil(Math.abs(currDate - prevDate)/(3600 * 24 *1000));
            days.push(diffInDays);            
        }
        return days;
    }

    React.useEffect(() => {

        const yValues = setY();
        const xValues = setX();        
               

        const ctx = ref.current.getContext("2d");
        
        new Chart(ctx, {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    label: "Number of Days between Activities",
                    data: yValues
                }]
            },
            options: {

            }
        });

    }, [data]);
    return (
        <div>
            <h1>The Number of Days of Rest between Activities (2018/11/19 to Present).</h1>
            <canvas ref = {ref}></canvas>
        </div>
    );
}