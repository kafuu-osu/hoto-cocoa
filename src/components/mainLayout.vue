<template>
  <div>
    <div id="main-layout-box">
      <top-navbar
        ref="topNavbar"
        :fixed="fixed"
      />
      <div
        :style="routerViewStyle"
        id="main-content-box"
      >
        <div id="view-box">
          <router-view />
        </div>
      </div>
      <footer-layout ref="footerLayout" />
    </div>
  </div>
</template>

<script>
import topNavbar from '@/components/topNavbar'
import footerLayout from '@/components/footerLayout'

export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  components: {
    topNavbar,
    footerLayout
  },
  data () {
    return {
      isMounted: false
    }
  },
  mounted () {
    this.isMounted = true
  },
  computed: {
    routerViewStyle () {
      return `height: calc(100vh - ${this.footerLayoutHeight}px - ${this.topNavbarHeight}px) !important;`
    },
    footerLayoutHeight () {
      return this.isMounted ? this.$refs.footerLayout.$refs.footerLayoutBox.clientHeight : '0'
    },
    topNavbarHeight () {
      return this.isMounted ? this.$refs.topNavbar.$refs.topNavbarBox.clientHeight : '0'
    }
  }

}
</script>

<style scoped>
#main-layout-box {
  flex: 1;
  min-height: 100vh;
}

#main-content-box {
  padding: 20px;
}

#view-box {
  background-color: gainsboro;
  height: 100%;
  padding: 20px;
  margin: 0 auto;
}
</style>
