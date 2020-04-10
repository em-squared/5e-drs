<template>
  <div class="monster">
    <Breadcrumb />
    <Monster />
  </div>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb'
import Monster from '@theme/components/Monster'

export default {
  name: 'MonsterLayout',

  components: {
    Breadcrumb,
    Monster
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
