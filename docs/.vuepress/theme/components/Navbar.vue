<template>
  <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" :clipped-right="$vuetify.breakpoint.lgAndUp" :hide-on-scroll="$vuetify.breakpoint.mdAndDown" scroll-threshold="60" app color="#435a3f" dark>
    <v-app-bar-nav-icon @click.stop="setDrawer" />
    <v-toolbar-title class="ml-0 mr-4 pl-4">
      <v-btn class="hidden-sm-and-down site-title" text link :to="{ path: '/' }"><span class="icon-bookmark brand-logo"></span>&nbsp;{{ $site.title }}</v-btn>
    </v-toolbar-title>
    <v-spacer class="hidden-sm-and-down" />
    <SRDSearchBox v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
    <v-spacer class="hidden-sm-and-down" />
    <v-btn class="hidden-sm-and-down" @click.stop="setIsThemeDark" icon>
      <v-icon v-html="$vuetify.theme.dark ? 'mdi-brightness-4' : 'mdi-brightness-7'"></v-icon>
    </v-btn>
    <v-btn class="hidden-sm-and-down" link :to="{path: '/a-propos/'}" icon>
      <v-icon>mdi-information</v-icon>
    </v-btn>
    <v-btn class="hidden-sm-and-down" v-if="$site.themeConfig.kofi" @click.stop="toggleSupportDialog" icon>
      <v-icon class="glowing-gold">mdi-glass-mug-variant</v-icon>
    </v-btn>
    <v-btn class="ml-5" @click.stop="setRightDrawer" icon v-if="hasRightDrawer">
      <v-icon>{{ rightDrawerIcon }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import SRDSearchBox from '@theme/components/search/SRDSearchBox.vue'

export default {
  name: 'Navbar',

  components: {
    // NavLinks,
    SRDSearchBox
  },

  data () {
    return {
      aboutDialog: false
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
      } else if (this.inRightDrawer == 'spellFilters' || this.inRightDrawer == 'monsterFilters' || this.inRightDrawer == 'magicItemFilters') {
        return 'mdi-filter'
      }
      return 'mdi-menu'
    },
    isOpenAboutDialog() {
      return this.$store.state.isOpenAboutDialog
    }
  },

  methods: {
    setDrawer () {
      this.$store.commit('setDrawer', !this.$store.state.drawer)
    },
    setRightDrawer () {
      this.$store.commit('setRightDrawer', !this.$store.state.rightDrawer)
    },
    toggleAboutDialog () {
      this.$store.commit('setIsOpenAboutDialog', !this.$store.state.isOpenAboutDialog)
    },
    toggleSupportDialog () {
      this.$store.commit('setIsOpenSupportDialog', !this.$store.state.isOpenSupportDialog)
    },
    setIsThemeDark () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.$store.commit('setIsThemeDark', this.$vuetify.theme.dark)
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
