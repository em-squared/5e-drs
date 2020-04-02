<template>
  <v-navigation-drawer class="right-drawer" v-model="rightDrawer" :clipped="$vuetify.breakpoint.lgAndUp" width="300" app right>
    <PageToc v-if="hasPageToc" />
    <SpellFilters v-if="hasSpellFilters" />
  </v-navigation-drawer>
</template>

<script>
import PageToc from '@theme/components/PageToc'
import SpellFilters from '@theme/components/SpellFilters'

export default {
  name: 'RightDrawer',

  components: {
    SpellFilters,
    PageToc
  },

  data () {
    return {
    }
  },

  computed: {
    rightDrawer: {
      get () {
        return this.$store.state.rightDrawer
      },
      set (newValue) {
        this.$store.commit('setRightDrawer', newValue)
      }
    },
    hasPageToc () {
      return this.$store.state.inRightDrawer == 'pageToc'
    },
    hasSpellFilters () {
      return this.$store.state.inRightDrawer == 'spellFilters'
    },
  },

  mounted () {

  },

  methods: {
  }
}
</script>

<style lang="scss">
</style>
