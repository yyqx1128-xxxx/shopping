<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" class="item-ctrl" 
      :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
   
  </div>
</template>

<script>
  import goodsList from '@/views/home/goods-list.vue'
  export default {
    props: {
      titles: {
          type:Array,
          default() {
              return []
          }
      },
      isfixed: {
        type: Boolean,
        default:false
      }
    },
    components: {
      goodsList,

    },
    data() {
      return {
        currentIndex: 0,
        goodsList:[
          {
            image:'https://img1.baidu.com/it/u=3650246543,1922757657&fm=26&fmt=auto&gp=0.jpg',
            name:'好物特卖',
            price:'',
            content:'hhhhhh'
          },
        ]

      }
    },
    methods: {
      itemClick(index){
        this.currentIndex=index;
        this.$emit('itemClick',index)
      }
    }
  }
</script>

<style lang="less" scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
    position: relative;
    .item-ctrl {
      flex: 1;
      height: 40px;
      line-height: 40px;
      // .goods {
      //   margin-top: 20px;
      //   height: 300px;
      // }
    }
    .active{
      color: red;
      span{
        padding: 5px;
        border-bottom: 1px solid red;
      }
    }
  }
</style>