// 入口js
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

let vm = new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})

Vue.use({
  vm
})
