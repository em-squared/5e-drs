<template>
  <div>
    <Page></Page>
  </div>
</template>

<script>
import Page from '@theme/components/Page.vue'

export default {
  name: 'Layout',

  components: {
    Page
  },

  computed: {
  },

  methods: {
    setRightDrawer () {
      this.$store.commit('setHasRightDrawer', false)
      this.$store.commit('setRightDrawer', false)
      this.$store.commit('setInRightDrawer', null)

      if (this.$page.headers && this.$page.headers.length > 0 && this.$page.frontmatter.toc !== false) {
        this.$store.commit('setHasRightDrawer', true)
        this.$store.commit('setRightDrawer', true)
        this.$store.commit('setInRightDrawer', 'pageToc')
      }
    }
  },

  watch: {
    $route (id) {
      this.setRightDrawer()
    }
  },

  mounted () {
    this.setRightDrawer()
  }
}
</script>
