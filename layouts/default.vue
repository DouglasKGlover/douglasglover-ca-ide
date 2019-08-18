<template>
  <div id="site-container">
    <Header />
    <ExternalNav />
    <MainNav />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import ExternalNav from '~/components/ExternalNav.vue'
import MainNav from '~/components/MainNav.vue'

export default {
  components: {
    Header,
    ExternalNav,
    MainNav
  }
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
