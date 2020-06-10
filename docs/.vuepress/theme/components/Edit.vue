<template>
  <div class="d-print-none" v-if="reposity && !$page.frontmatter.notEditable">
    <v-divider class="my-4"/>
    <v-btn link depressed :href="source" target="_blank" color="accent" outlined><v-icon left>mdi-pencil</v-icon> Corriger</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Edit',

  computed: {
    reposity () {
      return this.$site.themeConfig.repository
    },
    source () {
      return this.reposity + '/tree/master/docs' + this.$route.path + 'README.md'
    }
  }
}
</script>

<style lang="scss">
</style>
