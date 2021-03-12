<template>
  <main class="page content">

    <Content class="content" />

  </main>
</template>

<script>
import { handleTooltips } from '@theme/util'
export default {
  name: 'Page',
  components: { },
  mounted () {
    setTimeout(function () {
      handleTooltips()
    }, 100);
    this.$router.afterEach(() => {
      setTimeout(function () {
        handleTooltips()
      }, 100)
    })
  }
}
</script>

<style>
</style>
