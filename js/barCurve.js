function barCurveDraw (yData1, yData2) {
  var chartDom = document.getElementById('barCurve');
  var myChart = echarts.init(chartDom);

  var option = {
    grid: {
      top: 15,
      bottom: 40,
      left: 55,
    },
    xAxis: [
      {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLine: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff',  //更改坐标轴文字颜色
            fontSize: 10,      //更改坐标轴文字大小
            padding: 10,
          },
        },
        axisTick:{
          show:false   //刻度线
        }
      }
    ],
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        type: 'bar',
        data: yData1[0],
        itemStyle:{
          color: 'rgba(255, 225, 143, 0.3)',
          borderWidth:1,
          borderColor: '#FFE18FFF'
        }
      },
      {
        type: 'bar',
        data: yData1[1],
        itemStyle:{
          color: '#02246CFF',
          borderWidth:1,
          borderColor: '#00FFFFFF'
        }
      },
      {
        type: 'bar',
        data: yData1[2],
        itemStyle:{
          color: '#8FFF9AFF',
          borderWidth:1,
          borderColor: '#2C5294FF'
        }
      },
      {
        type: 'bar',
        data:yData1[3],
        itemStyle:{
          color: '#FFE18FFF',
          borderWidth:1,
          borderColor: '#FD2B01'
        }
      },
      {
        type: 'line',
        data: yData2[0],
        smooth: true,
        symbol:'none',
        itemStyle:{
          color: '#FFE18FFF',
        }
      },
      {
        type: 'line',
        data: yData2[1],
        smooth: true,
        symbol:'none',
        itemStyle:{
          color: '#00FFFFFF',
        }
      },
      {
        type: 'line',
        data: yData2[2],
        smooth: true,
        symbol:'none',
        itemStyle:{
          color: '#2C5294FF',
        }
      },
      {
        type: 'line',
        data: yData2[3],
        smooth: true,
        symbol:'none',
        itemStyle:{
          color: '#FD2B01',
        }
      }
    ]
  };
  myChart.setOption(option);
}