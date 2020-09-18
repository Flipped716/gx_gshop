<template>
  <div class="app">
    <router-view></router-view>
    <footerguide v-show="$route.meta.showFooter"></footerguide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components: {
    footerguide: FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.app {
  widows: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>
