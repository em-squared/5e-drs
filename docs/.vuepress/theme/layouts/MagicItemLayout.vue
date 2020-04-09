<template>
  <div class="magic-item">
    <Breadcrumb />
    <MagicItem />
  </div>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb'
import MagicItem from '@theme/components/MagicItem'

export default {
  name: 'MagicItemLayout',

  components: {
    Breadcrumb,
    MagicItem
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
