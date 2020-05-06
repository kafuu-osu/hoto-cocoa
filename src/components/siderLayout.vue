<template>
  <div>
    <div
      v-if="fixed"
      id="sider-layout-placeholder"
      :style="siderLayoutWidth"
    />
    <div
      id="sider-layout-box"
      :style="siderLayoutWidth"
      :class="siderLayoutBoxClass"
    >
      <div id="sider-layout-content">
        你好
        <a-button
          @click="show = !show"
          type="primary"
        >
          按我
        </a-button>
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
    }
  },
  data () {
    return {
      show: true
    }
  },
  computed: {
    siderLayoutBoxClass () {
      return this.fixed ? 'sider-layout-box-fixed' : ''
    },
    siderLayoutWidth () {
      return `width: ${this.boxWidth}px;`
    },
    boxWidth () {
      return this.show ? 220 : 0
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
  z-index: 5;
}

#sider-layout-placeholder {
    height: 100%;
    transition: .4s ease;
}

#sider-layout-content {
  width: 100%;
  padding: 10px;
}

</style>
