<template>
  <div class="div-home">
      <navbar class="home-nav">
        <div slot='nav-center'>GOOD BAi</div>
      </navbar>
     <div class='home-swipe'>
        <van-swipe :autoplay="3000" indicator-color="brown">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <a :href="'/views/category'"><img v-lazy="image" /></a>
          </van-swipe-item>
        </van-swipe>
        <recommend :recommList="recommList"/> 
     </div>
      <h1 @click="get_weather">首页</h1>
      <tabbar/>
  </div>
</template>

<script>
  import axios from 'axios';
  import { getSwipeList } from '@/api/index.js';
  import tabbar from '@/components/content/main-tabbar'
  import navbar from '@/components/common/navbar/navbar'
  import recommend from '@/views/home/home-recommend'
  export default {
      name:'home',
      data() {
        return {
          swipList:[],
          city:'重庆',
          images: [
            'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
            'https://img0.baidu.com/it/u=1591518917,1772351041&fm=26&fmt=auto&gp=0.jpg',
            'https://img1.baidu.com/it/u=3162343181,1988115276&fm=26&fmt=auto&gp=0.jpg',
          ],
          recommList:[
            {
              image:'@/assets/logo.png',
              title:'好物特卖',
              link:''
            },
            {
              image:'@/assets/img/recomm/r2.webp',
              title:'内购福利',
              link:''
            },
            {
              image:'@/assets/img/recomm/r3.webp',
              title:'初次上新',
              link:''
            },
            {
              image:'@/assets/img/recomm/r4.webp',
              title:'每日抢购',
              link:''
            }
          ]
        };
      },
      components:{
        tabbar,
        navbar,
        recommend
      },
    methods: {
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
    .home-nav{
      background-color: brown;
      color: white;
    }
    .home-swipe{
      width: 100%;
      img{
        width: 100%;
        height: 200px;
      }
    }
  }
</style>>
