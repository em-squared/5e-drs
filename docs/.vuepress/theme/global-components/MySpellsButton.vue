<template>
  <v-btn color="primary" class="mb-4" depressed link to="/mon-grimoire/">Mon grimoire<v-chip v-if="$store.state.mySpells.spells.length > 0" class="ml-2" color="#fff" small label>{{ $store.state.mySpells.spells.length }}</v-chip></v-btn>
</template>

<script>
export default {
  name: 'MySpellsButton'
}
</script>

<style lang="scss">
</style>
