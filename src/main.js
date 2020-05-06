import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import $backend from './backend'
import NProgress from 'nprogress'
import smoothscroll from 'smoothscroll-polyfill'
import Antd from 'ant-design-vue'
import './theme/custom.less'
import 'nprogress/nprogress.css'

Vue.prototype.$backend = $backend

Vue.config.productionTip = false

smoothscroll.polyfill()

Vue.use(Antd)

NProgress.configure({
  easing: 'ease-in-out',
  speed: 500,
  showSpinner: true,
  trickleSpeed: 200,
  minimum: 0.4
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  global.routeName = [to.name]
  next()
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
