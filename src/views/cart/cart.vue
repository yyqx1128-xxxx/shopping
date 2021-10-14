<template>
  <div class="div-cart">
    <h1>购物车</h1>
    <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh"> -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    <!-- </van-pull-refresh> -->
  <tabbar/>
  </div>
</template>

<script>
import tabbar from '@/components/content/main-tabbar'
 import goodsList from '../home/goods-list.vue'
  export default {
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
      };
    },
    methods: {
      onLoad() {
          if (this.refreshing) {
            this.list = [];
            this.refreshing = false;
          }

          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          this.loading = false;

          if (this.list.length >= 40) {
            this.finished = true;
          }
      },
    },
    components:{
      goodsList,
      tabbar
    },
   
  };
</script>

<style lang="less" scoped>

</style>