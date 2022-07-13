function curveDraw (yData) {
  var chartDom = document.getElementById('curve');
  var myChart = echarts.init(chartDom);
  var option = {
    grid: {
      top: 10,
      // left: 50,
      // right: 40,

    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#439AFFFF'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff',  //更改坐标轴文字颜色
          fontSize: 10      //更改坐标轴文字大小
        },
      },
      axisTick:{
        show:false   //刻度线
      },
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff',  //更改坐标轴文字颜色
          fontSize: 10      //更改坐标轴文字大小
        },
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: '外排水PH',
        data: yData[2],
        type: 'line',
        smooth: true,
        color: '#439AFF'
      },
    ],
  };
  myChart.setOption(option);
}
