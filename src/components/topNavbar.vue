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
        你好
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 50
    }
  },
  mounted () {
    this.isMounted = true
  },
  computed: {
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
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
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
  }

</style>
