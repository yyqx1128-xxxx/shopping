<template>
  <div class="div-mine">
      <h1>我的</h1>
      <h2>{{this.$store.state.month}}</h2>
      <tabbar/>
  </div>
</template>

<script>
import tabbar from '@/components/content/main-tabbar'
  export default {
      name:'mine',
      components:{
        tabbar,
      }
  }
</script>

<style lang="less" scoped>

</style>