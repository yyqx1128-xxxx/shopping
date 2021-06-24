<template>
  <div class="home-recomm">
    <div v-for="(item,index) in recommList" :key="index">
      <a href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'recommend',
    data(){
      return {
        recommLink:''
      }
    },
    props:{
      recommList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="less">

</style>>
