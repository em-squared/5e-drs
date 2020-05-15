<template>
  <v-btn color="primary" class="mb-4" depressed link to="/mon-bestiaire/">Mon bestiaire<v-chip v-if="$store.state.myMonsters.monsters.length > 0" class="ml-2" color="#fff" small label>{{ $store.state.myMonsters.monsters.length }}</v-chip></v-btn>
</template>

<script>
export default {
  name: 'MyMontersButton'
}
</script>

<style lang="scss">
</style>
