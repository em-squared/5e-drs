<template>
  <div class="spells">
    <div v-for="page in pages" :key="page.key">
      {{ page.title }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$pagination.pages
    }
  }
}
</script>

<style>
</style>
