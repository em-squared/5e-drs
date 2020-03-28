<template>
  <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
    <v-app-bar-nav-icon @click.stop="setDrawer" />
    <v-toolbar-title class="ml-0 mr-4 pl-4">
      <v-btn class="hidden-sm-and-down site-title" text link :to="{ path: '/' }">{{ $site.title }}</v-btn>
    </v-toolbar-title>
    <SRDSearchBox v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
    <!-- <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search" class="hidden-sm-and-down" /> -->
    <v-spacer />
  </v-app-bar>
</template>

<script>
import SRDSearchBox from '@theme/components/search/SRDSearchBox.vue'
// import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Navbar',

  components: {
    // NavLinks,
    SRDSearchBox
  },

  data () {
    return {
    }
  },

  computed: {
    drawer() {
      return this.$store.state.drawer
    }
  },

  methods: {
    setDrawer () {
      this.$store.commit('setDrawer', !this.$store.state.drawer)
    }
  }
}
</script>

<style lang="scss">
  .site-title.theme--dark.v-btn--active:before {
    opacity: 0;
  }
</style>
