<template>
  <transition name="slide-fade">
    <div v-if="show">
      <div
        v-if="fixed"
        id="sider-layout-placeholder"
        :style="mini ? 'width: 0px;' : siderLayoutWidth"
      />
      <div
        id="sider-layout-box"
        :style="siderLayoutWidth"
        :class="siderLayoutBoxClass"
      >
        <div id="sider-layout-content">
          <div id="logo-box">
            <div id="logo-box-content">
              <div>
                <img
                  style="height: 50px; margin: 0 4px;"
                  src="@/assets/biglogo_min.png"
                >
              </div>
              <div
                style="transition: .2s ease; text-align: center;"
                :style="logoTextStyle"
              >
                osu!Kafuu
              </div>
            </div>
          </div>
          <div id="sider-menu-box">
            <div
              v-for="(item, idx) in menus"
              :key="idx"
              class="sider-menu-item"
              @click="jumpTo(item.name)"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import pages from '@/router/pages'

export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    },
    mini: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      menus: pages.filter(item => item.show === true)
    }
  },
  methods: {
    jumpTo (name) {
      this.$router.push({ name: name })
    }
  },
  computed: {
    siderLayoutBoxClass () {
      return this.fixed ? 'sider-layout-box-fixed' : 'sider-layout-box-common'
    },
    siderLayoutWidth () {
      return `width: ${this.boxWidth}px;`
    },
    boxWidth () {
      const width = (this.open ? 210 : this.mini ? 0 : 70)
      this.$store.commit('setThemeSiderWidth', this.mini ? 0 : width)
      return width
    },
    logoTextStyle () {
      return this.open ? 'opacity: 1; width: 90px;' : 'opacity: 0; width: 0;'
    }
  }

}
</script>

<style scoped>

#sider-layout-box {
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: #fafafa;
  transition: .4s ease;
  overflow: hidden;
  box-shadow: 2px 0 3px -1px rgba(0, 0, 0, .1);
}

.sider-layout-box-fixed {
  position: fixed;
  top: 0;
  z-index: 7;
}

.sider-layout-box-common {
  position: relative;
  top: 0;
  z-index: 7;
}

#sider-layout-placeholder {
  height: 100%;
  transition: .4s ease;
}

#sider-layout-content {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#logo-box {
  width: 100%;
  height: 60px;
  box-shadow: 0px 2px 3px -1px rgba(223, 223, 223, .2);
  font-size: 16px;
  font-weight: bold;
  user-select: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

#sider-menu-box {
  width: 100%;
  flex: 1;
  padding: 10px 0;
  font-size: 14px;
  user-select: none;
  overflow: hidden;
  text-align: center;
}

.sider-menu-item {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .4s ease;
  cursor: pointer;
  min-width: 70px;
}

.sider-menu-item:hover {
  background-color: green;
}

.sider-menu-item:active {
  background-color: blue;
}

#logo-box-content {
  display: flex;
  align-items: center;
}

.slide-fade-enter-active {
  transition: all .2s ease;
}

.slide-fade-leave-active {
  transition: all .2s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  width: 0;
}
</style>
