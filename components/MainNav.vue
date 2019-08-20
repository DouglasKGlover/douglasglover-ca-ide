<template>
    <nav id="main-nav">
        <ul>
            <li>
                <nuxt-link to="/" exact>Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/projects"><Arrow /> Projects</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/blog"><Arrow /> Blog</nuxt-link>
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
