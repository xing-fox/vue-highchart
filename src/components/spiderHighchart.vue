<style scoped lang="less">
</style>

<template>
  <div ref="Container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
</template>

<script>
import Highcharts from 'highcharts'
export default {
  name: 'Colu',
  data () {
    return {}
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      Highcharts.chart(this.$refs.Container, {
        chart: {
          polar: true,
          type: 'line'
        },
        title: {
          text: '预算与支出',
          x: -80
        },
        pane: {
          size: '80%'
        },
        xAxis: {
          categories: ['销售', '市场营销', '发展', '客户支持',
            '信息技术', '行政管理'],
          tickmarkPlacement: 'on',
          lineWidth: 0
        },
        yAxis: {
          gridLineInterpolation: 'polygon',
          lineWidth: 0,
          min: 0
        },
        tooltip: {
          shared: true
        },
        legend: {
          align: 'right',
          verticalAlign: 'top',
          y: 70,
          layout: 'vertical'
        },
        series: [{
          name: '预算拨款',
          data: [43000, 19000, 60000, 35000, 17000, 10000],
          pointPlacement: 'on'
        }, {
          name: '实际支出',
          data: [50000, 39000, 42000, 31000, 26000, 14000],
          pointPlacement: 'on'
        }]
      })
    }
  }
}
</script>
