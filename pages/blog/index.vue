<template>
  <div class="content blog">
    <h1>My blog posts:</h1>
    <nuxt-link v-for="blog in blogs" :key="blog.fields.title" :to="'/blog/'+blog.fields.slug" exact>
      <h3>{{ blog.fields.title }}</h3>
      <p>{{ blog.fields.description }}</p>
    </nuxt-link>
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
