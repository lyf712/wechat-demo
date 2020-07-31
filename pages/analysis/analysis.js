import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '近日情况分析',
      left: 'center'
    },
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    legend: {
      // data: ['体温值', '健康评分', '工作评分'],
      // data: ['体温','健康','工作'],
      top: 30,
      left: 'center',
      backgroundColor: 'white',
      z: 120
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: '体温',
      type: 'line',
      smooth: true,
      data: [36, 36.5, 36.7, 37, 36.6, 37, 36.3]
    }, {
      name: '健康评分',
      type: 'line',
      smooth: true,
      data: [80, 83, 81, 85, 84, 90, 80]
    }, {
      name: '工作状态评分',
      type: 'line',
      smooth: true,
      data: [80, 90, 81, 90, 84, 90, 90]
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
  }
});
