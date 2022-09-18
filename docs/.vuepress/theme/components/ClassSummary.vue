<template>
  <v-card class="class-summary d-flex align-center" flat tile :to="href" height="500px">
    <v-card-text>
      <div>
        <v-img :height="imgHeight || '150px'" contain :src="imgSrc"></v-img>
      </div>
      <div class="mt-3 text-h5 font-weight-bold text-uppercase color-dragon">{{ title }}</div>
      <div>
        <div class="font-weight-bold">Dé de vie : </div>
        <div class="dicier my-2">{{ hitDie }}_ON_D{{ hitDie }}</div>
      </div>
      <div>
        <div class="font-weight-bold">Caractéristiques principales : </div>
        <div>{{ favoredAbilities }}</div>
      </div>
      <div>
        <div class="font-weight-bold">Maîtrises de sauvegarde : </div>
        <div>{{ savesProficiency }}</div>
      </div>
      <div v-if="casterAbility">
        <div class="font-weight-bold">Caractéristique d'incantation : </div>
        <div>{{ casterAbility }}</div>
        <v-btn class="mt-2 spell-list" color="accent" depressed :to="spellbookURL">Liste de sorts</span></v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ClassSummary",

  props: ["imgSrc", "imgHeight", "title", "hitDie", "favoredAbilities", "savesProficiency", "casterAbility", "href"],

  computed: {
    spellbookURL () {
      return '/grimoire/?classes=' + this.title
    }
  }
}
</script>

<style lang="scss" scoped>
.spell-list {
  // z-index: 100;
}
</style>
