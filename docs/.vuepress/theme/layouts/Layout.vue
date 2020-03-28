<template>
  <div>
    <Home v-if="$page.frontmatter.home" />

    <Page v-else>
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>
  </div>
</template>

<script>

export default {
  name: 'Layout',

  components: {
  },

  computed: {
  }
}
</script>
