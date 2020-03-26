<template>
  <main class="page">
    <div class="theme-default-content">
      <h1>{{ $page.title }}</h1>
    </div>
    <Content />

  </main>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
