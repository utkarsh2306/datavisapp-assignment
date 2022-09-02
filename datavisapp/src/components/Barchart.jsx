import React from 'react'
import ReactEcharts from 'echarts-for-react'
import data1 from '../data/class1'
import data2 from '../data/class2';
import data3 from '../data/class3'
function Barchart() {
    //merge all class data into one array
    let data = [...data1, ...data2, ...data3]
    let symbolSize = 20;
    const option = {
        xAxis: {
            type: 'category',
            data: data.map((e) => (e[1])),
            //name for horizontal axis
            name: "Alcohal"

        },
        yAxis: {
            type: 'value',
            //name for vertical axis
            name: "Malic acid"

        },
        dataZoom: [
            //scroll implementation
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
                data: data.map((e) => (e[2])),
                type: 'bar',
                symbolSize: symbolSize,

            }
        ]

    };
    return (
        <div>

            <ReactEcharts option={option} />
        </div>
    )
}

export default Barchart