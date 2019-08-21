<template>
  <aside id="subheader">
    <nuxt-link to="/" exact>douglasglover.ca</nuxt-link>&nbsp;<span v-html="WaterfallNav"></span>
  </aside>
</template>

<script>
export default {
  computed: {
    WaterfallNav () {
      const waterfall = this.$route.fullPath.split('/')
      let output = ''
      let currentBase = ''
      for (const i in waterfall) {
        if (waterfall[i] !== '') {
          currentBase += '/' + waterfall[i]
          output += ' > ' + '<a href="' + currentBase + '">' + waterfall[i] + '</a>'
        }
      }
      return output
    }
  }
}
</script>
