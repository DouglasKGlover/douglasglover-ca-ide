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
      return this.$store.state.contentful.projects
    },
    blogs () {
      return this.$store.state.contentful.blogs
    }
  },
  async fetch ({ store, params }) {
    await store.dispatch('contentful/getProjects')
    await store.dispatch('contentful/getBlogs')
  }
}
</script>
