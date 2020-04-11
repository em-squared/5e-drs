<template>
  <div class="spell">
    <Breadcrumb />
    <Spell />
  </div>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb'
import Spell from '@theme/components/Spell'

export default {
  name: 'SpellLayout',

  components: {
    Breadcrumb,
    Spell
  },

  mounted () {
    this.$store.commit('setHasRightDrawer', false)
    this.$store.commit('setRightDrawer', this.$vuetify.breakpoint.lgAndUp)
    this.$store.commit('setInRightDrawer', null)
  }
}
</script>

<style>
</style>
