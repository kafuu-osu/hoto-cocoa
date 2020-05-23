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
        <div
          v-if="!miniSizePage"
          id="top-navbar-menu"
        >
          <div
            v-if="themeTopNavbarFixed"
            class="logo-box"
          >
            <div
              class="logo-box-content"
            >
              <div>
                <img
                  style="height: 50px; margin: 0 4px;"
                  src="@/assets/biglogo_min.png"
                >
              </div>
              <div style="transition: .2s ease; text-align: center; width: 90px;">
                osu!Kafuu
              </div>
            </div>
          </div>
          <!--div
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
          </div-->

          <div
            style="margin-left: auto;"
            @click="jumpTo('Switcher')"
            class="outline-button"
          >
            切换器
          </div>
          <div
            @click="jumpTo('Login')"
            class="primary-button"
          >
            sign in~
          </div>
        </div>
        <div
          v-else
          id="top-navbar-menu"
        >
          <div
            class="outline-button"
            style="margin-left: auto; font-size: 18px;"
            @click="openTopNavbarMenu"
          >
            <a-icon type="bars" />
          </div>
          <div
            v-show="openTopNavbarFixedMenu"
            id="top-navbar-fixed-menu"
            :style="`top: ${height + 1}px;`"
          >
            <div
              @click="jumpTo('Login')"
              class="top-navbar-fixed-menu-item"
            >
              注册 / 登录
            </div>
            <div
              @click="jumpTo('Switcher')"
              class="top-navbar-fixed-menu-item"
            >
              切换器
            </div>
            <div
              @click="jumpTo('Introduce')"
              class="top-navbar-fixed-menu-item"
            >
              介绍
            </div>
          </div>
          <div
            @click="openTopNavbarFixedMenu = false"
            v-show="openTopNavbarFixedMenu"
            class="top-navbar-fixed-menu-mask"
            :style="`top: ${height + 1}px; height: calc(100vh - ${height + 1}px);`"
          />
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
      default: 75
    }
  },
  data () {
    return {
      openSearchBox: true,
      openTopNavbarFixedMenu: false
    }
  },
  watch: {
    miniSizePage: {
      handler: function (val) {
        this.openSearchBox = !val
        this.openTopNavbarFixedMenu = false
      }
    }
  },
  methods: {
    jumpTo (name) {
      this.$router.push({ name: name })
      this.$store.commit('setThemeOpenSider', false)
    },
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

    },
    openTopNavbarMenu () {
      this.openTopNavbarFixedMenu = !this.openTopNavbarFixedMenu
    }
  },
  computed: {
    ...mapGetters(['themeOpenSider', 'pageWidth', 'isMobile', 'themeTopNavbarFixed']),
    topNavbarBoxClass () {
      return this.fixed ? 'top-navbar-box-fixed' : ''
    },
    topNavbarHeight () {
      return `height: ${this.height}px; `
    },
    miniSizePage () {
      const mini = (this.pageWidth < 700) || this.isMobile
      return mini
    }
  }
}
</script>

<style soped lang="less">
  .logo-box {
    height: 75px;
    /*box-shadow: 0px 2px 3px -1px rgba(223, 223, 223, .2);*/
    font-size: 16px;
    font-weight: bold;
    user-select: none;
    overflow: hidden;
    display: flex;
    justify-content: center;
    cursor: pointer;
    background-color: #3949AB;
  }

  .logo-box-content {
    display: flex;
    align-items: center;
  }

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
    background-color: #141414;
    padding: 6px 8px;
    border-radius: 4px;
    margin: 0 6px;
    overflow: hidden;
    white-space:nowrap;
    width: 180px;
    transition: .4s ease;
    border: 1px solid #FAFAFA;
  }

  .outline-button {
    border: 1px solid orange;
    padding: 8px 14px;
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

  .outline-button:hover {
    background-color:rgba(0, 0, 0, .015);
    filter: brightness(1.1) opacity(.9);
  }

  .outline-button:active {
    background-color:rgba(0, 0, 0, .1);
    filter: brightness(.9);
  }

  .primary-button {
    background-color: orange;
    padding: 8px 14px;
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

  .primary-button:hover {
    filter: brightness(1.1);
  }

  .primary-button:active {
    filter: brightness(.9);
  }

  #top-navbar-box {
    display: flex;
    align-items: center;
    background-color: #3949AB;
    padding: 0 10px;
    /*box-shadow: 0 2px 3px -1px rgba(223, 223, 223, .5);*/
    width: 100%;
  }

  .top-navbar-box-fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
  }

  .top-navbar-fixed-menu-item {
    padding: 14px;
    transition: .2s ease;
    border-radius: 4px;
    user-select: none;
    cursor: pointer;
    background-color: rgba(0, 0, 0, .015);
    margin: 10px 0;
  }

  .top-navbar-fixed-menu-item:hover {
    filter: brightness(1.1);
  }

  .top-navbar-fixed-menu-item:active {
    filter: brightness(.9);
  }

  #top-navbar-fixed-menu {
    position: absolute;
    width: 100%;
    left: 0;
    background-color: #141414;
    transition: .4s ease;
    padding: 10px;
    z-index: 15;
    border-bottom: 1px solid rgba(0, 0, 0, .02);
    box-shadow: 0 2px 3px -1px rgba(223, 223, 223, .5);
  }

  .top-navbar-fixed-menu-mask {
    width: 100%;
    position: fixed;
    left: 0;
    background-color: rgba(0,0,0,0.7);
    user-select: none;
    cursor: pointer;
    z-index: 10;
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

  #top-navbar-menu {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  .sidebar-open-control-button {
    margin-right: 20px;
    font-size: 18px;
    padding: 5px;
    cursor: pointer;
    transition: .4s ease;
    color: #FAFAFA;
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
