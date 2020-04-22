<template>
  <v-app class="srd">

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
    </v-content>

    <v-bottom-sheet v-model="cookieConsentDialog" persistent>
      <v-sheet class="text-center" tile>
        <div class="py-3">Ce site utilise des cookies pour son bon fonctionnement et pour l'analyse de la fréquentation. Sans ces cookies, vous ne pourriez pas écrire vos sorts dans votre grimoire ou recruter tous ces monstres pour garnir votre repaire maléfique.</div>
        <v-btn class="my-6" color="primary" @click="setCookieConsent">Compris</v-btn>
      </v-sheet>
    </v-bottom-sheet>

  </v-app>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Navbar from '@theme/components/Navbar.vue'
import NavDrawer from '@theme/components/NavDrawer.vue'
import RightDrawer from '@theme/components/RightDrawer.vue'
import Vue from 'vue'
import RuleTooltip from '@theme/global-components/RT'
import Cookies from 'js-cookie'

export default {
  name: 'GlobalLayout',

  components: {
    DefaultGlobalLayout: GlobalLayout,
    Navbar,
    NavDrawer,
    RightDrawer
  },

  data () {
    return {
      cookieConsentDialog: true,
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
    this.$store.commit('setDrawer', this.$vuetify.breakpoint.lgAndUp)

    // Cookie consent
    const COOKIECONSENT = Cookies.get('heros-et-dragons-cookies')
    if (COOKIECONSENT == 'compris') {
      this.cookieConsentDialog = false
    }

    // Cookie consent
    const THEMEISDARK = Cookies.get('heros-et-dragons-is-dark')
    if (THEMEISDARK === 'true') {
      this.$vuetify.theme.dark = true
    }

    // Chargement des donées utilisateur depuis le navigateur
    this.$store.commit('mySpells/initialiseStore')
    this.$store.commit('myMonsters/initialiseStore')
    this.$store.commit('myMagicItems/initialiseStore')

    // this.$vuetify.theme.dark = this.$store.state.isThemeDark

    // let conditionLinks = document.links
    // conditionLinks.forEach((link, idx) => {
    //   if (link.hash == "#a-terre") {
    //     let RTClass = Vue.extend(RuleTooltip)
    //     let rtInstance = new RTClass({
    //       propsData: { l: link.text, t: link.hash.substring(1, link.hash.length) },
    //       parent: this.$root
    //     })
    //     rtInstance.$mount()
    //     console.log(link)
    //     link = rtInstance.$el
    //     console.log(link)
    //   }
    // })
  },

  methods: {
    setCookieConsent () {
      Cookies.set('heros-et-dragons-cookies', 'compris')
      this.cookieConsentDialog = false
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
</style>
