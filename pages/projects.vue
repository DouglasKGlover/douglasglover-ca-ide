<template>
  <div class="container">
    <div>
      <h1 class="title">
        Projects
      </h1>
      <h2 class="subtitle">
        My projects page
      </h2>
      <!-- <div v-for="project in projects" :key="project.id">
        <h3><a :href="project.html_url" target="_blank">{{ project.name }}</a></h3>
        <p>{{ project.stargazers_count }}</p>
        <p>{{ project.homepage }}</p>
        <p>{{ project.description }}</p>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(["projects"]),
    // ...mapState(["repo"])
  },
  mounted() {
    this.$store.dispatch('getProjects');
  }
}
</script>

<style lang="scss" scoped></style>
