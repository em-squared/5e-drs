<template>
  <main class="page content">

    <div class="theme-default-content">
      <h1>{{ $page.title }}</h1>
      <div class="magic-item-details">
        {{displayItemMeta()}}
      </div>
    </div>

    <Content class="mt-4" />

    <p v-if="$page.frontmatter.source" class="source">Source : <em>{{ $page.frontmatter.source }}</em></p>

  </main>
</template>

<script>
import {displayItemMeta} from '@theme/util/magicItemHelpers'

export default {
  methods : {
    displayItemMeta () {
      return displayItemMeta(this.$page.frontmatter)
    }
  }
}
</script>

<style lang="scss">
</style>
