<template>
    <div class="div-category" ref="homebodyScroll">
      <div class="header">
        <navbar title="分类" :lefticonshow="true" ref="homenav"></navbar>
      </div>
      <button @click="getDate()" style="margin-top:200px">获取</button>
      <button @click="getData(12)" style="margin-top:100px">日期</button>
      <h2>{{this.$store.state.month}}</h2>
    <tabbar/>
  </div>
 
</template>

<script>
import tabbar from '@/components/content/main-tabbar'
 import navbar from '@/components/common/navbar/nav-bar'
  import tabctrl from '@/components/common/tab-control.vue'
  import {
    mapState,
    mapMutations
  } from "vuex";
  export default {
      name:'category',
      components:{
        tabbar,
        navbar,
      },
    data () {
      return {
        allHouseDetail: [], // 所有房屋数据
        loading: false, // 是否处在加载状态
        finished: false, // 是否完成加载
        finishedText: '', // 加载完毕文本提示
        page: 0, // 当前页码
        page_size: 5, // 每页多少条
        total: 0, // 总条数
      };
    },
    created() {
      this.pullupLoadMore()
      this.test()
      this.$store.state.month = new Date().getMonth() +1
    },
   
    methods: {
      getDate(){
        console.log(this.$store.state.month)
        // this.month = new Date().getMonth() +1
      },
      getData(item){
        this.$store.commit('commitMonth',item)
      },

      getHouseDetail () {
    
        // this.$http({
        //   method: 'post',
        //   url: '/appProperty/getHouse',
        //   data: {
        //     communityId: this.communityId,
        //     page: this.page,
        //     limit: this.page_size
        //   }
        // }).then(res => {
          // if (res.returnCode == 10001) {
          if (this.page == 1) { // 首次获取收据
            this.allHouseDetail = [1,1,1]
            this.total = this.allHouseDetail.length;
          } else { // 下拉加载更多数据
            this.allHouseDetail = this.allHouseDetail.concat([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2])
            this.total = this.allHouseDetail.length;
            this.loading = false
            this.finished = false;
          }
          if (this.allHouseDetail.length == 0) { // 无数据提示
            this.finished = true;
            this.finishedText = '暂无数据';
          } 
          // else if (res.data.length < this.page_size) { // 总条目数小于每页条目数提示
          //   this.finished = true;
          //   this.finishedText = '没有更多啦';
          // }
        // } else { // 失败报错
        //   Toast.fail(res.returnMsg);
        // }
        // })
      },
      
      pullupLoadMore () { // 下拉加载更多
        this.page++; 
          this.getHouseDetail();
      },

      test() {
        for (var i = 0; i < 10 ; i++) {
          console.log(i)
            setTimeout(function() {console.log(i); }, 100 * i);
        }
      }
    }
  }
</script>

<style lang="less" >
  .div-category {
    .van-list {
      margin-top: 100px;

      height: 400px;
    }
  }
</style>
<style lang="less" scoped>
  .div-category{
    // margin-bottom: 44px;
    overflow-y: scroll;
    height: 100vh;
    .header{
      padding-top: 44px;
      position: fixed;
      background: #fff;
       z-index: 13;
       left: 0;
       top: 0;
    }
  }
</style>>
