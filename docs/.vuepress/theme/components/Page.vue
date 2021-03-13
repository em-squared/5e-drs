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
    let self = this
    setTimeout(function () {
      handleTooltips({pages:self.$site.pages})
    }, 100);
    this.$router.afterEach(() => {
      setTimeout(function () {
        handleTooltips({pages:self.$site.pages})
      }, 100)
    })
  }
}
</script>

<style>
</style>
