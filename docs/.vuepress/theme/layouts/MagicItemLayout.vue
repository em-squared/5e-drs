<template>
  <div class="magic-item">
    <Breadcrumb />
    <MagicItem />
    <Edit />
  </div>
</template>

<script>
import Breadcrumb from '@theme/components/Breadcrumb'
import MagicItem from '@theme/components/MagicItem'
import Edit from '@theme/components/Edit'

export default {
  name: 'MagicItemLayout',

  components: {
    Breadcrumb,
    MagicItem,
    Edit
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
