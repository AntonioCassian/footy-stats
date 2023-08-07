import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Stats from '@/views/Stats.vue'
import Leagues from '@/views/Leagues.vue'
import Matches from '@/views/Matches.vue'
import Prediction from '@/views/Prediction.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/stats',
    name: 'stats',
    component: Stats
  },
  {
    path: '/leagues',
    name: 'leagues',
    component: Leagues
  },
  {
    path: '/matches',
    name: 'matches',
    component: Matches
  },
  {
    path: '/predictions/',
    name: 'predictions',
    component: Prediction
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'registe',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
