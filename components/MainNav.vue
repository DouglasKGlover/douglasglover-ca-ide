<template>
  <nav id="main-nav">
    <ul>
      <li>
        <nuxt-link to="/" exact>Home</nuxt-link>
      </li>
      <li v-if="$nuxt.$store.state.projects">
        <nuxt-link to="/projects"><Arrow /> Projects</nuxt-link>
        <ul>
          <li v-for="(project, index) in $nuxt.$store.state.projects" :key="index">
            <nuxt-link v-bind:to="'/projects/' + project.fields.slug">{{ project.fields.title }}</nuxt-link>
          </li>
        </ul>
      </li>
      <li v-if="$nuxt.$store.state.blogs">
        <nuxt-link to="/blog"><Arrow /> Blog</nuxt-link>
        <ul>
          <li v-for="(blog, index) in $nuxt.$store.state.blogs" :key="index">
            <nuxt-link v-bind:to="'/blog/' + blog.fields.slug">{{ blog.fields.title }}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import Arrow from '~/assets/img/arrow.svg'

export default {
  components: {
    Arrow
  }
}
</script>
