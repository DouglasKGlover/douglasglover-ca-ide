<template>
  <div class="container">
    <div>
      <h2>Projects:</h2>
      <div v-for="project in projects" :key="project.fields.title">
        <p>
          <nuxt-link :to="'/projects/'+project.fields.slug" exact>{{ project.fields.title }}</nuxt-link>
        </p>
        <ul>
          <li v-for="tech in project.fields.technologies" :key="tech">
            {{ tech }}
          </li>
        </ul>
      </div>
      <h2>Blogs:</h2>
        <p v-for="blog in blogs" :key="blog.fields.title">
          <nuxt-link :to="'/blog/'+blog.fields.slug" exact>{{ blog.fields.title }}</nuxt-link>
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
