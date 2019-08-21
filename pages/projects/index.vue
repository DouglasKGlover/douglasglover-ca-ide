<template>
  <div class="content">
    <h1>My projects:</h1>
    <p v-for="project in projects" :key="project.fields.title">
      <nuxt-link :to="'/projects/'+project.fields.slug" exact>{{ project.fields.title }}</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    projects () {
      return this.$store.state.projects
    },
    blogs () {
      return this.$store.state.blogs
    }
  },
  async fetch ({ store, params }) {
    await store.dispatch('getProjects')
    await store.dispatch('getBlogs')
  }
}
</script>
