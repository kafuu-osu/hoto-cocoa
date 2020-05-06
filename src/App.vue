<template>
  <div id="app">
    <div id="main">
      <sider-layout :fixed="true" />
      <main-layout class="main-layout" />
    </div>
  </div>
</template>

<script>
import mainLayout from '@/components/mainLayout'
import siderLayout from '@/components/siderLayout'

export default {
  components: {
    mainLayout,
    siderLayout
  }

}
</script>

<style>
 html,body{
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>

<style scoped>

#app {
  font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

#main {
  display: flex;
  height: 100%;
}

.main-layout {
  flex: 1;
}

</style>
