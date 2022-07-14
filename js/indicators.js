function indicatorsDraw (yData) {
    var chartDom = document.getElementById('indicators');
    var myChart = echarts.init(chartDom);
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        legend: {
            data: ['综合商品率', '柴气', '可比综合商品率', '综合加工损失率', '炼油综合能耗'],
            top: 0,
            right: 30,
            itemWidth: 20,  // 设置宽度
            itemHeight: 10, // 设置高度
            textStyle: {
                color: '#87BAF8',  // 图例文字颜色
                fontSize: 9
            },
        },
        axisPointer: {
            link: [
                {
                    xAxisIndex: 'all'
                }
            ]
        },
        grid: [
            {
                left:30,
                right: 30,
                height: '35%'
            },
            {
                left: 30,
                right: 30,
                top: '55%',
                height: '35%'
            }
        ],
        xAxis: [
            {
                position: 'top',
                type: 'category',
                boundaryGap: false,
                axisLine: { onZero: true },
                axisLabel: {
                    color: '#fff'
                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            },
            {
                gridIndex: 1,
                type: 'category',
                boundaryGap: false,
                axisLine: { onZero: true },
                axisLabel: {
                    color: '#fff'
                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                position: 'bottom'
            }
        ],
        yAxis: [
            {
                type: 'value',
                inverse: true,
                position: 'right',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    color: '#fff'
                },
            },
            {
                gridIndex: 1,
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    color: '#fff'
                },
            }
        ],
        series: [
            {
                name: '综合商品率',
                type: 'bar',
                xAxisIndex: 0,
                yAxisIndex: 0,
                itemStyle: {
                    color: '#C99E36'
                },
                data: [
                    2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                ]
            },
            {
                name: '柴气',
                type: 'bar',
                xAxisIndex: 0,
                yAxisIndex: 0,
                itemStyle: {
                    color: '#FF6E6E'
                },
                data: [
                    3.0, 4, 5, 4, 15, 4, 40, 21, 6, 20, 6, 3
                ]
            },
            {
                name: '可比综合商品率',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                itemStyle: {
                    color: '#57A4FF'
                },
                data: [
                    2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                ]
            },
            {
                name: '综合加工损失率',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                itemStyle: {
                    color: '#14DFC9'
                },
                data: [
                    6, 9, 9, 26, 7, 70, 176, 18, 48, 18, 6, 2.3
                ]
            },
            {
                name: '炼油综合能耗',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                itemStyle: {
                    color: '#0186DE'
                },
                data: [
                    6, 9, 19.0, 36.4, 8.7, 7.7, 15.6, 2.2, 4.7, 8.8, 16.0, 22.3
                ]
            }
        ]
    };
    myChart.setOption(option);
}
