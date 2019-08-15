<template>
  <div class="container">
    <div>
      <h2>{{ projectTitle }}</h2>
      <ul>
        <li v-for="tech in technologies" :key="tech">
          {{ tech }}
        </li>
      </ul>
      <div v-html="$md.render(projectPost)" />
    </div>
  </div>
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
        projectPost: thisProject.fields.post
      }
    }).catch()
  }
}
</script>

<style>
</style>
