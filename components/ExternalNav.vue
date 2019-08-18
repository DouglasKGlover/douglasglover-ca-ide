<template>
    <nav id="external-nav">
        <ul>
            <li>
                <nuxt-link to="/" exact>
                    <HomeIcon />
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import HomeIcon from '~/assets/img/navicon-home.svg'

export default {
  components: {
    HomeIcon
  }
}
</script>
