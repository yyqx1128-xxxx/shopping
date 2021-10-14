<template>
  <div class="div-home" ref="homebodyScroll">
      <!-- <navbar class="home-nav" ref="homenav">
        <div slot='nav-center'>GOOD BAI</div>
        <div slot="navheaderbottom">
           <tabctrl :titles="['流行','新款','精选']" @itemClick="itemClick " ref="tabctrl" v-show="isshow"/>
        </div>
       
      </navbar> -->
      <div class="header">
        <navbar title="GOOD BAI" ref="homenav" titlecolor="#fff">
          <div slot="navheaderbottom">
              <tabctrl :titles="['流行','新款','精选']" @itemClick="itemClick " ref="tabctrl" v-show="isshow"/>
          </div>
        </navbar>
      </div>
     <div class='home-swipe'>
        <van-swipe :autoplay="3000" indicator-color="brown">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <a :href="'/views/category'"><img v-lazy="image" /></a>
          </van-swipe-item>
        </van-swipe>
        <recommend :recommList="recommList" :borderbottom="borderbottom"/> 
        <recommend :recommList="recommList1" :title="title"/> 
     </div>
      <!-- <div class="sort-list-item">
        <div v-for="(item,index) in ['流行','新款','精选']" :key='index'>
            <div @click="sort(index)" :class="tagIndex == index?'sort-item-active':'sort-item'">{{item}}</div>
        </div>
      </div> -->
      <tabctrl :titles="['流行','新款','精选']" @itemClick="itemClick " ref="tabctrlHeight"/>
      <!-- 上拉加载 -->
      <div class="goods-item">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check='false'>
          <div v-show="tagIndex == 0" >
            <div v-for="(item,index) in popularList" :key="index" class="goods-list" >
              <goodsList :item="item" @clickthis="goPage('/home/goods-detail',item)" />
            </div>
          </div>
          <div v-show="tagIndex == 1" >
            <div v-for="(item,index) in newgoodsList" :key="index" class="goods-list" >
              <goodsList :item="item" @clickthis="goPage('/home/goods-detail',item)" />
            </div>
          </div>
          <div v-show="tagIndex == 2" >
            <div v-for="(item,index) in goodList" :key="index" class="goods-list" >
              <goodsList :item="item" @clickthis="goPage('/home/goods-detail',item)" />
            </div>
          </div>
        </van-list>
      </div>
      <!-- 下拉刷新 -->
      <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check='false'>
          <div v-show="tagIndex == 0" >
            <div v-for="(item,index) in popularList" :key="index" class="goods-list" >
              <goodsList :item="item" @clickthis="goPage('/home/goods-detail',item)" />
            </div>
          </div>
          <div v-show="tagIndex == 1" >
            <div v-for="(item,index) in newgoodsList" :key="index" class="goods-list" >
              <goodsList :item="item" @clickthis="goPage('/home/goods-detail',item)" />
            </div>
          </div>
          <div v-show="tagIndex == 2" >
            <div v-for="(item,index) in goodList" :key="index" class="goods-list" >
              <goodsList :item="item" @clickthis="goPage('/home/goods-detail',item)" />
            </div>
          </div>
        </van-list>
      </van-pull-refresh> -->
      

      <tabbar/>
  </div>
</template>

