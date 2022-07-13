
function environmentalDraw (yData1, yData2) {
    var chartDom1 = document.getElementById('dashboard_1');
    var myChart1 = echarts.init(chartDom1);

    var chartDom2 = document.getElementById('dashboard_2');
    var myChart2 = echarts.init(chartDom2);

    var chartDom3 = document.getElementById('dashboard_3');
    var myChart3 = echarts.init(chartDom3);

    var option = {
        series: [
            {
                type: 'gauge',
                startAngle: 180,
                endAngle: 0,
                // progress: {
                //     show: true,
                //     width: 6
                // },
                grid: {
                    width: 200,
                    height: 120
                },
                axisLine: {
                    lineStyle: {
                        width: 20,
                        color: [
                            [0.25, '#FF6E76'],
                            [0.5, '#FDDD60'],
                            [0.75, '#58D9F9'],
                            [1, '#7CFFB2']
                        ]
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false,
                    length: 20,
                    lineStyle: {
                        color: 'auto',
                        width: 20
                    }
                },
                axisLabel: {
                    color: '#fff',
                    fontSize: 8,
                    distance: -40,
                    formatter: function (value) {
                        if (value === 30) {
                            return 'A';
                        } else if (value === 40) {
                            return 'B';
                        } else if (value === 50) {
                            return 'C';
                        } else if (value === 70) {
                            return 'D';
                        }
                        return '';
                    }
                },
                anchor: {
                    show: true,
                    showAbove: true,
                    size: 4,
                    itemStyle: {
                        borderWidth: 10,
                    }
                },
                detail: {
                    valueAnimation: true,
                    fontSize: 16,
                    color: '#FFBF24',
                },
                data: [
                    {
                        value: 70
                    }
                ]
            }
        ]
    };
    myChart1.setOption(option);
    myChart2.setOption(option);
    myChart3.setOption(option);
}
