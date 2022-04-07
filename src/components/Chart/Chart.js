import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css';

function Chart(props) {
    // transform datapoint from object to numbers
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
//    pull out the array to return  arguments
    const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
    {props.dataPoints.map((dataPoint) =>(
        <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            // maxValue={null}
            maxValue={totalMaximum}
            label={dataPoint.label}
            />
    ))}
     </div>
  )
}

export default Chart