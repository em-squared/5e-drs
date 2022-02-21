<template>
  <div>
    {{contents}}
  </div>
</template>

<script>
export default {
  name: 'HomeTableOfContents',

  data () {
    return {
      contents: null
    }
  },

  mounted () {
    console.log(this.$site.themeConfig)
    this.contents = this.$site.themeConfig.sidebar
  }
}
</script>
