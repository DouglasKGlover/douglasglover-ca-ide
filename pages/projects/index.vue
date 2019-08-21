<template>
  <div class="content">
    <h1>My projects:</h1>
    <p v-for="(project, index) in projects" :key="index">
      <ProjectThumb :title="project.fields.title" :slug="project.fields.slug" :thumbnailImage="project.fields.thumbnailImage" />
    </p>
  </div>
</template>

<script>
import ProjectThumb from '~/components/ProjectThumb.vue'

export default {
  components: {
    ProjectThumb
  },
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
