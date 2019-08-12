<template>
  <div class="container">
    <nuxt-link to="/" exact>Home</nuxt-link>
    <h1>My projects:</h1>
    <p v-for="project in projects" :key="project.fields.title">
      <nuxt-link :to="'/projects/'+project.fields.slug" exact>{{ project.fields.title }}</nuxt-link>
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
        'content_type': 'project'
      })
    ]).then(([projects]) => {
      return {
        projects: projects.items
      }
    }).catch()
  }
}
</script>

<style>
</style>
