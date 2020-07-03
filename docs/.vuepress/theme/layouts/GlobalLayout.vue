<template>
  <v-app class="srd">

    <v-overlay :value="$store.state.loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <NavDrawer class="d-print-none" />
    <RightDrawer class="d-print-none" v-if="hasRightDrawer" />

    <Navbar class="d-print-none" />

    <v-content>
      <v-container fluid ref="container">
        <v-row align="start" justify="center">
          <v-col cols="12">
            <DefaultGlobalLayout/>
          </v-col>
        </v-row>

      </v-container>

      <v-btn v-show="$vuetify.breakpoint.lgAndUp && $store.state.hasRightDrawer" color="primary" @click.stop="setRightDrawer" :class="rightDrawerButtonCSS()" small top right fixed fab>
        <v-icon v-if="$store.state.rightDrawer">mdi-chevron-right</v-icon>
        <v-icon v-else left>mdi-chevron-left</v-icon>
      </v-btn>

      <v-fab-transition>
        <v-btn color="primary" class="d-print-none" fab bottom right fixed @click="toTop" v-show="toTopButton" v-scroll="onScroll">
          <v-icon class="d-print-none">mdi-chevron-up</v-icon>
        </v-btn>
    </v-fab-transition>
    </v-content>

    <v-bottom-sheet v-model="cookieConsentDialog" hide-overlay>
      <v-sheet class="" tile>
        <div class="container text-center text-md-left d-md-flex align-md-center justify-md-space-between py-3 body-2">
          <div>Ce site utilise des cookies pour son bon fonctionnement et pour l'analyse de la fréquentation. Sans ces cookies, vous ne pourriez pas écrire vos sorts dans votre grimoire ou recruter tous ces monstres pour garnir votre repaire maléfique.</div>
          <v-btn class="my-4 my-md-0" color="primary" @click="setCookieConsent">Compris</v-btn>
        </div>
      </v-sheet>
    </v-bottom-sheet>

    <v-snackbar v-model="$store.state.isOpenSnackbar">
      {{ $store.state.snackbarText }}
      <v-btn color="red" text @click="$store.commit('setIsOpenSnackbar', false)">
        Fermer
      </v-btn>
    </v-snackbar>

    <v-dialog v-model="$store.state.isOpenShareHomebrewDialog" @click:outside="$store.commit('setIsOpenShareHomebrewDialog', !$store.state.isOpenShareHomebrewDialog)" max-width="600">
      <v-card>
        <v-card-title class="headline d-flex justify-space-between">
          <span>Partage</span></span>
          <v-btn color="primary" icon @click="$store.commit('setIsOpenShareHomebrewDialog', !$store.state.isOpenShareHomebrewDialog)"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>

        <v-card-text>
          <v-text-field id="copy-uri" outlined readonly label="Copiez le lien pour partager" :hint="hintCopied" :value="$site.themeConfig.domain + '/homebrew/?h=' + $store.state.shareURI" append-outer-icon="mdi-content-copy" @click:append-outer="copyURI('copy-uri')"></v-text-field>
          <div class="text-center">
            <v-btn color="accent" depressed link :to="{ path: '/homebrew/', query: { h: $store.state.shareURI }}" @click="$store.commit('setIsOpenShareHomebrewDialog', !$store.state.isOpenShareHomebrewDialog)">Voir la page</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

  </v-app>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Navbar from '@theme/components/Navbar.vue'
import NavDrawer from '@theme/components/NavDrawer.vue'
import RightDrawer from '@theme/components/RightDrawer.vue'
import Vue from 'vue'
import Cookies from 'js-cookie'

export default {
  name: 'GlobalLayout',

  components: {
    DefaultGlobalLayout: GlobalLayout,
    Navbar,
    NavDrawer,
    RightDrawer
  },

  computed: {
  },

  data () {
    return {
      cookieConsentDialog: true,
      toTopButton: false,
      hintCopied: ''
    }
  },

  computed: {
    footerCSS () {
      let css = ''
      if (this.$store.state.drawer) {
        css += ' footer-padding-left'
      }
      if (this.$store.state.rightDrawer) {
        css += ' footer-padding-right'
      }
      return css
    },
    hasRightDrawer() {
      return this.$store.state.hasRightDrawer
    }
  },

  mounted () {
    this.$store.commit('setLoading', false) // Page chargée
    this.$store.commit('setDrawer', this.$vuetify.breakpoint.lgAndUp)

    // Cookie consent
    const COOKIECONSENT = Cookies.get('heros-et-dragons-cookies')
    if (COOKIECONSENT == 'compris') {
      this.cookieConsentDialog = false
    }

    // Dark theme
    const THEMEISDARK = Cookies.get('heros-et-dragons-is-dark')
    if (THEMEISDARK === 'true') {
      this.$vuetify.theme.dark = true
    }

    // Variante 5 royaumes pour les monstres
    const L5R = Cookies.get('heros-et-dragons-l5r')
    this.$store.state.l5r = L5R

    // Chargement des donées utilisateur depuis le navigateur
    this.$store.commit('mySpells/initialiseStore')
    this.$store.commit('myMonsters/initialiseStore')
    this.$store.commit('myMagicItems/initialiseStore')

    // Loading feedback
    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        this.$store.commit('setLoading', true)
      }
      next()
    })

    this.$router.afterEach(() => {
      this.$store.commit('setLoading', false)
    })
  },

  methods: {
    setCookieConsent () {
      Cookies.set('heros-et-dragons-cookies', 'compris')
      this.cookieConsentDialog = false
    },

    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.toTopButton = top > 20
    },

    toTop () {
      this.$vuetify.goTo(0)
    },

    rightDrawerButtonCSS () {
      if (this.$store.state.rightDrawer) {
        return 'right-drawer-button right-drawer-button-open'
      }
      return 'right-drawer-button right-drawer-button-close'
    },

    setRightDrawer () {
      this.$store.commit('setRightDrawer', !this.$store.state.rightDrawer)
    },

    copyURI (id) {
      let toCopy = document.getElementById(id)
      toCopy.select()
      document.execCommand( 'copy' )
      this.hintCopied = "L'adresse a été copiée dans le presse-papier"
      let self = this
      setTimeout(function () {
        self.hintCopied = ''
      }, 2000)
    }
  }
}
</script>

<style lang="scss">
.footer-padding-left {
  padding-left: 300px;
}
.footer-padding-right {
  padding-right: 300px;
}
.right-drawer-button {
  top: 150px !important;
}
.right-drawer-button-open {
  right: 280px !important;
}
.right-drawer-button-close {
  right: -20px !important;
}
</style>
