import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/home/home'

import Styleguide from '@/pages/styleguide/styleguide'
import scrollBehavior from '@/shared/functionality/scroll-behavior'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      navigation: true,
      component: Home
    },
    {
      path: '/styleguide',
      name: 'Styleguide',
      navigation: false,
      component: Styleguide
    }
  ],
  scrollBehavior
})

export default router
