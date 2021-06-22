<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else >
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
        
       <!-- <div class="tab-bar-img">
          <img src='@/assets/learn/tabbar/tab-home-light-icon.png'/>
      </div>
      <div>首页</div> -->
    </div>
  
</template>

<script>
    export default {
        name:'navTabItem',
        computed:{
            isActive() {
                //判断当前活跃的路由的path包含了tab item里面的path一样 ，isActive为true
                //indexOf如果==-1 那么当前活跃路由不包含要的那个路由 就为-1false，反之
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle() {
                return this.isActive ? {color: this.activeColor} : {}
            }
        },
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'#00E6BF'
            }
        },
        methods:{
            itemClick(){
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
        color: #DDDDDD;
    }
    .tab-bar-item img{
        height: 24px;
        width: 24px;
        margin-top: 3px;
        margin-bottom: 2px;
        vertical-align: middle;
    }
    .active{
        color:#00E6BF;
    }
</style>