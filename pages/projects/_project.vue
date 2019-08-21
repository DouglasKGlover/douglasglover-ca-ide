<template>
  <section class="content project" contenteditable="true" spellcheck="false">
    <div>
      <h2>{{ projectTitle }}</h2>
      <ul contenteditable="false">
        <li v-for="tech in technologies" :key="tech">
          {{ tech }}
        </li>
      </ul>
      <hr>
      <div v-html="$md.render(projectPost)" />
    </div>
  </section>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return Promise.all([
      client.getEntries({
        'content_type': 'project',
        'fields.slug[in]': params.project
      })
    ]).then(([projects]) => {
      const thisProject = projects.items[0]
      return {
        projectTitle: thisProject.fields.title,
        technologies: thisProject.fields.technologies,
        projectPost: thisProject.fields.post.replace('<a', '<a contenteditable="false"')
      }
    }).catch()
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

<style lang="scss">
</style>
