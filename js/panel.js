function panel1Draw (maxValue = 100, value = 50) {
  var chartDom = document.getElementById('panel1');
  option(chartDom, maxValue, value)
}
function panel2Draw (maxValue = 100, value = 50) {
  var chartDom = document.getElementById('panel2');
  option(chartDom, maxValue, value)
}
function panel3Draw (maxValue = 100, value = 50) {
  var chartDom = document.getElementById('panel3');
  option(chartDom, maxValue, value)
}
function option (chartDom, maxValue = 100, value = 50) {
  var myChart = echarts.init(chartDom);
  var option = {
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        radius: '75',  //仪表盘半径，可是相对值、绝对值
        center: ['50%', 125],
        max: maxValue,
        axisLine: {
          lineStyle: {       // 属性lineStyle控制线条样式  
            width: 30,
            color: [[0.2, '#2CE582 '], [0.8, '#0270F1'], [1, '#FB3878 ']]
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          distance: -35, //刻度位置
          color: '#FFFFFF',
          fontSize: 9
        },
        pointer: {
          length: '47', //指针长短
          width: 4,
          itemStyle: {
            color: '#FFBF24',
          },
          offsetCenter: [0, 0],
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 15,
          offsetCenter: [0, 0],
          itemStyle: {
            borderWidth: 4,
            // background: '#02246C ',
            color: '#02246C',
            borderColor: '#FFBF24',
          }
        },
        title: {
          show: false
        },
        detail: {
          valueAnimation: true,
          fontSize: 16,
          color: '#FFBF24',
          offsetCenter: [0, '30%'],
        },
        data: [
          {
            value: value
          }
        ]
      }
    ]
  };
  myChart.setOption(option);
}
