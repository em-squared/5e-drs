<template>
  <div>
    <Breadcrumb />
    <Page></Page>
  </div>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb'
import Page from '@theme/components/Page'

export default {
  name: 'Layout',

  components: {
    Breadcrumb,
    Page
  },

  computed: {
  },

  methods: {
    setRightDrawer () {
      this.$store.commit('setDrawer', this.$vuetify.breakpoint.lgAndUp)
      this.$store.commit('setHasRightDrawer', false)
      this.$store.commit('setRightDrawer', false)
      this.$store.commit('setInRightDrawer', null)

      if (this.$page.headers && this.$page.headers.length > 0 && this.$page.frontmatter.toc !== false) {
        this.$store.commit('setHasRightDrawer', true)
        this.$store.commit('setRightDrawer', this.$vuetify.breakpoint.lgAndUp)
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
