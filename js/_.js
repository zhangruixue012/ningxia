
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


  //销售模块的曲线图
  //yData = [[], [], []]的第一据是外排水COD的数据，第二项NH3-N的数据，第三项是外排水PH的数据
  curveDraw([[82, 93, 901, 934, 290, 130, 120, 780, 880, 560, 120, 450],
    [72, 73, 90, 974, 120, 130, 10, 90, 130, 1000, 880, 65],
    [19, 73, 910, 94, 190, 90, 120, 1140, 121, 101, 100, 890]])


  //库存绘制
  // yData是柱状体对应的数据
  // drilldownData点击柱状体后变成曲线对应的数据
  //注意 1.yData的groupId和drilldownData的dataGroupId相对应
  //     2.从后端获取的数据格式和下面不一致，一定要在echarts相关的js文件修改对应的关系
  //maxYData是对应的柱状体的最大值（背景阴影）
  let maxYData = ['1000', '900', '1200', '800', '1200', '900', '1100', '1300', '1000', '990', '800']
  let yData = [
    {
      value: 731,
      groupId: 'yy',
    },
    {
      value: 719,
      groupId: 'chyl'
    },
    {
      value: 773,
      groupId: 'czyl'
    },
    {
      value: 719,
      groupId: 'cpqy'
    },
    {
      value: 419,
      groupId: 'bcpqy'
    },
    {
      value: 343,
      groupId: 'cpcy'
    },
    {
      value: 731,
      groupId: 'bcpcy'
    },
    {
      value: 731,
      groupId: 'cphm'
    },
    {
      value: 719,
      groupId: 'yj'
    },
    {
      value: 773,
      groupId: 'ya'
    },
    {
      value: 719,
      groupId: 'ns'
    }
  ]
  let drilldownData = [
    {
      dataGroupId: 'yy',
      data: [
        ['1月', 24],
        ['2月', 26],
        ['3月', 31],
        ['4月', 24],
        ['5月', 19],
        ['6月', 81],
        ['7月', 71],
        ['8月', 61],
        ['9月', 51],
        ['10月', 41],
        ['11月', 31],
        ['12月', 21]
      ]
    },
    {
      dataGroupId: 'chyl',
      data: [
        ['1月', 214],
        ['2月', 261],
        ['3月', 131],
        ['4月', 240],
        ['5月', 619],
        ['6月', 81],
        ['7月', 71],
        ['8月', 610],
        ['9月', 510],
        ['10月', 410],
        ['11月', 131],
        ['12月', 211]
      ]
    },
    {
      dataGroupId: 'czyl',
      data: [
        ['1月', 24],
        ['2月', 26],
        ['3月', 31],
        ['4月', 24],
        ['5月', 19],
        ['6月', 81],
        ['7月', 71],
        ['8月', 61],
        ['9月', 51],
        ['10月', 41],
        ['11月', 31],
        ['12月', 21]
      ]
    },
    {
      dataGroupId: 'cpqy',
      data: [
        ['1月', 24],
        ['2月', 26],
        ['3月', 31],
        ['4月', 24],
        ['5月', 19],
        ['6月', 81],
        ['7月', 71],
        ['8月', 61],
        ['9月', 51],
        ['10月', 41],
        ['11月', 31],
        ['12月', 21]
      ]
    },
    {
      dataGroupId: 'bcpqy',
      data: [
        ['1月', 24],
        ['2月', 26],
        ['3月', 31],
        ['4月', 24],
        ['5月', 19],
        ['6月', 81],
        ['7月', 71],
        ['8月', 61],
        ['9月', 51],
        ['10月', 41],
        ['11月', 31],
        ['12月', 21]
      ]
    },
    {
      dataGroupId: 'cpcy',
      data: [
        ['1月', 24],
        ['2月', 26],
        ['3月', 31],
        ['4月', 24],
        ['5月', 19],
        ['6月', 81],
        ['7月', 71],
        ['8月', 61],
        ['9月', 51],
        ['10月', 41],
        ['11月', 31],
        ['12月', 21]
      ]
    },
    {
      dataGroupId: 'bcpcy',
      data: [
        ['1月', 24],
        ['2月', 26],
        ['3月', 31],
        ['4月', 24],
        ['5月', 19],
        ['6月', 81],
        ['7月', 71],
        ['8月', 61],
        ['9月', 51],
        ['10月', 41],
        ['11月', 31],
        ['12月', 21]
      ]
    },
    {
      dataGroupId: 'cphm',
      data: [
        ['1月', 24],
        ['2月', 26],
        ['3月', 31],
        ['4月', 24],
        ['5月', 19],
        ['6月', 81],
        ['7月', 71],
        ['8月', 61],
        ['9月', 51],
        ['10月', 41],
        ['11月', 31],
        ['12月', 21]
      ]
    },
    {
      dataGroupId: 'yj',
      data: [
        ['1月', 24],
        ['2月', 26],
        ['3月', 31],
        ['4月', 24],
        ['5月', 19],
        ['6月', 81],
        ['7月', 71],
        ['8月', 61],
        ['9月', 51],
        ['10月', 41],
        ['11月', 31],
        ['12月', 21]
      ]
    },
    {
      dataGroupId: 'ya',
      data: [
        ['1月', 24],
        ['2月', 26],
        ['3月', 31],
        ['4月', 24],
        ['5月', 19],
        ['6月', 81],
        ['7月', 71],
        ['8月', 61],
        ['9月', 51],
        ['10月', 41],
        ['11月', 31],
        ['12月', 21]
      ]
    },
    {
      dataGroupId: 'ns',
      data: [
        ['1月', 24],
        ['2月', 26],
        ['3月', 31],
        ['4月', 24],
        ['5月', 19],
        ['6月', 81],
        ['7月', 71],
        ['8月', 61],
        ['9月', 51],
        ['10月', 41],
        ['11月', 31],
        ['12月', 21]
      ]
    }
  ];
  barDraw(yData, drilldownData, maxYData)
  // let pieData = [
  //   { value: 20, name: '累计数据' }, //100
  //   { value: 20, name: '日量数据' }, //20
  // ]
  // pie1Draw(pieData)
  // pie2Draw(pieData)
  /*
    a/b*c （a和b是后端返回的数值，c是固定值）
      a是炼油利用的值
      b是日量或者累计的值
      c是父div的width
    */
  // $("#refiningMarginsDay").width(500 / 1000 * 75)
  // $("#refiningMarginsTotal").width(200 / 1000 * 75)
  // $("#oilProfitDay").width(200 / 1000 * 75)
  // $("#oilProfitTotal").width(200 / 1000 * 75)
  // $("#finishedCostDay").width(200 / 1000 * 75)
  // $("#finishedCostTotal").width(200 / 1000 * 75)
  // $("#oilFinishedCostDay").width(200 / 1000 * 75)
  // $("#oilFinishedCostTotal").width(200 / 1000 * 75)

  // 环保模块 tab切换 调取后端数据,传入对应的仪表盘中最大值和value
  // panel1Draw(100, 50)
  // panel2Draw(100, 50)
  // panel3Draw(100, 50)
  $(".section_panel_tab  li").click(function () {
    $(this).addClass("current").siblings().removeClass("current");
    var index = $(this).index(); //index为0是燃油,1为化肥
    alert('传tab对应y轴数据')
    curveDraw([[820, 93, 901, 934, 290, 30, 120, 80, 80, 160, 120, 450],
      [772, 73, 901, 74, 120, 130, 101, 90, 130, 100, 880, 65],
      [191, 731, 91, 914, 90, 900, 120, 140, 121, 101, 100, 90]])
    // panel1Draw(50, 9)
    // panel2Draw(60, 20)
    // panel3Draw(200, 180)
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
  environmentalDraw();

  // 财务日数据及技术经济指标模块
  indicatorsDraw();
})
