<style scoped lang="less">
#app {
  width: 100%;
  height: 100%;
  .title {
    width: 100%;
    font-size: 14px;
    padding: 10px 0 0 0;
    display: flex;
    .name{
      flex: 1;
      text-align: left;
      margin: 0 0 0 15px;
    }
    .more{
      flex: 1;
      text-align: right;
      margin: 0 15px 0 0;
    }
  }
  .tips{
    margin: 10px 15px;
    p{
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
        <p>[投资收益]中国建设银行投资收益5元到账</p>
        <p>[投资收益]中国农业银行投资收益5元到账</p>
        <p>[投资收益]中国人民银行投资收益5元到账</p>
      </div>
      <Colu />
      <Circ :data="data" />
      <Spider />
    </div>
  </div>
</template>

<script>
import Colu from '@/components/coluHighchart'
import Circ from '@/components/circleHighchart'
import Spider from '@/components/spiderHighchart'
export default {
  name: 'Letter',
  data () {
    return {
      data: {
        name: '投资明细表'
      }
    }
  },
  components: {
    Colu,
    Circ,
    Spider
  }
}
</script>
