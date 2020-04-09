<template>
  <main class="page content">

    <div class="theme-default-content">
      <h1>{{ $page.title }}</h1>
      <div class="magic-item-details">
        <span>{{ $page.frontmatter.type }}</span>
        <span v-if="$page.frontmatter.subtype"> ({{ $page.frontmatter.subtype }})</span>
        <span>, {{ $page.frontmatter.rarity }}</span>
        <span v-if="$page.frontmatter.attunement"> ({{ $page.frontmatter.attunement }})</span>
      </div>
    </div>

    <Content class="mt-4" />

    <p v-if="$page.frontmatter.source" class="source">Source : <em>{{ $page.frontmatter.source }}</em></p>

  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
</style>
