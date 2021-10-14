<template>
<div>
  <div class="nav-bar">
      <div class="nav-left">
        <slot name="left"></slot>
      </div>
      <div class="nav-center">
        <slot name="center"></slot>
      </div>
      <div class="nav-right">
        <slot name="right"></slot>
      </div>
  </div>
  <div>
    <slot name="navheaderbottom"></slot>
  </div>
</div>
  
</template>

<script>
  export default {
    name:'navbar',
    components:{

    }
  }
</script>

<style lang="less">
    .nav-bar{
      position: relative;
      top: 0;
      width: 100vw;
      // position: fixed;
      // left: 0;
      // top: 0;
      // right: 0;
      // z-index: 9;
        display: flex;
        line-height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100 , 100, 100, .1) ;
        .nav-left,.nav-right{
            width: 60px;
        }
        .nav-center{
            flex: 1;
        }
      
    }
</style>>
