<template>
  <div class="container">
    <div>
      <h1 class="title">
        Projects
      </h1>
      <h2 class="subtitle">
        My projects page
      </h2>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(["projects"])
  },
  mounted() {
    this.$store.dispatch('getSha');
  }
}
</script>

<style lang="scss" scoped></style>
