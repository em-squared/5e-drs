<template>
  <div>
    <Breadcrumb class="mr-auto" />

    <AbilityCalculator />
  </div>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb'
import AbilityCalculator from '@theme/components/AbilityCalculator'

export default {
  components: { Breadcrumb, AbilityCalculator },

  mounted () {
    this.$store.commit('setHasRightDrawer', false)
    this.$store.commit('setRightDrawer', this.$vuetify.breakpoint.lgAndUp)
    this.$store.commit('setInRightDrawer', null)

    this.$page.title = 'Calculateur de caractéristiques'
  }
}
</script>

<style lang="scss">
</style>
