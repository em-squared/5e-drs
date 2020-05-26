<template>
  <v-btn color="primary" class="mb-4" depressed link to="/mon-bestiaire/">Mon bestiaire<v-chip v-show="$store.state.myMonsters.monsters.length > 0" class="ml-2" color="#fff" small label text-color="#222">{{ $store.state.myMonsters.monsters.length }}</v-chip></v-btn>
</template>

<script>
export default {
  name: 'MyMontersButton'
}
</script>

<style lang="scss">
</style>
