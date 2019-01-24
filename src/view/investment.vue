<style scoped lang="less">
#app {
  width: 100%;
  height: 100%;
  .title {
    width: 100%;
    font-size: 14px;
    padding: 10px 0 0 0;
    display: flex;
    .name {
      flex: 1;
      text-align: left;
      margin: 0 0 0 15px;
    }
    .more {
      flex: 1;
      text-align: right;
      margin: 0 15px 0 0;
    }
  }
  .tips {
    margin: 10px 15px;
    p {
      font-size: 14px;
      margin: 5px 0;
      padding: 0;
      text-align: left;
    }
  }
}
</style>

<template>
  <div>
    <div id="app">
      <div class="title">
        <div class="name">
          <span>消息提醒</span>
        </div>
        <div class="more">
          <span>更多</span>
        </div>
      </div>
      <div class="tips">
        <p>[保函预警]中国建设银行保函5天后到期</p>
        <p>[保函预警]中国农业银行保函5天后到期</p>
        <p>[保函预警]中国人民银行保函5天后到期</p>
      </div>
      <Circ :data="data1"/>
      <Circ :data="data2"/>
      <Circ :data="data3"/>
      <Circ :data="data4"/>
    </div>
  </div>
</template>

<script>
import Circ from '@/components/circleHighchart'
export default {
  name: 'Letter',
  data () {
    return {
      data1: {
        name: '保函总况比例图'
      },
      data2: {
        name: '保函保证金比例图'
      },
      data3: {
        name: '银行呈兑明细'
      },
      data4: {
        name: '银行敞口金额'
      }
    }
  },
  components: {
    Circ
  }
}
</script>
