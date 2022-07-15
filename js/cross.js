function crossDraw (yData) {
  var chartDom = document.getElementById('cross');
  var myChart = echarts.init(chartDom);
  const colors = ['#F833FF', '#2EFF2E'];
  var option = {
    color: colors,
    grid: {
      top: 50,
      bottom: 65,
      left: 55,
      right: 10,
      borderColor: 'rgba(3,62,138,0.1000)'
    },
    legend: {
      data: ['预约作业数量', '其中八项危险作业数量'],
      top: 20,
      right: 30,
      textStyle: {
        color: '#87BAF8',  // 图例文字颜色
        fontSize: 9
      },
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
      data: ['2022-07-09', '2022-07-10', '2022-07-11', '2022-07-12', '2022-07-13', '2022-07-14', '2022-07-15', '2022-07-16', '2022-07-17', '2022-07-18', '2022-07-19', '2022-07-20'],
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: false,
        textStyle: {
          color: '#fff',  //更改坐标轴文字颜色
          fontSize: 10      //更改坐标轴文字大小
        },
        rotate: 45,
        padding: [20, 0, 0, 6]
      },
      splitLine: {
        show: false,
      },
      axisTick:{
        show:false   //刻度线
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#020d4a',
          type: 'solid',
        }
      },
    },
    series: [{
      name: '预约作业数量',
      data:yData[0],
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#C560FFFF'
          },
          {
            offset: 1,
            color: '#6339FFFF'
          }
        ])
      },
      type: 'line',
      smooth: true,
      symbol:'none'
    },
    {
      name: '其中八项危险作业数量',
      data: yData[1],
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#2EFF2EFF'
          },
          {
            offset: 1,
            color: '#6339FFFF '
          }
        ])
      },
      type: 'line',
      smooth: true,
      symbol:'none'
    }]
  };
  myChart.setOption(option);
}
