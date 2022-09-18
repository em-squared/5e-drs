<template>
  <div class="my-8">
    <v-row>
      <v-col cols="12" sm="6" md="4" class="class-logo">
        <ClassSummary imgSrc="/barbare.svg" title="Barbare" hitDie="12" favoredAbilities="Force, Constitution" savesProficiency="Force et Constitution" href="/classes/barbare/"></ClassSummary>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="class-logo">
        <ClassSummary imgSrc="/barde.svg" title="Barde" hitDie="8" favoredAbilities="Charisme, Dextérité" savesProficiency="Dextérité et Charisme" casterAbility="Charisme" href="/classes/barde/"></ClassSummary>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="class-logo">
        <ClassSummary imgSrc="/clerc.svg" title="Clerc" hitDie="8" favoredAbilities="Sagesse, Force" savesProficiency="Sagesse et Charisme" casterAbility="Sagesse" href="/classes/clerc/"></ClassSummary>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="class-logo">
        <ClassSummary imgSrc="/druide.svg" title="Druide" hitDie="8" favoredAbilities="Sagesse, Constitution" savesProficiency="Intelligence et Sagesse" casterAbility="Sagesse" href="/classes/druide/"></ClassSummary>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="class-logo">
        <ClassSummary imgSrc="/ensorceleur.svg" title="Ensorceleur" hitDie="6" favoredAbilities="Charisme, Constitution" savesProficiency="Constitution et Charisme" casterAbility="Charisme" href="/classes/ensorceleur/"></ClassSummary>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="class-logo">
        <ClassSummary imgSrc="/guerrier.svg" title="Guerrier" hitDie="10"  favoredAbilities="Force ou Dextérité, Constitution" savesProficiency="Force et Constitution" href="/classes/guerrier/"></ClassSummary>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="class-logo">
        <ClassSummary imgSrc="/magicien.svg" title="Magicien" hitDie="6" favoredAbilities="Intelligence, Dextérité" savesProficiency="Intelligence et Sagesse" casterAbility="Intelligence" href="/classes/magicien/"></ClassSummary>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="class-logo">
        <ClassSummary imgSrc="/moine.svg" title="Moine" hitDie="8" favoredAbilities="Dextérité, Sagesse" savesProficiency="Force et Dextérité" href="/classes/moine/"></ClassSummary>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="class-logo">
        <ClassSummary imgSrc="/paladin.svg" title="Paladin" hitDie="10" favoredAbilities="Force, Charisme" savesProficiency="Sagesse et Charisme" casterAbility="Charisme" href="/classes/paladin/"></ClassSummary>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="class-logo">
        <ClassSummary imgSrc="/rodeur.svg" title="Rôdeur" hitDie="10" favoredAbilities="Dextérité, Sagesse" savesProficiency="Force, Dextérité" casterAbility="Sagesse" href="/classes/rodeur/"></ClassSummary>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="class-logo">
        <ClassSummary imgSrc="/roublard.svg" title="Roublard" hitDie="8" favoredAbilities="Dextérité, Intelligence ou Charisme" savesProficiency="Dextérité et Intelligence" href="/classes/roublard/"></ClassSummary>
      </v-col>
      <v-col cols="12" sm="6" md="4" class="class-logo">
        <ClassSummary imgSrc="/sorcier.svg" title="Sorcier" hitDie="8" favoredAbilities="Charisme, Force ou Dextérité" savesProficiency="Sagesse et Charisme" casterAbility="Charisme" href="/classes/sorcier/"></ClassSummary>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ClassSummary from '@theme/components/ClassSummary'
export default {
  name: "ClassSummaries",
  components: {
    ClassSummary
  }
}
</script>

<style lang="scss" scoped>
</style>
