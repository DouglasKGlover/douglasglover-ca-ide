<template>
  <div class="project-thumb">
    <h3>{{ title }}</h3>
    <n-link :to="'/projects/'+slug">
      <img :src="thumbnailImage" :alt="title">
    </n-link>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'slug',
    'thumbnailImage'
  ]
}
</script>
