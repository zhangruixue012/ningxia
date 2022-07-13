function pie1Draw (data) {
  var chartDom = document.getElementById('pie1');
  optionPie(chartDom, '可比轻油收率', data)
}
function pie2Draw (data) {
  var chartDom = document.getElementById('pie2');
  optionPie(chartDom, '可比综合商品率', data)
}
function optionPie (chartDom, titleText) {
  var myChart = echarts.init(chartDom);
  var option = {
    title: {
      text: titleText,
      color: '#87BAF8',
      left: 155,
      top: 16,
      textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}  
        fontSize: 14,
        color: '#87BAF8',
        fontStyle: 'normal',
        fontWeight: 'normal',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        type: 'pie',
        radius: ['26', '50'],
        center: [205, 95],
        color: ['#02246C', '#FFC35A'],
        labelLine: {
          show: false,
        },
        label: {
          formatter: '{b}\n{c}',
          padding: [0, -30],
          width: 50,
          lineHeight: 20,
          textStyle: {
            fontSize: 12,
            color: "#fff",
          },
        },
        data: [
          { value: 20, name: '累计数据' }, //100
          { value: 20, name: '日量数据' }, //20
        ],
      }
    ]
  };
  myChart.setOption(option);

}