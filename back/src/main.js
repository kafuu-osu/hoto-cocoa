import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import i18n from './i18n'
import $backend from './backend'
import smoothscroll from 'smoothscroll-polyfill'
import './theme/globalStyle.css'
import './theme/nprogress.css'

import { Icon } from 'ant-design-vue'

Vue.use(Icon)

Vue.prototype.$backend = $backend

Vue.config.productionTip = false

smoothscroll.polyfill()

new Vue({
  router,
  store,
  // i18n,
  render: h => h(App)
}).$mount('#app')
