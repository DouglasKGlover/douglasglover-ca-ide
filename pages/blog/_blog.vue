<template>
  <div class="container">
    <div>
      <h2>{{ blogTitle }}</h2>
      <ul>
        <li v-for="tech in technologies" :key="tech">
          {{ tech }}
        </li>
      </ul>
      <div v-html="blogPost" />
    </div>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return Promise.all([
      client.getEntries({
        'content_type': 'blogPost',
        'fields.slug[in]': params.blog
      })
    ]).then(([blog]) => {
      const thisblog = blog.items[0]
      const postOptions = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) =>
            `<img src="${fields.file.url}" alt="${fields.description}"/>`,
          [INLINES.ENTRY_HYPERLINK]: ({ data: { target: { fields } } }) =>
            `<a href="/blogs/${fields.slug}">${fields.title}</a>`
        }
      }
      return {
        blogTitle: thisblog.fields.title,
        technologies: thisblog.fields.technologies,
        blogPost: documentToHtmlString(thisblog.fields.post, postOptions)
      }
    }).catch()
  }
}
</script>

<style>
img{
  width: 200px;
}
code{
  color: red;
}
p{
  margin-bottom: 1em;
}
</style>
