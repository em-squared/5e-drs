<template>
  <v-navigation-drawer class="right-drawer" v-model="rightDrawer" :clipped="$vuetify.breakpoint.lgAndUp" width="300" app right>
    <SpellFilters v-if="hasSpellFilters" />
  </v-navigation-drawer>
</template>

<script>
import SpellFilters from '@theme/components/SpellFilters.vue'

export default {
  name: 'RightDrawer',

  components: {
    SpellFilters
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
    hasSpellFilters () {
      return this.$store.state.inRightDrawer == 'spellFilters'
    }
  },

  mounted () {

  },

  methods: {
  }
}
</script>

<style lang="scss">
</style>
