<template>
  <section class="content blog" contenteditable="true" spellcheck="false">
    <div>
      <h2>{{ title }}</h2>
      <ul>
        <li v-for="tech in technologies" :key="tech">
          {{ tech }}
        </li>
      </ul>
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
        technologies: thisBlog.fields.technologies,
        post: thisBlog.fields.post.replace('<a', '<a contenteditable="false"')
      }
    }).catch()
  }
}
</script>

<style>
</style>
