<template>
  <div class="container">
    <div>
      <h2>{{ projectTitle }}</h2>
      <ul>
        <li v-for="tech in technologies" :key="tech">
          {{ tech }}
        </li>
      </ul>
      <div v-html="projectPost" />
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
        'content_type': 'project',
        'fields.slug[in]': params.project
      })
    ]).then(([projects]) => {
      const thisProject = projects.items[0]
      const postOptions = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) =>
            `<img src="${fields.file.url}" alt="${fields.description}"/>`,
          [INLINES.ENTRY_HYPERLINK]: ({ data: { target: { fields } } }) =>
            `<a href="/projects/${fields.slug}">${fields.title}</a>`
        }
      }
      return {
        projectTitle: thisProject.fields.title,
        technologies: thisProject.fields.technologies,
        projectPost: documentToHtmlString(thisProject.fields.post, postOptions)
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
ul{
  padding: 0;
  margin: 1em 0;
}
li{
  display: inline-block;
  background: rgba(0,0,0,0.05);
  padding: 0 10px;
  border-radius: 3px;
  font-size: .9em;
  margin: 0 2px;
}
</style>
