import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes = [
  //打开页面默认路径
  {
    path: "/",
    redirect: "/views/home"
  },

  {
    path: "/views/home",
    //路由懒加载 ：路由被访问到时再加载对应的组件
    component: () => import("@/views/home/home"),
    meta: {
      title: '首页',
      keepAlive:true,
    }
  },
  {
    path: "/views/category",
    component: () => import("@/views/category/category"),
    meta: {
      title: '分类'
    },
  },
  {
    path: "/views/cart",
    component: () => import("@/views/cart/cart"),
    meta: {
      title: '购物车'
    },
  },
  {
    path: "/views/mine",
    component: () => import("@/views/mine/mine"),
    meta: {
      title: '我的'
    },
  },
 
];

const router = new Router({
  mode: "history",
  routes
});


export default router;
