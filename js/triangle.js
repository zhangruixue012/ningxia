
function triangleDraw (data) {
  var chartDom = document.getElementById('triangle');
  var myChart = echarts.init(chartDom);
  var option = {
    graphic: {
      elements: [
        {
          type: 'circle',
          left: 'center', // 相对父元素居中
          bottom: '32',  // 相对父元素居中
          scaleX: 15,
          shape: {
            cx: 200,
            cy: 200,
            r: 11,
          },
          style: {
            fill: 'transparent ',
            stroke: '#113F9E ',
            lineWidth: 1,
          }
        },
      ]
    },
    xAxis: {
      data: ['', '常压日加工原油量', '尿素日产量', '合成氮日产量', ''],
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { show: false }
    },
    yAxis: {
      splitLine: { show: false },
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { show: false }
    },
    boundaryGap: '6%',
    // color: ['#e54035'],
    series: [
      {
        name: 'hill',
        type: 'pictorialBar',
        barCateGoryGap: 1,
        symbol: 'path://M652,1037.883l-28.529,79.3,28.529,14.626Z',
        // symbol: 'image:../image/Gradient Overlay.png',
        symbolSize: [40, "100%"],
        symbolOffset: ['-50%', 25],
        itemStyle: {
          normal: {
            color: function (params) {
              var colorList = ['', '#004A79', '#72D5DE', '#9C88B8', ''];
              return colorList[params.dataIndex];
            },
            opacity: 1
          }
        },
        // itemStyle: {
        //   opacity: 0.5
        // },
        emphasis: {
          itemStyle: {
            opacity: 0.9
          }
        },
        data: data,
        // data: [123, 60, 25, 18, 12, 9, 2, 1],
        z: 100,
      },
      {
        type: 'pictorialBar',
        symbol: 'path://M689.944,1038.634l28.529,79.3-28.529,14.626Z',
        barCategoryGap: '5',
        symbolSize: [40, "100%"],
        symbolOffset: ['50%', 25],
        label: {
          normal: {
            formatter: "{b}\n{c}" + "吨",
            show: true,
            position: "top",
            textStyle: {
              fontWeight: "bolder",
              fontSize: "14p",
              lineHeight: 20,
              color: "#53CBFB"
            }

          }
        },
        labelLine: {
          normal: {
            show: true,
            showAbove: true,
            length: 20,
            minTurnAngle: 50,
            lineStyle: {
              color: '#000',
              width: 20,
            }
          }
        },
        itemStyle: {
          normal: {
            color: function (params) {
              var colorList = ['', '#004A79', '#72D5DE', '#9C88B8', ''];
              return colorList[params.dataIndex];
            },
            opacity: 0.9
          }
        },
        emphasis: {
          itemStyle: {
            opacity: 1
          }
        },
        data: data,
        z: 10
      }
    ]
  };
  myChart.setOption(option);
}