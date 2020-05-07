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
                  style="height: 40px; margin: 0 4px;"
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
          <div>
            zzz
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
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
  computed: {
    siderLayoutBoxClass () {
      return this.fixed ? 'sider-layout-box-fixed' : 'sider-layout-box-common'
    },
    siderLayoutWidth () {
      return `width: ${this.boxWidth}px; opacity: ${this.boxOpacity};`
    },
    boxWidth () {
      return this.open ? 220 : this.mini ? 0 : 70
    },
    boxOpacity () {
      return this.open ? 1 : this.mini ? 0.8 : 1
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
  box-shadow: 2px 0 4px rgba(223, 223, 223, .5);
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
  padding: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#logo-box {
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  user-select: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
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
