<template>
  <section class="content blog" contenteditable="true" spellcheck="false">
    <div>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <ul>
        <li v-for="tech in technologies" :key="tech">
          {{ tech }}
        </li>
      </ul>
      <hr>
      <div v-html="$md.render(post)" />
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
        'content_type': 'blogPost',
        'fields.slug[in]': params.project
      })
    ]).then(([blogs]) => {
      const thisBlog = blogs.items[0]
      return {
        title: thisBlog.fields.title,
        description: thisBlog.fields.description,
        technologies: thisBlog.fields.technologies,
        post: thisBlog.fields.post.replace('<a', '<a contenteditable="false"')
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

<style>
</style>
