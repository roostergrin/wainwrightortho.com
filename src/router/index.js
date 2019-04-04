import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/pages/home/home')

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
      path: '/*',
      navigation: false,
      component: Home
    }
  ]
})

export default router
