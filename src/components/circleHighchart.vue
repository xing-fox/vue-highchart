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
  props: {
    data: {
      type: Object
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      Highcharts.chart(this.$refs.Container, {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: this.data.name
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        series: [{
          name: '比例',
          colorByPoint: true,
          data: [{
            name: '一年期限',
            y: 40,
            sliced: true,
            selected: true
          }, {
            name: '二年期限',
            y: 30
          }, {
            name: '三年期限',
            y: 30
          }]
        }]
      })
    }
  }
}
</script>
