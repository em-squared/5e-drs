<template>
  <div class="404 d-flex align-center flex-column">
    <h1>404</h1>
    <p>Oh, il semble que vous ayez fait fausse route...</p>
    <router-link :to="{ path: '/' }">Retourner sur la voie</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>
