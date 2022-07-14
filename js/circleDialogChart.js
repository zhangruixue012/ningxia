function circleDialogChartDrawer(index, chartId, dynamicOption, xAxisData, yAxisData) {

    var chartDom = document.getElementById(chartId);
    var myChart = echarts.init(chartDom);

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    color: '#fff'
                },
                data: xAxisData
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: '#fff'
                },
            },

        ],
        series: [
            {
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: dynamicOption[index].colorStart
                        },
                        {
                            offset: 1,
                            color: dynamicOption[index].colorEnd
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: yAxisData
            }
        ]
    };
    myChart.setOption(option);
}
