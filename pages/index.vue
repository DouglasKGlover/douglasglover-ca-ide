<template>
  <div class="container">
    <div>
      <h2>Projects:</h2>
        <p v-for="project in projects" :key="project.fields.title">
          {{ project.fields.title }}
        </p>
      <h2>Blogs:</h2>
        <p v-for="blog in blogs" :key="blog.fields.title">
          {{ blog.fields.title }}
        </p>
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  asyncData ({ env }) {
    return Promise.all([
      client.getEntries({
        'content_type': 'project'
      }),
      client.getEntries({
        'content_type': 'blogPost'
      })
    ]).then(([projects, blogs]) => {
      return {
        projects: projects.items,
        blogs: blogs.items
      }
    }).catch()
  }
}
</script>

<style>
</style>
