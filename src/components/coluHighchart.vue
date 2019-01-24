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
          type: 'column'
        },
        title: {
          text: '融资总况比例图'
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          title: {
            text: ''
          }
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
              format: '{point.y:.1f}%'
            }
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [{
          name: '融资',
          colorByPoint: true,
          data: [{
            name: '融资成本',
            y: 56.33
          }, {
            name: '投资收益',
            y: 24.03
          }]
        }]
      })
    }
  }
}
</script>
