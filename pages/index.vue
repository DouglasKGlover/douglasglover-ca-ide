<template>
  <section class="content" contenteditable="true" spellcheck="false">
    <h1>I'm Douglas Glover</h1>
    <h3>A Toronto-based Freelance Web Developer</h3>
    <p>I'm not an author or a cameraman or a style consultant (in fact I suggest against asking me for clothing suggestions)...</p>
    <p>But I do sure like the internet and video games, and so I surround myself with 'em. In fact I love coding so much I've designed my site here based on the programs I use to code with as a way to share with you my view of the world. Go ahead, click over here and get typing.</p>
  </section>
</template>

<script>
export default {
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
