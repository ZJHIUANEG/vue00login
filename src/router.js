import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

// 导入对应的路由组件
import Login from "./components/login.vue";
import Canv from "./components/canv.vue";

var router = new VueRouter({
  routes: [
    // 配置路由规则
    { path: "/login", component: Login },
    { path: "/canv", component: Canv }
  ]
});

// 将路由暴露出去
export default router;
