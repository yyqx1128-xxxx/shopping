<template>
  <div class="div-category">
      <h1>分类</h1>
      <inputpup @getcode="getcode"/>
       <div @click="getmsg">{{code}}</div>

      <tabbar/>
  </div>
</template>

<script>
import tabbar from '@/components/content/main-tabbar'
import inputpup from './input-pup'
  export default {
      name:'category',
      components:{
        tabbar,
        inputpup
      },
      data() {
        return {
          code:''
        }
      },
      methods: {
        getcode(code){
          this.code=code;
          console.log('aaa'+this.code)
        },
        getmsg(){
          console.log(this.code)
        }
      }
  }
</script>

<style lang="less" scoped>

</style>>
