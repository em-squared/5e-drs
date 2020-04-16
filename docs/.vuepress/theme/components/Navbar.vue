<template>
  <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" :clipped-right="$vuetify.breakpoint.lgAndUp" app color="#563f5a" dark>
    <v-app-bar-nav-icon @click.stop="setDrawer" />
    <v-toolbar-title class="ml-0 mr-4 pl-4">
      <v-btn class="hidden-sm-and-down site-title" text link :to="{ path: '/' }"><img src="/dragon_blanc.svg" />&nbsp;{{ $site.title }}</v-btn>
    </v-toolbar-title>
    <SRDSearchBox v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
    <v-spacer />
    <!-- <v-btn v-if="$vuetify.breakpoint.lgAndUp" @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark" icon><v-icon v-html="$vuetify.theme.dark ? 'mdi-brightness-4' : 'mdi-brightness-7'"></v-icon></v-btn> -->
    <v-btn v-if="$vuetify.breakpoint.lgAndUp" @click.stop="$store.commit('setIsOpenAboutDialog', true)" icon><v-icon>mdi-information</v-icon></v-btn>
    <v-btn @click.stop="setRightDrawer" icon v-if="hasRightDrawer">
      <v-icon>{{ rightDrawerIcon }}</v-icon>
    </v-btn>

    <v-dialog v-model="$store.state.isOpenAboutDialog" max-width="600">
      <v-card>
        <v-card-title class="headline">À propos de H&D DRS</v-card-title>

        <v-card-text>
          <p>Ce site a été développé par <strong>Maxime Moraine</strong> alias <strong>Em-squared</strong>.</p>
          <p>Les sources de ce site sont disponibles sur <a :href="$site.themeConfig.repository" target="_blank">GitHub</a> sous Licence GPLv3.</p>
          <p><strong><em>Héros & Dragons</em></strong> est un jeu de rôle basé sur les mécaniques de l’<a href="/licence-ogl">OGL5</a> et développé par les talents de la rédaction de <em><a href="https://www.black-book-editions.fr/catalogue.php?id=40" target="_blank">Casus Belli</a></em>, le magazine de référence des jeux de rôle.</p>
          <p>Les textes de cette documentation appartiennent à <a href="https://www.black-book-editions.fr/catalogue.php?id=365" target="_blank">Black Book Éditions</a>.</p>
          <p>Casus Belli et Black Book Éditions sont des marques déposées par <a href="https://www.black-book-editions.fr/" target="_blank">Black Book Éditions</a>. Tous droits réservés.</p>
        </v-card-text>
      </v-card>
    </v-dialog>
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
