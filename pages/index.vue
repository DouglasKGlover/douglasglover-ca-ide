<template>
  <div class="container">
    <div>
      <h2>Projects:</h2>
      <ul>
        <li v-for="project in projects" :key="project.fields.title">
          {{ project.fields.title }}
        </li>
      </ul>
      <h2>Blogs:</h2>
      <ul>
        <li v-for="blog in blogs" :key="blog.fields.title">
          {{ blog.fields.title }}
        </li>
      </ul>
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
