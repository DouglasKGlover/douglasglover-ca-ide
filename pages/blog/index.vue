<template>
  <div class="container">
    <h1>My blog posts:</h1>
    <p v-for="blog in blogs" :key="blog.fields.title">
      <nuxt-link :to="'/blog/'+blog.fields.slug" exact>{{ blog.fields.title }}</nuxt-link>
    </p>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  asyncData ({ env }) {
    return Promise.all([
      client.getEntries({
        'content_type': 'blogPost'
      })
    ]).then(([blogs]) => {
      return {
        blogs: blogs.items
      }
    }).catch()
  }
}
</script>

<style>
</style>
