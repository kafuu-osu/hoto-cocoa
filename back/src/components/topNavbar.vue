<template>
  <div class="top-navbar-must">
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
        <div
          class="switcher-button"
          style="margin-right: auto;"
        >
          说明
        </div>
        <div
          class="search-box"
          :style="openSearchBox ? 'width: 180px;' : 'width: 30px;'"
        >
          <a-icon
            type="search"
            class="search-button"
            @click="handleSearch"
          />
          <input
            type="text"
            class="search-input"
            placeholder="寻找玩家..."
          >
        </div>

        <div class="switcher-button">
          切换器
        </div>
        <div class="login-button">
          sign in
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
      default: 60
    }
  },
  data () {
    return {
      openSearchBox: true
    }
  },
  watch: {
    miniSizePage: {
      handler: function (val) {
        this.openSearchBox = !val
      }
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
    },
    handleSearch () {
      if (this.openSearchBox) {

      } else {

      }
    }
  },
  computed: {
    ...mapGetters(['themeOpenSider', 'pageWidth', 'isMobile']),
    topNavbarBoxClass () {
      return this.fixed ? 'top-navbar-box-fixed' : ''
    },
    topNavbarHeight () {
      return `height: ${this.height}px; `
    },
    miniSizePage () {
      const mini = (this.pageWidth < 600) || this.isMobile
      return mini
    }
  }
}
</script>

<style soped lang="less">
  .search-button {
    cursor: pointer;
    user-select: none;
    transition: .4s ease;
  }

  .search-button:hover {
    filter: brightness(2) opacity(.9);
  }

  .search-button:active {
    filter: brightness(.9);
  }

  .search-input {
    font-size: 12px;
    padding: 0 10px;
    width: 70%;
  }

  .search-box {
    background-color: #FFFFFF;
    padding: 6px 8px;
    border-radius: 4px;
    margin: 0 6px;
    overflow: hidden;
    white-space:nowrap;
    width: 180px;
    transition: .4s ease;
  }

  .switcher-button {
    border: 1px solid orange;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    transition: .4s ease;
    margin: 0 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .switcher-button:hover {
    background-color:rgba(0, 0, 0, .015);
    filter: brightness(1.1) opacity(.9);
  }

  .switcher-button:active {
    background-color:rgba(0, 0, 0, .1);
    filter: brightness(.9);
  }

  .login-button {
    background-color: orange;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    transition: .4s ease;
    margin: 0 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-button:hover {
    filter: brightness(1.1);
  }

  .login-button:active {
    filter: brightness(.9);
  }

  #top-navbar-box {
    display: flex;
    align-items: center;
    background-color: #FAFAFA;
    padding: 0 10px;
    box-shadow: 0 2px 3px -1px rgba(223, 223, 223, .5);
    transition: .2s ease;
    width: 100%;
  }

  .top-navbar-must {
    position: relative;
    transform: scale3d(1, 1, 1);
  }

  .top-navbar-box-fixed {
    position: fixed;
    top: 0;
    z-index: 5;
  }

  #top-navbar-placeholder {
    padding: 0 10px;
    flex: 1;
  }

  #top-navbar-content {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .sidebar-open-control-button {
    margin-right: 20px;
    font-size: 18px;
    padding: 5px;
    cursor: pointer;
    transition: .4s ease;
    color: black;
    user-select: none;
  }

  .sidebar-open-control-button:hover {
    color: green;
  }

  .sidebar-open-control-button:active {
    color: red;
  }

  input::-webkit-input-placeholder {
    color: #D3D3D3;
  }

  input:-moz-placeholder {
    color: #D3D3D3;
  }

  input::-moz-placeholder {
    color: #D3D3D3;
  }

  input:-ms-input-placeholder {
    color: #D3D3D3;
  }

</style>
