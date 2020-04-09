<template>
  <v-navigation-drawer class="right-drawer" v-model="rightDrawer" :clipped="$vuetify.breakpoint.lgAndUp" width="300" app right>
    <PageToc v-if="hasPageToc" />
    <SpellFilters v-if="hasSpellFilters" />
    <MagicItemFilters v-if="hasMagicItemFilters" />
  </v-navigation-drawer>
</template>

<script>
import PageToc from '@theme/components/PageToc'
import SpellFilters from '@theme/components/SpellFilters'
import MagicItemFilters from '@theme/components/MagicItemFilters'

export default {
  name: 'RightDrawer',

  components: {
    SpellFilters,
    MagicItemFilters,
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
    hasMagicItemFilters () {
      return this.$store.state.inRightDrawer == 'magicItemFilters'
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
