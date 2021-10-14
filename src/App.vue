<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem ,Lazyload ,Image as VanImage, Col, Row, Cell,
   Tab, Tabs, Icon, Checkbox, CheckboxGroup, List, PullRefresh, ActionSheet,
   GoodsAction, GoodsActionIcon, GoodsActionButton, Divider, Sku,  } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(VanImage);
Vue.use(Col);
Vue.use(Row);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(Cell);
Vue.use(ActionSheet);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Divider);
Vue.use(Sku);

  export default {
    name: 'App',
    components:{
      
    }
  }
</script>

<style lang="less">
  #app{
    height: 100%;
  }
  body{
    margin: 0;
    padding: 0;
  }
</style>>

