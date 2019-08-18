<template>
    <header>
        <Logo /> &nbsp;File Edit Selection View Go Debug Terminal Help &nbsp; &nbsp; douglasglover.ca {{$nuxt.$route.path.split('/').join(' > ')}}
    </header>
</template>

<script>
import Logo from '~/assets/img/logo.svg'

export default {
  components: {
    Logo
  }
}
</script>
