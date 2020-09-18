// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from './../views/MSite/MSite.vue'
import Order from './../views/Order/Order.vue'
import Profile from './../views/Profile/Profile.vue'
import Search from './../views/Search/Search.vue'
import Login from './../views/Login/Login.vue'

// 声明使用
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
