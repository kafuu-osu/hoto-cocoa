import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: false,
    pageWidth: 1024,
    themeConfig: {
      showSider: true,
      openSider: true,
      siderFixed: true,
      topNavbarFixed: true,
      siderWidth: 210
    }
  },
  getters: {
    themeShowSider: state => state.themeConfig.showSider,
    themeOpenSider: state => state.themeConfig.openSider,
    themeSiderFixed: state => state.themeConfig.siderFixed,
    themeTopNavbarFixed: state => state.themeConfig.topNavbarFixed,
    themeSiderWidth: state => state.themeConfig.siderWidth,
    pageWidth: state => state.pageWidth,
    isMobile: state => state.isMobile
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
    },
    setThemeSiderWidth (state, setting) {
      Vue.set(state.themeConfig, 'siderWidth', setting)
    },
    setPageWidth (state, setting) {
      Vue.set(state, 'pageWidth', setting)
    },
    setIsMobile (state, setting) {
      Vue.set(state, 'isMobile', setting)
    }
  },
  actions: {
  },
  modules: {
  }
})
