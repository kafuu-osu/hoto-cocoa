import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    themeConfig: {
      showSider: true,
      openSider: true,
      siderFixed: true,
      topNavbarFixed: true
    }
  },
  getters: {
    themeShowSider: state => state.themeConfig.showSider,
    themeOpenSider: state => state.themeConfig.openSider,
    themeSiderFixed: state => state.themeConfig.siderFixed,
    themeTopNavbarFixed: state => state.themeConfig.topNavbarFixed
  },
  mutations: {
    setThemeShowSider (state, setting) {
      Vue.set(state.themeConfig, 'showSider', setting || !state.themeConfig.showSider)
    },
    setThemeOpenSider (state, setting) {
      Vue.set(state.themeConfig, 'openSider', setting || !state.themeConfig.openSider)
    },
    setThemeSiderFixed (state, setting) {
      Vue.set(state.themeConfig, 'siderFixed', setting || !state.themeConfig.siderFixed)
    },
    setThemeTopNavbarFixed (state, setting) {
      Vue.set(state.themeConfig, 'topNavbarFixed', setting || !state.themeConfig.topNavbarFixed)
    }
  },
  actions: {
  },
  modules: {
  }
})
