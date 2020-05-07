<template>
  <div>
    <div
      v-if="fixed"
      id="top-navbar-placeholder"
      :style="topNavbarHeight"
    />
    <div
      id="top-navbar-box"
      ref="topNavbarBox"
      :style="topNavbarHeight"
      :class="topNavbarBoxClass"
    >
      <div id="top-navbar-content">
        <div
          class="sidebar-open-control-button"
          @click="sidebarOpenSwitch"
        >
          <a-icon :type="themeOpenSider ? 'menu-fold' : 'menu-unfold'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 70
    }
  },
  methods: {
    sidebarOpenSwitch () {
      this.$store.commit('setThemeOpenSider')
    },
    sidebarFixedSwitch () {
      this.$store.commit('setThemeSiderFixed')
    },
    topNavbarFixedSwitch () {
      this.$store.commit('setThemeTopNavbarFixed')
    },
    sidebarShowSwitch () {
      this.$store.commit('setThemeShowSider')
    }
  },
  computed: {
    ...mapGetters(['themeShowSider', 'themeOpenSider']),
    topNavbarBoxClass () {
      return this.fixed ? 'top-navbar-box-fixed' : ''
    },
    topNavbarHeight () {
      return `height: ${this.height}px;`
    }
  }
}
</script>

<style soped lang="less">

  #top-navbar-box {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: red;
    padding: 0 10px;
    box-shadow: 0 2px 8px #f0f1f2;
  }

  .top-navbar-box-fixed {
    position: fixed;
    top: 0;
    z-index: 5;
  }

  #top-navbar-placeholder {
    width: 100%;
    padding: 0 10px;
  }

  #top-navbar-content {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .sidebar-open-control-button {
    margin-right: 20px;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    transition: .4s ease;
    color: black;
  }

  .sidebar-open-control-button:hover {
    color: green;
  }

  .sidebar-open-control-button:active {
    color: red;
  }

</style>
