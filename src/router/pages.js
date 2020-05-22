import Home from '../views/Home.vue'
import Ranking from '../views/Ranking.vue'

export default [
  {
    path: '/',
    name: 'Home',
    title: '主页',
    show: true,
    component: Home
  },
  {
    path: '/Ranking',
    name: 'Ranking',
    title: '排行',
    show: true,
    component: Ranking
  },
  {
    path: '/about',
    name: 'About',
    title: '关于',
    show: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
