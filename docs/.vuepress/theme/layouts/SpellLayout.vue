<template>
  <div class="spell">
    <Spell />
  </div>
</template>

<script>
import Spell from '@theme/components/Spell.vue'

export default {
  name: 'SpellLayout',

  components: {
    Spell
  },

  mounted () {
    this.$store.commit('setHasRightDrawer', false)
    this.$store.commit('setRightDrawer', false)
    this.$store.commit('setInRightDrawer', null)
  }
}
</script>

<style>
</style>
