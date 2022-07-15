
function barDraw (maxData, data) {
  var chartDom = document.getElementById('bar');
  var myChart = echarts.init(chartDom);

  var picData = ['image://./image/pillars_blue.svg',
    'image://./image/pillars_green.svg',
    'image://./image/pillars_yellow.svg',
    'image://./image/pillars_white.svg',
  ];

  var dataShow = [];
  var maxDataShow = [];

  for (let i = 0; i < data.length; i++) {
    dataShow.push({value: (data[i]/maxData[i]).toFixed(4)*10000,realVal:data[i],symbol:picData[i%4],maxVal:maxData[i]})
  }
  for (let i = 0; i < maxData.length; i++) {
    maxDataShow.push({
      value: 10000,
      realVal: maxData[i],
      label: {
        show: true,
        position: 'top',
        formatter: function (params) {
          return params.data.realVal;
        },
        offset: [0,-15],
        fontSize: 13,
        color: '#b8daef'
      }
    })
  }

  const option = {
    grid : {
      left:20,
      right:20,
      top : 50,
      bottom: 20
    },
    xAxis: {
      data: ['原油', '催化原料', '重整原料', '成品汽油',
        '半成品汽油', '成品柴油', '半成品柴油', '成品航煤', '油浆', '液氨', '尿素'],
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        interval:0, //使x轴横坐标全部显示
        color: '#fff'
      }
    },
    yAxis: {
      splitLine: { show: false },
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { show: false }
    },
    series: [
      {
        name: 'full',
        type: 'pictorialBar',
        symbol: 'image://./image/pillar_transparent.svg',
        animationDuration: 0,
        itemStyle: {
          opacity: 1
        },
        data: maxDataShow,
        label: {
          show: true,
          position: 'top',
          offset: [0,-15],
          fontSize: 13,
          color: '#adfaff'
        },
      },
      {
        name: '原油',
        type: 'pictorialBar',
        data: dataShow,
        itemStyle: {
          opacity: 0.7
        },
        z:10,
        label: {
          show: true,
          position: 'top',
          fontSize: 13,
          formatter: function (params) {
            return ((params.value / 10000) * 100).toFixed(0) + '%';
          },
          color: '#adfaff'
        },
      }
    ]
  };

  myChart.getZr().on('click', function (params) {
    let pointInPixel = [params.offsetX, params.offsetY]
    let xIndex = null
    if (myChart.containPixel('grid', pointInPixel)) {
      xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
      if (xIndex === -0) xIndex = 0
    }
    if (xIndex != null) {

      const chartId = 'inventory_chart_' + xIndex;
      createChartDiv(chartId, INVENTORY_OPTION_MAPPING[xIndex].title);

      const xData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月'];
      const yData = [140, 232, 101, 264, 90, 340, 250];
      circleDialogChartDrawer(xIndex, chartId, INVENTORY_OPTION_MAPPING, xData, yData);

    }
  });
  myChart.setOption(option);
}
