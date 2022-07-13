
function barDraw (yData, drilldownData, maxYData) {
  var chartDom = document.getElementById('bar');
  var myChart = echarts.init(chartDom);
  xData = ['原油', '催化原料', '重整原料', '成品汽油', '半成品汽油', '成品柴油', '半成品柴油', '成品航煤', '油浆', '液氨', '尿素'];
  // colorList = [
  //   ['#0F6AED', '#3BA9F5', '#085FEC '],
  //   ['#FC5C53', '#FF9A82', '#FA4D39'],
  //   ['#E01B63', '#FB53C0', '#D9104E'],
  //   ['#B644FA', '#CD69FB', '#AF3BFB'],
  //   ['#0F6AED', '#3BA9F5', '#085FEC '],
  //   ['#0F6AED', '#3BA9F5', '#085FEC '],
  //   ['#FC5C53', '#FF9A82', '#FA4D39'],
  //   ['#E01B63', '#FB53C0', '#D9104E'],
  //   ['#B644FA', '#CD69FB', '#AF3BFB'],
  //   ['#0F6AED', '#3BA9F5', '#085FEC '],
  //   ['#FC5C53', '#FF9A82', '#FA4D39'],
  // ];
  // ['柱状体颜色有透明度', '底部圆的颜色']
  colorList = [
    ['rgba(36,126,255, 0.64)', '#085FECFF'],
    ['rgba(245,133,35, 0.21)', '#FA4D39FF'],
    ['rgba(245,35,35, 0.21)', '#D9104EFF'],
    ['rgba(181,69,251, 0.21)', '#AF3BFBFF'],
    ['rgba(36,126,255, 0.64)', '#085FECFF'],
    ['rgba(36,126,255, 0.64)', '#085FECFF'],
    ['rgba(245,133,35, 0.21)', '#FA4D39FF'],
    ['rgba(245,35,35, 0.21)', '#D9104EFF'],
    ['rgba(181,69,251, 0.21)', '#AF3BFBFF'],
    ['rgba(36,126,255, 0.64)', '#085FECFF'],
    ['rgba(245,133,35, 0.21)', '#FA4D39FF'],
  ];
  //柱状体的北京颜色（是渐变值）
  bgColorList = [
    ['#0F6AEDFF', '#3BA9F500' ],
    ['#FC5C53FF', '#FF9A8200'],
    ['#E01B63FF', '#FB53C000'],
    ['#B644FAFF', '#CD69FB00'],
    ['#0F6AEDFF', '#3BA9F500'],
    ['#0F6AEDFF', '#3BA9F500'],
    ['#FC5C53FF', '#FF9A8200'],
    ['#E01B63FF', '#FB53C000'],
    ['#B644FAFF', '#CD69FB00'],
    ['#002ED6FF', '#3BA9F500'],
    ['#FC5C53FF', '#FF9A8200'],
  ];
  const labelOption = {
    show: true,
    formatter: '{c}',
    fontSize: 9,
    rich: {
      name: {}
    }
  };
  var option = {
    grid: {
      top: '25%',
      left: '-4%',
      bottom: '5%',
      right: '2%',
      containLabel: true,
    },
    animation: false,
    xAxis: [
      {
        // type: 'category',
        data: xData,
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          textStyle: {
            color: '#fff',
            fontSize: 12
          },
          margin: 30,
        },
      },
    ],
    yAxis: [
      {
        show: false,
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#fff',
          },
        },
        axisLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: '',
        id: '1',
        type: 'pictorialBar',
        symbolSize: [0, 0],
        symbolOffset: [0, -6], // 上部椭圆
        symbolPosition: 'end',
        color: '#2DB1EF',
        data: yData,
      },
      {
        name: '',
        id: '2',
        type: 'pictorialBar',
        symbolSize: [40, 10],
        symbolOffset: [0,5], // 下部椭圆
        z: 12,
        itemStyle: {
          normal: {
            color: function (params) {
              var colorItem = colorList[params.dataIndex];
              return colorItem[1];
            },
          },
        },
        data: yData,
      },
      {
        type: 'bar',
        id: '3',
        barWidth: '40',
        barGap: '10%', // Make series be overlap
        barCateGoryGap: '10%',
        silent: true,
        label: labelOption,
        itemStyle: {
          normal: {
            color: function (params) {
              var colorItem = colorList[params.dataIndex];
              return colorItem[0];
            },
          },
          // normal: {
          //   color: function (params) {
          //     var colorItem = colorList[params.dataIndex];
          //     return new echarts.graphic.LinearGradient(0, 1, 0, 0, [
          //       {
          //         offset: 0,
          //         color: colorItem[0]
          //       },
          //       {
          //         offset: 1,
          //         color: colorItem[1]
          //       },
          //       // {
          //       //   offset: 1,
          //       //   color: '#02246C'
          //       // }
          //     ], false);
          //   }
          // },
        },
        data: yData,
        universalTransition: {
          enabled: true,
          divideShape: 'clone'
        }
      },
      //背景阴影（最大值）
      {
        id: '4',
        type: 'bar',
        barWidth: '40',//背景阴影宽度
        barGap: '-100%',//进行偏移，将背景移到数据正下方
        itemStyle: {
          normal: {
            color: function (params) {
              var bgColorItem = bgColorList[params.dataIndex];
              return new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: bgColorItem[0]
                },
                {
                  offset: 1,
                  color: bgColorItem[1]
                }
              ], false);
            }
          },
        },
        zlevel: -2,
        data: maxYData,//每项阴影显示高度
        label: {
          normal: {
            show: true,
            position: 'top',
            fontSize: 14,
            color: '#53CBFB ',
          },
        }
      }
    ],
    // 下钻
    dataGroupId: '',
    animationDurationUpdate: 500,
  };
  // const drilldownData = [
  //   {
  //     dataGroupId: 'yy',
  //     data: [
  //       ['1月', 24],
  //       ['2月', 26],
  //       ['3月', 31],
  //       ['4月', 24],
  //       ['5月', 19],
  //       ['6月', 81],
  //       ['7月', 71],
  //       ['8月', 61],
  //       ['9月', 51],
  //       ['10月', 41],
  //       ['11月', 31],
  //       ['12月', 21]
  //     ]
  //   },
  //   {
  //     dataGroupId: 'chyl',
  //     data: [
  //       ['1月', 214],
  //       ['2月', 261],
  //       ['3月', 131],
  //       ['4月', 240],
  //       ['5月', 619],
  //       ['6月', 81],
  //       ['7月', 71],
  //       ['8月', 610],
  //       ['9月', 510],
  //       ['10月', 410],
  //       ['11月', 131],
  //       ['12月', 211]
  //     ]
  //   },
  //   {
  //     dataGroupId: 'czyl',
  //     data: [
  //       ['1月', 24],
  //       ['2月', 26],
  //       ['3月', 31],
  //       ['4月', 24],
  //       ['5月', 19],
  //       ['6月', 81],
  //       ['7月', 71],
  //       ['8月', 61],
  //       ['9月', 51],
  //       ['10月', 41],
  //       ['11月', 31],
  //       ['12月', 21]
  //     ]
  //   },
  //   {
  //     dataGroupId: 'cpqy',
  //     data: [
  //       ['1月', 24],
  //       ['2月', 26],
  //       ['3月', 31],
  //       ['4月', 24],
  //       ['5月', 19],
  //       ['6月', 81],
  //       ['7月', 71],
  //       ['8月', 61],
  //       ['9月', 51],
  //       ['10月', 41],
  //       ['11月', 31],
  //       ['12月', 21]
  //     ]
  //   },
  //   {
  //     dataGroupId: 'bcpqy',
  //     data: [
  //       ['1月', 24],
  //       ['2月', 26],
  //       ['3月', 31],
  //       ['4月', 24],
  //       ['5月', 19],
  //       ['6月', 81],
  //       ['7月', 71],
  //       ['8月', 61],
  //       ['9月', 51],
  //       ['10月', 41],
  //       ['11月', 31],
  //       ['12月', 21]
  //     ]
  //   },
  //   {
  //     dataGroupId: 'cpcy',
  //     data: [
  //       ['1月', 24],
  //       ['2月', 26],
  //       ['3月', 31],
  //       ['4月', 24],
  //       ['5月', 19],
  //       ['6月', 81],
  //       ['7月', 71],
  //       ['8月', 61],
  //       ['9月', 51],
  //       ['10月', 41],
  //       ['11月', 31],
  //       ['12月', 21]
  //     ]
  //   },
  //   {
  //     dataGroupId: 'bcpcy',
  //     data: [
  //       ['1月', 24],
  //       ['2月', 26],
  //       ['3月', 31],
  //       ['4月', 24],
  //       ['5月', 19],
  //       ['6月', 81],
  //       ['7月', 71],
  //       ['8月', 61],
  //       ['9月', 51],
  //       ['10月', 41],
  //       ['11月', 31],
  //       ['12月', 21]
  //     ]
  //   },
  //   {
  //     dataGroupId: 'cphm',
  //     data: [
  //       ['1月', 24],
  //       ['2月', 26],
  //       ['3月', 31],
  //       ['4月', 24],
  //       ['5月', 19],
  //       ['6月', 81],
  //       ['7月', 71],
  //       ['8月', 61],
  //       ['9月', 51],
  //       ['10月', 41],
  //       ['11月', 31],
  //       ['12月', 21]
  //     ]
  //   },
  //   {
  //     dataGroupId: 'yj',
  //     data: [
  //       ['1月', 24],
  //       ['2月', 26],
  //       ['3月', 31],
  //       ['4月', 24],
  //       ['5月', 19],
  //       ['6月', 81],
  //       ['7月', 71],
  //       ['8月', 61],
  //       ['9月', 51],
  //       ['10月', 41],
  //       ['11月', 31],
  //       ['12月', 21]
  //     ]
  //   },
  //   {
  //     dataGroupId: 'ya',
  //     data: [
  //       ['1月', 24],
  //       ['2月', 26],
  //       ['3月', 31],
  //       ['4月', 24],
  //       ['5月', 19],
  //       ['6月', 81],
  //       ['7月', 71],
  //       ['8月', 61],
  //       ['9月', 51],
  //       ['10月', 41],
  //       ['11月', 31],
  //       ['12月', 21]
  //     ]
  //   },
  //   {
  //     dataGroupId: 'ns',
  //     data: [
  //       ['1月', 24],
  //       ['2月', 26],
  //       ['3月', 31],
  //       ['4月', 24],
  //       ['5月', 19],
  //       ['6月', 81],
  //       ['7月', 71],
  //       ['8月', 61],
  //       ['9月', 51],
  //       ['10月', 41],
  //       ['11月', 31],
  //       ['12月', 21]
  //     ]
  //   }
  // ];
  myChart.getZr().on('click', function (params) {
    let pointInPixel = [params.offsetX, params.offsetY]
    let xIndex = null
    if (myChart.containPixel('grid', pointInPixel)) {
      xIndex = myChart.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY])[0]
      if (xIndex === -0) xIndex = 0
    }
    if (xIndex != null) {
      myChart.setOption({
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            show: false   //刻度线
          }
        },
        tooltip: {
          show: false,
        },
        series: [
          {
            id: '1',
            data: []
          },
          {
            id: '2',
            data: []
          },
          {
            type: 'line',
            id: '3',
            smooth: true,
            symbol: 'none',
            dataGroupId: drilldownData[xIndex].dataGroupId,
            data: drilldownData[xIndex].data,
            universalTransition: {
              enabled: true,
              divideShape: 'clone'
            }
          },
          {
            id: '4',
            data: []
          }
        ],
        graphic: [
          {
            type: 'text',
            left: 20,
            top: 0,
            style: {
              text: 'Back',
              fontSize: 14,
              fill: '#fff'
            },
            onclick: function () {
              myChart.setOption(option);
            }
          }
        ]
      });
    }
  });
  myChart.setOption(option);
}