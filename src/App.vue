<template>
  <div id="app">
    <div class="main">
      <router-view/>
    </div>
    <ul class="button">
      <li v-for="(item, index) in navList" :class="{on: itemIndex == index}" :key="index" @click="navChange(index)">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      itemIndex: 0,
      navList: [
        '融资',
        '投资',
        '担保',
        '保函'
      ]
    }
  },
  methods: {
    navChange (eq) {
      let _route
      this.itemIndex = eq
      switch (eq) {
        case 0:
          _route = '/'
          break
        case 1:
          _route = '/letter'
          break
        case 2:
          _route = '/guarantee'
          break
        case 3:
          _route = '/investment'
          break
      }
      this.$router.push(_route)
    }
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .main{
    width: 100%;
    padding: 0 0 50px 0;
  }
  .button{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    li{
      flex: 1;
      color: #999;
      height: 40px;
      line-height: 40px;
      list-style: none;
      background: #f2f3f5;
      &.on{
        color: #000;
      }
    }
  }
}
</style>
