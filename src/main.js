import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import './config/bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
