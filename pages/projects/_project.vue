<template>
  <div class="container">
    <div>
      <h2>{{ project.fields.title }}</h2>
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
import { BLOCKS } from '@contentful/rich-text-types'
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
            `<img src="${fields.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`
        }
      }
      return {
        project: thisProject,
        technologies: thisProject.fields.technologies,
        projectPost: documentToHtmlString(thisProject.fields.post, postOptions)
      }
    }).catch()
  }
}
</script>

<style>
</style>
