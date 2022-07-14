
$(document).ready(function () {
  //图片名称对象
  let imgObj = {
    0: 'common_system',
    1: 'production_control',
    2: 'todo_work',
    3: 'business_processing',
    4: 'process_approval',
    5: 'statistical_analysis',
    6: 'system_settings'
  }
  let aHover = $('.nav_hover_li')
  let content = $(".nav_hover_box")
  for (let i = 0; i < aHover.length; i++) {
    aHover[i].index = i;
    aHover[i].onmouseover = content[i].onmouseover = function () {
      content[i].style.display = 'block'
      $(this).children('p').css("color", "#00DEFF")
      $(this).children('p').children('img').attr('src', './image/' + imgObj[i] + '_hover.png')
    }
    aHover[i].onmouseout = content[i].onmouseout = function () {
      content[i].style.display = 'none'
      $(this).children('p').css("color", "#ffffff")
      $(this).children('p').children('img').attr('src', './image/' + imgObj[i] + '.png')
    }
  }
  let moreDiv = $('.nav_hover_content >div')
  for (let i = 0; i < moreDiv.length; i++) {
    moreDiv[i].onmouseover = function () {
      $(this).children('img').attr('src', './image/more_hover.png')
    }
    moreDiv[i].onmouseout = function () {
      $(this).children('img').attr('src', './image/more.png')
    }
  }


  // 销售模块tag点击
  $(".type_tags span").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    alert('销售模块tag点击');
    curveDraw([[82, 93, 901, 934, 290, 130, 120, 780, 880, 560, 120, 450],
      [72, 73, 90, 974, 120, 130, 10, 90, 130, 1000, 880, 65],
      [19, 73, 910, 94, 190, 90, 120, 1140, 121, 101, 100, 890]])
  })

  //销售模块的曲线图
  //yData = [[], [], []]的第一据是外排水COD的数据，第二项NH3-N的数据，第三项是外排水PH的数据
  curveDraw([[82, 93, 901, 934, 290, 130, 120, 780, 880, 560, 120, 450],
    [72, 73, 90, 974, 120, 130, 10, 90, 130, 1000, 880, 65],
    [19, 73, 910, 94, 190, 90, 120, 1140, 121, 101, 100, 890]])




  // 最大值集合
  var maxDataList = [20000, 20000, 15000, 13000, 30040, 20000, 20000, 20000, 20000, 20000, 20000];
  // 实际库存量集合
  var actualData = [10000,19099, 8000, 6000, 4000, 16000, 5000, 2000, 14900, 2888, 8906];
  // 库存柱状图绘制：
  barDraw(maxDataList, actualData);


  $(".section_panel_tab  li").click(function () {
    $(this).addClass("current").siblings().removeClass("current");
    var index = $(this).index(); //index为0是燃油,1为化肥
    alert('传tab对应y轴数据')
  });


  //各单位风险作业数量统计
  //crossyData的第一项数据是预约作业数量，第二项数据是其中八项危险作业数量
  let crossyData = [[
    1126, 1115, 1190, 1264, 218, 1170, 1175, 1112, 1487, 1181, 1160, 123
  ],[
    113, 620, 830, 1100, 1140, 415, 601, 511, 1140, 200, 1140, 1118
  ]]
  crossDraw(crossyData)
  $(".unit_risk_tab  li").click(function () {
    $(this).addClass("current_tab").siblings().removeClass("current_tab");
    var index = $(this).index(); //index为tab的每项
    crossDraw(crossyData)
    alert('传tab对应y轴数据')

  });
  $(".see_more").click(function () {
    alert('点击更多按钮')
  });


  // 环保模块仪表盘绘制
  const environmentalData = [
    {value: 70, name: '外排水COD'},
    {value: 30, name: 'NH3-N'},
    {value: 50, name: '外排水PH'}
  ]
  environmentalDraw(environmentalData);

  // 环保模块button切换
  $('.type_buttons div').click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    const environmentalData1 = [
      {value: 10, name: '厂尿素外排PH'},
      {value: 40, name: 'NH3-N'},
      {value: 80, name: 'COD'}
    ]
    environmentalDraw(environmentalData1);
  })



  // 财务日数据及技术经济指标模块


  indicatorsDraw();

  // 点击产品产量月数据
  $("#monthData").click(function () {

    createChartDiv('monthData_dialog_chart', '产品产量月数据');

    monthDataChartDraw('monthData_dialog_chart');
  });

  // 点击圆环
  $('.circle_content .circle_img').click(function () {
    var index = $(this).attr('attr-index');


    const chartId = 'circle_chart_' + index;
    createChartDiv(chartId, OPTION_MAPPING[index].title);

    const xData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月'];
    const yData = [140, 232, 101, 264, 90, 340, 250];
    circleDialogChartDrawer(index, chartId, OPTION_MAPPING, xData, yData);
  })
})
