<template>
  <section class="content" contenteditable="true" spellcheck="false">
    <h1>I'm Douglas Glover</h1>
    <h2>A Toronto-based Freelance Web Developer</h2>
    <p>With over 5 years of agency experience I've had a chance to work with some pretty cool brands: Pepsi, Doritos, Lay's, Mercedes Benz, and the Paralympics to name a few. Campaign sites and contests have been my bread and butter, and building interactive experiences on the web is some of the most fun I've had.</p>
    <p>Simply stated, I love the internet and video games. </p>

    <h3>Projects</h3>
    <p>Here are a few of the projects I've worked on that I'm especially proud of. Click <n-link to="/projects">here</n-link> to see more!</p>

    <ProjectThumb title="ShmupSpeed" slug="shmupspeed" thumbnailImage="https://douglasglover-ca.s3.amazonaws.com/projects/thumb-shmupspeed.png" />

    <h3>Video Games?</h3>
    <p>Yep. I'm a collector and a creator; I've even produced video games for the original Nintendo Entertainment System for charity (check out my <n-link to="/projects/shmupspeed">ShmupSpeed</n-link>&nbsp;project)! I'd jump at the opportunity to work on gaming related websites; toss me an email!</p>

    <h3>Contact Me</h3>
    <p>If you want to get in touch just fill out the form below and I'll get back to you, often scarily fast.</p>
  </section>
</template>

<script>
import ProjectThumb from '~/components/ProjectThumb.vue'

export default {
  components: {
    ProjectThumb
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