<script>
  import axios from 'axios';
  import { getSwipeList } from '@/api/index.js';
  import tabbar from '@/components/content/main-tabbar'
  // import tabbar from '@/components/tabbar'
  import navbar from '@/components/common/navbar/nav-bar'
  import recommend from '@/views/home/home-recommend'
  import tabctrl from '@/components/common/tab-control.vue'
  import goodsList from './goods-list.vue'
  import {
    mapState,
    mapMutations
  } from "vuex";
  export default {
      name:'home',
      data() {
        return {
          title:'本周流行',
          borderbottom:'10px solid #eee',
          swipList:[],
          city:'重庆',
          tagIndex: 0,
          finished:false,
          loading:false,
          refreshing: false,
          tabOffsetTop:'',
          isshow: false,
          navHeight:'',
          images: [
            'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
            'https://img0.baidu.com/it/u=1591518917,1772351041&fm=26&fmt=auto&gp=0.jpg',
            'https://img1.baidu.com/it/u=3162343181,1988115276&fm=26&fmt=auto&gp=0.jpg',
          ],
           recommList:[
            {
              image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
              title:'好物特卖',
              link:''
            },
            {
              image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
              title:'好物特卖',
              link:''
            },
            {
              image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
              title:'内购福利',
              link:''
            },
            {
              image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
              title:'初次上新',
              link:''
            },
          ],
          recommList1:[
            {
              image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
              title:'好物特卖',
              link:''
            },
            {
              image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
              title:'好物特卖',
              link:''
            },
            {
              image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
              title:'内购福利',
              link:''
            },
            {
              image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
              title:'初次上新',
              link:''
            },
             {
              image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
              title:'内购福利',
              link:''
            },
            {
              image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
              title:'初次上新',
              link:''
            },
            {
              image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
              title:'每日抢购',
              link:''
            },
            {
              image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
              title:'每日抢购',
              link:''
            },
            
          ],
          popularList:[
            {   id:0,
                image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
                name:'xxx商品',
                price:'88.88',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
            {   id:1,
                image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
                name:'xxx商品',
                price:'88.88',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
            {   id:2,
                image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
                name:'xxx商品',
                price:'88.88',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
            {   id:3,
                image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
                name:'xxx商品',
                price:'88.88',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
            {   id:4,
                image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
                name:'xxx商品',
                price:'88.88',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
            {   id:5,
                image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
                name:'xxx商品',
                price:'88.88',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
          ],
          newgoodsList:[
            {   id:0,
                image:'https://img0.baidu.com/it/u=1591518917,1772351041&fm=26&fmt=auto&gp=0.jpg',
                name:'llll商品',
                price:'111',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
            {   id:1,
                image:'https://img0.baidu.com/it/u=1591518917,1772351041&fm=26&fmt=auto&gp=0.jpg',
                name:'llll商品',
                price:'111',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
            {   id:2,
                image:'https://img0.baidu.com/it/u=1591518917,1772351041&fm=26&fmt=auto&gp=0.jpg',
                name:'llll商品',
                price:'111',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
            {   id:3,
                image:'https://img0.baidu.com/it/u=1591518917,1772351041&fm=26&fmt=auto&gp=0.jpg',
                name:'llll商品',
                price:'111',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
            {   id:4,
                image:'https://img0.baidu.com/it/u=1591518917,1772351041&fm=26&fmt=auto&gp=0.jpg',
                name:'llll商品',
                price:'111',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
            {   id:5,
                image:'https://img0.baidu.com/it/u=1591518917,1772351041&fm=26&fmt=auto&gp=0.jpg',
                name:'llll商品',
                price:'111',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
            
          ],
          goodList:[
            {   id:0,
                image:'https://img1.baidu.com/it/u=3162343181,1988115276&fm=26&fmt=auto&gp=0.jpg',
                name:'哈哈哈商品',
                price:'150',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
            {   id:1,
                image:'https://img1.baidu.com/it/u=3162343181,1988115276&fm=26&fmt=auto&gp=0.jpg',
                name:'哈哈哈商品',
                price:'111',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
            {   id:2,
                image:'https://img1.baidu.com/it/u=3162343181,1988115276&fm=26&fmt=auto&gp=0.jpg',
                name:'哈哈哈商品',
                price:'111',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
            {   id:3,
                image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
                name:'哈哈哈商品',
                price:'111',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
            {   id:4,
                image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
                name:'哈哈哈商品',
                price:'111',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
            {   id:5,
                image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
                name:'哈哈哈商品',
                price:'111',
                countprice:'198.8',
                content:'啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                shopname:'hhhd店铺'
              },
          ],
        };
      },
      computed: {
        ...mapState({
          homeScrolltTop: (state) => state.homeScrolltTop,
        })
      },
      components:{
        tabbar,
        navbar,
        recommend,
        tabctrl,
        goodsList,
      },
      //在vue对象存活的情况下，进入当前存在activated()函数的页面时，一进入页面就触发；可用于初始化页面数据等
      activated() {
        setTimeout(() => {
          this.$refs.homebodyScroll.scrollTop = this.homeScrolltTop
        }, 1)
      },
      mounted(){
        window.addEventListener("scroll", this.scrollHander, true); // 监听页面滚动事件
        //获取 切换标签tabctrl的offsetTop
        //所有的组件都有属性$el 用于获取组件中的元素
        this.navHeight = this.$refs.homenav.$el.offsetHeight
        this.tabOffsetTop = this.$refs.tabctrlHeight.$el.offsetTop
        
      },
       beforeDestroy() {
         //销毁这个监听要不然会在其他的页面中 执行 报错
        window.removeEventListener("scroll", this.scrollHander, true);
      },
      //保持 home页面 的状态
       beforeRouteLeave(to, from, next) {
        this.setState([{
          "name": 'homeScrolltTop',
          "value": this.$refs.homebodyScroll.scrollTop
        }])
        next();
      },
      methods: {
        ...mapMutations(['setState']),
        scrollHander() {
           let scrollTop = this.$refs.homebodyScroll.scrollTop
           let top = this.tabOffsetTop - this.navHeight
           if(scrollTop >= top) {
               this.isshow = true
            } else {
               this.isshow = false
            }
        },
        // 上拉加载
        onLoad() {
          // 异步更新数据
          // setTimeout 仅做示例，真实场景中一般为 ajax 请求
          setTimeout(() => {
            // 加载状态结束
            this.loading = false;

            // 数据全部加载完成
            if (this.popularList.length >= 6) {
              this.finished = true;
            }
          }, 1500);
          
        },
        // //下拉刷新
        // async onLoad() {
        //   setTimeout(() => {
        //     if (this.refreshing) {
        //       this.list = [];
        //       this.refreshing = false;
        //     }
        //     this.loading = false;

        //     if (this.popularList.length >= 5) {
        //       this.finished = true;
        //     }
        //   }, 1000);
        // },
        // onRefresh() {
        //   // 清空列表数据
        //   this.finished = false;

        //   // 重新加载数据
        //   // 将 loading 设置为 true，表示处于加载状态
        //   this.loading = true;
        //   this.onLoad();
        // },
        itemClick(index){
          this.tagIndex = index;
          this.$refs.tabctrl.currentIndex = index;
          this.$refs.tabctrlHeight.currentIndex = index;
        },
        goPage(path,item){
          this.$router.push({
            path: path,
            query:{
              id: item.id
            }
          })
        },
        sort(index) {
            this.tagIndex = index;
            // if (this.tagIndex == 0) {
              
            // } else if(this.tagIndex == 1) {

            // } else {

            // }
          },
        get_weather(){
                      // http://wthrcdn.etouch.cn/weather_mini?city=城市名称
                      axios.get("http://wthrcdn.etouch.cn/weather_mini?city=重庆")
                          .then(response=>{
                              console.log(response);
  
                          }).catch(error=>{
                              console.log(error.response)
                      });
                  }
      }
  }
</script>

<style lang="less" scoped>
  .div-home{
    height: 100vh;
    overflow-y: scroll;
    background: #F5F6F7;
    .header{
      position: fixed;
      background-color: brown;
      z-index: 13;
      left: 0;
      top: 0;
    }
    .home-swipe{
      width: 100%;
      margin-top: 44px;
      img{
        width: 100%;
        height: 200px;
      }
    }
    .sort-list-item{
      background: #fff;
        position: sticky;
        z-index: 99;
        top: 44px;
        left: 0;
        right: 0;
        padding: 10px 44px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        .sort-item {
          color: #333;
          font-weight: 400;
        }
    
        .sort-item-active {
          position: relative;
          color:red;
          &::after {
            content: ' ';
            width: 40px;
            height: 4px;
            transform: translateX(-50%);
            position: absolute;
            bottom: -10px;
            left: 50%;
            background:red;
            border-radius: 2px;
          }
      }
    }
    .goods-item {
     
      .goods-list{
        margin: 15px 18px;
        background: #fff;
        border-radius: 10px;
      }
    }
  }
</style>>
