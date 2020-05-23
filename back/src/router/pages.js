import Home from '../views/Home.vue'
import Ranking from '../views/Ranking.vue'
import Introduce from '../views/Introduce.vue'
import Switcher from '../views/Switcher.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/404.vue'

export default [
  {
    path: '/',
    name: 'Home',
    title: '主页',
    icon: 'home',
    show: true,
    component: Home
  },
  {
    path: '/ranking',
    name: 'Ranking',
    title: '排行',
    icon: 'up-circle',
    show: true,
    component: Ranking
  },
  {
    path: '/introduce',
    name: 'Introduce',
    title: '介绍',
    show: false,
    component: Introduce
  },
  {
    path: '/switcher',
    name: 'Switcher',
    title: '切换器',
    show: false,
    component: Switcher
  },
  {
    path: '/login',
    name: 'Login',
    title: '登录',
    show: false,
    component: Login
  },
  {
    path: '/404',
    name: 'page not found',
    title: '页面未找到',
    show: false,
    component: NotFound
  },
  {
    path: '*',
    redirect: '/404'
  }
]
