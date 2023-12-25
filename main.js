import {option, option1} from "./config.js"

const chartIds = ['main', 'info'] // 与对应的 DOM 元素 ID 一一对应

const chartOptions = [
    option,
    option1
]
const myCharts = []
chartIds .forEach((id, index) => {
    const chart = echarts.init(document.getElementById(id))
    chart.setOption(chartOptions[index])
    myCharts.push(chart)
})