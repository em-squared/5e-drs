<template>
  <v-btn color="primary" class="mb-4" depressed link to="/mes-objets-magiques/">Mes objets magiques<v-chip v-show="$store.state.myMagicItems.magicItems.length > 0" class="ml-2" color="#fff" small label text-color="#222">{{ $store.state.myMagicItems.magicItems.length }}</v-chip></v-btn>
</template>

<script>
export default {
  name: 'MyMagicItemsButton'
}
</script>

<style lang="scss">
</style>
