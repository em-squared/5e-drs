<template>
  <div class="ability-scores-calculator">
    <v-row>
      <v-col class="text-center">
        <v-select :items="races" label="Choisissez une race" item-text="label" v-model="race" return-object outlined @change="selectRace"></v-select>
      </v-col>
      <v-col v-if="race && race.freeAbilityBonuses">
        <v-select :items="abilityScoresChoices" multiple label="Bonus aux caractéristiques" v-model="abilityBonuses" outlined @input="selectAbilityBonus"></v-select>
      </v-col>
    </v-row>
    <v-row v-for="ability in abilityScores" class="mb-0">
      <v-col class="text-center">{{ ability.label }}</v-col>
      <v-col class="text-center"><v-text-field label="Base" outlined dense type="number" min="6" max="16" v-model="ability.value"></v-text-field></v-col>
      <v-col class="text-center">+</v-col>
      <v-col class="text-center">{{ ability.racialBonus }}</v-col>
      <v-col class="text-center">=</v-col>
      <v-col class="text-center"><v-text-field label="Total" outlined dense readonly :value="getTotal(ability.key)"></v-text-field></v-col>
      <v-col class="text-center"><v-text-field label="Modificateur" outlined dense readonly :value="displayBonus(getModifier(getTotal(ability.key)))"></v-text-field></v-col>
      <v-col class="text-center"><v-text-field label="Coût" outlined dense readonly :value="abilityScoreCosts[ability.value].cost"></v-text-field></v-col>
    </v-row>
  </div>
</template>

<script>
import { getModifier, displayBonus, displayAbilityScore } from '@theme/util/monsterHelpers'
import { ABILITYSCORECOSTS, ABILITYSCORES } from '../../data/abilityScores'
import { races } from '../../data/races'

export default {
  data () {
    return {
      abilityScoreCosts: ABILITYSCORECOSTS,
      abilityScoresChoices: ABILITYSCORES,
      races: races,
      race: null,
      abilityScores: [
        { key: 'for', label: 'Force', value: 8, racialBonus: 0},
        { key: 'dex', label: 'Dextérité', value: 8, racialBonus: 0},
        { key: 'con', label: 'Constitution', value: 8, racialBonus: 0},
        { key: 'int', label: 'Intelligence', value: 8, racialBonus: 0},
        { key: 'sag', label: 'Sagesse', value: 8, racialBonus: 0},
        { key: 'cha', label: 'Charisme', value: 8, racialBonus: 0}
      ],
      abilityBonuses: []
    }
  },

  methods: {
    getTotal (ability) {
      let total = null
      for (let score of this.abilityScores) {
        if (score.key == ability) {
          total = parseInt(score.value) + parseInt(score.racialBonus)
        }
      }
      return total
    },

    getModifier (value) {
      return getModifier(value)
    },

    displayBonus (score) {
      return displayBonus(score)
    },

    selectRace () {
      for (let ability of this.abilityScores) {
        ability.racialBonus = 0
        if (this.race.abilityBonuses) {
          for (var bonus of this.race.abilityBonuses) {
            if (bonus.ability == ability.key) {
              ability.racialBonus = bonus.value
            }
          }
        }
      }
    },

    selectAbilityBonus (e) {
      if(e.length > this.race.freeAbilityBonuses.qty) {
        e.pop()
      }
      console.log(this.abilityBonuses)
    }
  }
}
</script>

<style lang="scss">
</style>
