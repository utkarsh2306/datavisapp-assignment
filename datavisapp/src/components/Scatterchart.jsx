import React from 'react'
import ReactEcharts from 'echarts-for-react'
import data1 from '../data/class1'
import data2 from '../data/class2';
import data3 from '../data/class3'
function Scatterchart() {
    //merge all class data into one array
    let data = [...data1, ...data2, ...data3]
    let symbolSize = 20;
    const option = {
        xAxis: {
            type: 'category',
            data: data.map((e) => (e[10])),
            //name for horizontal axis
            name: 'Colour Intensity'
        },
        yAxis: {
            type: 'value',
            //name for vertical axis
            name: "Hue"
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 40
            },
            {
                start: 0,
                end: 10
            }
        ],

        series: [
            {
                data: data.map((e) => (e[11])),
                type: 'scatter',
                symbolSize: symbolSize,

            }
        ]
    }
    return (
        <div><ReactEcharts option={option} /></div>
    )
}

export default Scatterchart