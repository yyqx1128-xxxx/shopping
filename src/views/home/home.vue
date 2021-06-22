<template>
  <div class="div-home">
      <navbar class="home-nav">
        <div slot='nav-center'>GOOD BAi</div>
      </navbar>
      <h1>首页</h1>
      <tabbar/>
  </div>
</template>

<script>
import tabbar from '@/components/content/main-tabbar'
import navbar from '@/components/common/nav/navbar'
  export default {
      name:'home',
      components:{
        tabbar,
        navbar
      }
  }
</script>

<style lang="less" scoped>
  .div-home{
    .home-nav{
      background-color: brown;
      color: white;
    }
  }
</style>>
