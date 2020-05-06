<template>
  <div>
    <div id="main-layout-box">
      <top-navbar
        ref="topNavbar"
        :fixed="true"
      />
      <router-view :style="routerViewStyle" />
      <footer-layout ref="footerLayout" />
    </div>
  </div>
</template>

<script>
import topNavbar from '@/components/topNavbar'
import footerLayout from '@/components/footerLayout'

export default {
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
      return `height: calc(100% - ${this.footerLayoutHeight}px - ${this.topNavbarHeight}px);`
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
  height: 100%;
}
</style>
