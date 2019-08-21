<template>
    <header>
      <ul>
        <li><Logo /></li>
        <li><n-link to="">File</n-link></li>
        <li><n-link to="">Edit</n-link></li>
        <li><n-link to="">Selection</n-link></li>
        <li><n-link to="">View</n-link></li>
        <li><n-link to="">Go</n-link></li>
        <li><n-link to="">Debug</n-link></li>
        <li><n-link to="">Terminal</n-link></li>
        <li><n-link to="">Help</n-link></li>
      </ul>
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
