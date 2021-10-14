<template>
  <div class="div-cart">
    <h2>倒计时{{min}}分{{sec}}秒</h2>
  <tabbar/>
  </div>
</template>

<script>
import tabbar from '@/components/content/main-tabbar'
  export default {
    name:'cart',
    components:{
      tabbar,
    },
    data() {
      return {
        time:5,
        minute:'',
        second:'',
        timeInterval: null,
      }
    },
    created(){
      console.log('已创建')
      this.startTime(this.time)
    },
    // mounted(){
    //   console.log('已挂载'+this.time)
    //   this.startTime(this.time)
    // },
    beforeDestroy(){
      // console.log('销毁之前----')
      clearInterval(this.timeInterval)
      this.timeInterval = null
    },
    
    //当前路由不使用 缓存，离开当前路由会直接调用 beforeDestroy 和 destroy 销毁
    //当前路由使用 缓存，离开当前路由不会直接调用 beforeDestroy 和destroy 销毁，需要使用路由钩子函数主动的调用
    // beforeRouteLeave(to, from, next) {
    //   this.$destroy();
    //   next();
    // },
   
    computed: {
      min() {
        if (this.minute < 10) return '0' + this.minute;
        return this.minute;
      },
      sec() {
        if (this.second < 10) return '0' + this.second;
        return this.second;
      }
    },
    methods: {
      startTime(time){
        this.minute = Math.floor((time / 60) % 60)
        this.second = time % 60
        this.timeInterval = setInterval(() => {
          if(this.minute == 0){
            if(this.second == 0){
              clearInterval(this.timeInterval)
              this.second = 0
            }else{
              this.second -= 1
            }
          }
          else {
            if(this.second == 0){
              this.second = 59
              this.minute -=1
            
            }else{
              this.second -= 1
            }
          }
        },1000)
        
      },
      
    }
  }
</script>

<style lang="less" scoped>

</style>>