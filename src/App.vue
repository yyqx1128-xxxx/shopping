<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem ,Lazyload} from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

  export default {
    name: 'App',
    components:{
      
    }
  }
</script>

<style lang="less">
  body{
    margin: 0;
    padding: 0;
  }
</style>>

