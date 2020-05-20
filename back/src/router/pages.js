import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'Home',
    title: '主页',
    show: true,
    component: Home
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
