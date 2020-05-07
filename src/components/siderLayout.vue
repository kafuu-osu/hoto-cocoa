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
          <div id="logo-box" />
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
      return `width: ${this.boxWidth}px;`
    },
    boxWidth () {
      return this.open ? 220 : this.mini ? 0 : 70
    }
  }

}
</script>

<style scoped>

#sider-layout-box {
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: green;
  transition: .4s ease;
  overflow: hidden;
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
}

#logo-box {
  background-color: blue;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
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
