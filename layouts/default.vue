<template>
  <main id="site-container">
    <Header />
    <Subheader />
    <ExternalNav />
    <MainNav />
    <nuxt />
    <Terminal />
  </main>
</template>

<script>
import Header from '~/components/Header.vue'
import Subheader from '~/components/Subheader.vue'
import ExternalNav from '~/components/ExternalNav.vue'
import MainNav from '~/components/MainNav.vue'
import Terminal from '~/components/Terminal.vue'

export default {
  components: {
    Header,
    Subheader,
    ExternalNav,
    MainNav,
    Terminal
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
