<template>
  <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" :clipped-right="$vuetify.breakpoint.lgAndUp" app color="#563f5a" dark>
    <v-app-bar-nav-icon @click.stop="setDrawer" />
    <v-toolbar-title class="ml-0 mr-4 pl-4">
      <v-btn class="hidden-sm-and-down site-title" text link :to="{ path: '/' }"><img src="/dragon_blanc.svg" />&nbsp;{{ $site.title }}</v-btn>
    </v-toolbar-title>
    <SRDSearchBox v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
    <!-- <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search" class="hidden-sm-and-down" /> -->
    <v-spacer />
    <v-btn @click.stop="setRightDrawer" icon v-if="hasRightDrawer">
      <v-icon>{{ rightDrawerIcon }}</v-icon>
    </v-btn>
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
    },
    rightDrawer() {
      return this.$store.state.rightDrawer
    },
    hasRightDrawer() {
      return this.$store.state.hasRightDrawer
    },
    inRightDrawer() {
      return this.$store.state.inRightDrawer
    },
    rightDrawerIcon() {
      if (this.inRightDrawer == 'pageToc') {
        return 'mdi-format-list-bulleted'
      } else if (this.inRightDrawer == 'spellFilters' || this.inRightDrawer == 'magicItemFilters') {
        return 'mdi-filter-variant'
      }
      return 'mdi-menu'
    }
  },

  methods: {
    setDrawer () {
      this.$store.commit('setDrawer', !this.$store.state.drawer)
    },
    setRightDrawer () {
      this.$store.commit('setRightDrawer', !this.$store.state.rightDrawer)
    }
  },

  mounted () {
    this.$store.commit('setDrawer', this.$vuetify.breakpoint.lgAndUp)
  }
}
</script>

<style lang="scss">
  .site-title.theme--dark.v-btn--active:before {
    opacity: 0;
  }
</style>
