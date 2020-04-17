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

  </v-app>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Navbar from '@theme/components/Navbar.vue'
import NavDrawer from '@theme/components/NavDrawer.vue'
import RightDrawer from '@theme/components/RightDrawer.vue'
import Vue from 'vue'
import RuleTooltip from '@theme/global-components/RT'

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
