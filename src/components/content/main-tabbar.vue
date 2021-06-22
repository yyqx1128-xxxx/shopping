<template>
   <navTab>
      <tabItem path="/views/home" activeColor="#00E6BF">
        <img slot="item-icon" src='@/assets/img/tabbar/tab-home-icon.png'/>
        <img slot="item-icon-active" src='@/assets/img/tabbar/tab-home-light-icon.png'/>
        <div slot="item-text">首页</div>
      </tabItem>
      <tabItem path="/views/category" activeColor="#00E6BF">
        <img slot="item-icon" src='@/assets/img/tabbar/tab-category-icon.png'/>
        <img slot="item-icon-active" src='@/assets/img/tabbar/tab-category-light-icon.png'/>
        <div slot="item-text">分类</div>
      </tabItem>
      <tabItem path="/views/cart" activeColor="#00E6BF">
        <img slot="item-icon" src='@/assets/img/tabbar/tab-cart-icon.png'/>
        <img slot="item-icon-active" src='@/assets/img/tabbar/tab-cart-light-icon.png'/>
        <div slot="item-text">购物车</div>
      </tabItem>
      <tabItem path="/views/mine" activeColor="#00E6BF">
        <img slot="item-icon" src='@/assets/img/tabbar/tab-my-icon.png'/>
        <img slot="item-icon-active" src='@/assets/img/tabbar/tab-my-light-icon.png'/>
        <div slot="item-text">我的</div>
      </tabItem>
     
    </navTab>
</template>

<script>
  import navTab from "@/components/common/tabbar/tab-bar";
  import tabItem from "@/components/common/tabbar/tab-bar-item";
  export default {
    name: "tabBar",
    components:{
      navTab,
      tabItem,
    }
  };
</script>

<style scoped>

</style>