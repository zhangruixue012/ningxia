
function environmentalDraw (data) {

    var option = {
        series: [
            {
                type: 'gauge',
                startAngle: 180,
                endAngle: 0,
                grid: {
                    top: 0,
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
                    data: [10, 30, 50, 70, 90, 100]
                },
                anchor: {
                    show: true,
                    showAbove: true,
                    size: 4,
                    itemStyle: {
                        borderWidth: 10,
                    },
                    // offsetCenter: [0, '-10%'],
                },
                title: {
                    offsetCenter: [0, '30%'],
                    fontSize: 12,
                    color: '#fff'
                },
                detail: {
                    valueAnimation: true,
                    fontSize: 16,
                    offsetCenter: [0, '60%'],
                    color: '#FFBF24',
                }
            }
        ]
    };


    var chartDom1 = document.getElementById('dashboard_1');
    var myChart1 = echarts.init(chartDom1);

    var chartDom2 = document.getElementById('dashboard_2');
    var myChart2 = echarts.init(chartDom2);

    var chartDom3 = document.getElementById('dashboard_3');
    var myChart3 = echarts.init(chartDom3);


    // 仪表盘1
    const option1 = {...option};
    option1.series[0].data = [data[0]];
    myChart1.setOption(option);


    // 仪表盘2
    const option2 = {...option};
    option2.series[0].data = [data[1]]
    myChart2.setOption(option2);


    // 仪表盘3
    const option3 = {...option};
    option3.series[0].data = [data[2]]
    myChart3.setOption(option3);

    myChart1.getZr().on('click', function (params) {
        const chartId = 'environment_line_0';
        createChartDiv(chartId, data[0].name);

        const xData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月'];
        const yData = [140, 232, 101, 264, 90, 340, 250];
        circleDialogChartDrawer(0, chartId, OPTION_MAPPING, xData, yData);
    });

    myChart2.getZr().on('click', function (params) {
        const chartId = 'environment_line_1';
        createChartDiv(chartId, data[1].name);


        const xData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月'];
        const yData = [140, 232, 101, 264, 90, 340, 250];
        circleDialogChartDrawer(1, chartId, OPTION_MAPPING, xData, yData);
    });

    myChart3.getZr().on('click', function (params) {
        const chartId = 'environment_line_2';
        createChartDiv(chartId, data[2].name);

        const xData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月'];
        const yData = [140, 232, 101, 264, 90, 340, 250];
        circleDialogChartDrawer(2, chartId, OPTION_MAPPING, xData, yData);
    });
}
