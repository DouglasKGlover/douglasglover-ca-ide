<template>
  <section class="content" contenteditable="true" spellcheck="false">
    <div>
      <h2><nuxt-link to="/projects" exact>Projects</nuxt-link></h2>
      <div v-for="project in projects" :key="project.fields.title">
        <p>
          <nuxt-link :to="'/projects/'+project.fields.slug" exact>{{ project.fields.title }}</nuxt-link>
        </p>
      </div>
      <h2><nuxt-link to="/blog" exact>Blog</nuxt-link></h2>
      <p v-for="blog in blogs" :key="blog.fields.title">
        <nuxt-link :to="'/blog/'+blog.fields.slug" exact>{{ blog.fields.title }}</nuxt-link>
      </p>
    </div>
  </section>
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
