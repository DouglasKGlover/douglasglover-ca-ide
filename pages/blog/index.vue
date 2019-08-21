<template>
  <div class="content">
    <h1>My blog posts:</h1>
    <p v-for="blog in blogs" :key="blog.fields.title">
      <nuxt-link :to="'/blog/'+blog.fields.slug" exact>{{ blog.fields.title }}</nuxt-link>
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
