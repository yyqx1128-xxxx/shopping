<template>
  <div class="home-recomm" :style="{ 'border-bottom': borderbottom}">
   <div class="recommed">
    <h3>{{title}}</h3>
    <div class="recommed-content">
      <div v-for="(item,index) in recommList" :key="index" class="recommend-item">
        <div  class="recommend-item-list">
          <a href="item.link">
            <div class="item-img">
              <van-image
                round
                width="100%"
                height="100%"
                :src="item.image"
              />
            </div>
            <div class="item-text">{{item.title}}</div>
          </a>
        </div>
      </div>
    </div>
      
   </div>
  </div>
</template>

<script>
  export default {
    name:'recommend',
    data(){
      return {
      }
    },
    props:{
      title: {
        type: String,
        default: "",
      },
      num: {
        type: Number,
        default: 0,
      },
      borderbottom: {
        type: String,
        default: "",
      },
      recommList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .home-recomm{
    text-align: center;
    font-size: 13px;
    padding:10px 18px;
    background: #fff;
    .recommed{
      
      .recommed-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        .recommend-item{
          flex: 1;
          .recommend-item-list{
             padding-bottom: 20px;
            a{
              .item-img{
                width: 70px;
                height: 70px;
                img{
                  height: 100%;
                  width: 100%;
                  border-radius: 50%;
                }
              }
              .item-text{
                color: black;
                padding-top: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>>
