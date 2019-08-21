<template>
  <section class="content" contenteditable="true" spellcheck="false">
    <ul v-if="projects">
        <li v-for="(project, index) in projects" :key="index">
          {{project.fields.title}}
        </li>
    </ul>
    <ul v-if="blogs">
        <li v-for="(blog, index) in blogs" :key="index">
          {{blog.fields.title}}
        </li>
    </ul>
  </section>
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
