import {_data} from "./api_data.js";

const result = _data.reduce((acc, cur) => {
    Object.keys(acc).forEach(key => {
        acc[key].push(cur[key])
    })
    return acc;
}, {name: [], num: []})

export const option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: result.name
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',
            data: result.num
        }
    ]
}
export const option1 = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: result.name
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',
            data: result.num
        }
    ]
}