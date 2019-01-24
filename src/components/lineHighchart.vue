<style scoped lang="less">
</style>

<template>
  <div ref="Container" style="min-width: 310px; width: 90%; height: 400px; margin: 0 auto"></div>
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
        title: {
          text: '融资成本'
        },
        yAxis: {
          title: {
            text: ''
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 2010
          }
        },
        series: [{
          name: '公司实时成本',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
          name: '社会成本',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
          name: '社会平均成本',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      })
    }
  }
}
</script>
