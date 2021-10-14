<template>
      <div class="goods-item" @click="clickthis(item)">
          <div class="goods-item-left">
             <img :src="item.image">
          </div>
          <div class="goods-item-right">
            <div class="goods-item-name">
              {{item.name}}
            </div>
            <div class="goods-item-content">
              {{item.content}}
            </div>
            <div class="goods-item-price">
              <span>￥ {{item.price}}</span>
              <span>￥ {{item.countprice}}</span>
            </div>
            <div class="goods-item-buy">
              <div class="goods-item-shopname">
                <span><van-icon name="shop" color="rgb(240, 60, 60)" size="20"/></span>
                <span>{{item.shopname}}</span>
              </div>
              <span class="buy">立即购买</span>
            </div>
          </div>
      </div>
</template>

<script>
  export default {
    props: {
      goodsList: {
        type:Array,
        default() {
            return []
        }
      },
      item: {
        type:Object,
        require:true
      }
    },
    methods:{
      clickthis(item) {
        this.$emit('clickthis',item)
      }
    }
  }
</script>

<style lang="less" scoped>
    
        .goods-item{
            border-radius: 8px;
            margin: 15px auto 15px;
            padding-right: 8px;
            display: flex;
            .goods-item-left{
                width: 150px;
                height: 100px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
            }
            .goods-item-right{
              flex: 1;
              padding-left: 15px;
              font-size: 16px;
              .goods-item-name{
                font-weight: 600;
                line-height: 32px;
              }
              .goods-item-content{
                color: #999;
                font-size: 14px;
                width: 170px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
              }
              .goods-item-price{
                color: red;
                span{
                  &:last-child{
                    margin-left: 10px;
                    font-size: 13px;
                    text-decoration:line-through;
                    color: gray;
                  }
                }
              }
              .goods-item-buy {
                display: flex;
                justify-content: space-between;
                margin-top: 5px;
                .goods-item-shopname{
                  flex: 1;
                  font-size: 13px;
                  margin-top: 5px;
                  span{
                    vertical-align: middle;
                    &:last-child {
                      margin-left: 5px;
                    }
                  }
                }
                .buy{
                  text-align: center;
                  display: inline-block;
                  letter-spacing: 1px;
                  width: 80px;
                  font-size: 14px;
                  line-height: 28px;
                  height: 28px;
                  color: white;
                  background: rgb(240, 60, 60);
                }
              }
            }
        }
</style>