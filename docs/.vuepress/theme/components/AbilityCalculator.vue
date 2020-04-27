<template>
  <div class="ability-scores-calculator">
    <v-row>
      <v-col :cols="12" :md="8" :lg="6">
        <v-row>
          <v-col>
            <v-btn color="primary" @click.stop="reset"><v-icon>mdi-eraser</v-icon> Réinitialiser</v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-select dense :items="races" label="Race" item-text="label" v-model="race" return-object outlined @change="selectRace(true)"></v-select>
          </v-col>
          <v-col v-if="race && race.freeAbilityBonuses">
            <v-select dense :items="abilityScoresChoices" multiple label="Bonus aux caractéristiques" v-model="abilityBonuses" outlined @change="selectAbilityBonus"></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-select dense :items="generationMethodChoices" label="Méthode d'attribution" v-model="generationMethod" outlined @change="selectGenerationMethod"></v-select>
          </v-col>
          <v-col>
            <v-select dense :items="powerTiers" return-object label="Niveau de puissance" v-model="powerTier" outlined :hint="hintPowerTier" persistent-hint @change="selectPowerTier"></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">Caractéristique</th>
                    <th class="text-center">Base</th>
                    <th class="text-center"></th>
                    <th class="text-center">Bonus racial</th>
                    <th class="text-center"></th>
                    <th class="text-center"><strong>Total</strong></th>
                    <th class="text-center"><strong>Mod.</strong></th>
                    <th v-if="generationMethod == 'pointBuy'" class="text-center">Coût</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="ability in abilityScores" :key="ability.key">
                    <td class="text-center"><span class="subtitle-2">{{ ability.label }}</span></td>
                    <td class="text-center" style="width:110px">
                      <v-text-field v-if="generationMethod == 'pointBuy'" class="text-center" outlined hide-details dense type="number" min="6" max="16" v-model="ability.value"></v-text-field>
                      <template v-else-if="generationMethod == 'standardArray'">
                        <v-select v-if="!ability.value" dense :items="standardArrayValues" v-model="ability.value" outlined hide-details clearable @change="selectAbilityValue(ability)"></v-select>
                        <v-text-field v-else class="text-center" outlined hide-details dense readonly clearable v-model="ability.value"></v-text-field>
                      </template>
                    </td>
                    <td class="text-center">+</td>
                    <td class="text-center">{{ ability.racialBonus }}</td>
                    <td class="text-center">=</td>
                    <td class="text-center"><strong>{{ getTotal(ability) }}</strong></td>
                    <td class="text-center"><strong>{{ displayBonus(getModifier(getTotal(ability))) }}</strong></td>
                    <td v-if="generationMethod == 'pointBuy'" class="text-center">{{ getAbilityScoreCost(ability) }}</td>
                  </tr>
                  <tr v-if="generationMethod == 'pointBuy' && powerTier"><td class="text-right" colspan="8">Points restants : {{ pointsRemaining }}/{{ powerTier.pointBuy }}</td></tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getModifier, displayBonus, displayAbilityScore } from '@theme/util/monsterHelpers'
import { ABILITYSCORECOSTS, ABILITYSCORES, POWERTIERS } from '../../data/abilityScores'
import { races } from '../../data/races'

const GENERATION_METHOD_CHOICES = [
  { text: 'Méthode fixe', value: 'standardArray' },
  { text: 'Méthode par répartition', value: 'pointBuy' }
]

export default {
  data () {
    return {
      generationMethodChoices: GENERATION_METHOD_CHOICES,
      generationMethod: GENERATION_METHOD_CHOICES[1].value,
      abilityScoreCosts: ABILITYSCORECOSTS,
      powerTiers: POWERTIERS,
      abilityScoresChoices: null,
      races: races,
      race: null,
      powerTier: POWERTIERS[1],
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

  computed: {
    hintPowerTier () {
      if (this.generationMethod && this.powerTier) {
        if (this.generationMethod == 'standardArray') {
          return 'Valeurs fixes : ' + this.powerTier.standardArray
        } else if (this.generationMethod == 'pointBuy') {
          return 'Points disponibles : ' + this.powerTier.pointBuy
        }
      }
      return ''
    },

    pointsRemaining () {
      if (!this.powerTier) {
        return 0
      }
      let pointSpent = 0
      for (let ability of this.abilityScores) {
        if (ABILITYSCORECOSTS[ability.value]) {
          pointSpent += ABILITYSCORECOSTS[ability.value].cost
        }
      }
      return this.powerTier.pointBuy - pointSpent
    },

    standardArrayValues () {
      let values = Array.from(this.powerTier.standardArray)
      for (let ability of this.abilityScores) {
        if (ability.value) {
          values.splice(values.indexOf(ability.value), 1)
        }
      }
      return values
    }
  },

  methods: {
    getTotal (ability) {
      let total = 0
      if (!ability.value) {
        return '--'
      }
      return parseInt(ability.value) + parseInt(ability.racialBonus)
    },

    getAbilityScoreCost (ability) {
      if (ABILITYSCORECOSTS[ability.value]) {
        return ABILITYSCORECOSTS[ability.value].cost
      }
      return null
    },

    getModifier (value) {
      if (value == '--') {
        return '--'
      }
      return getModifier(value)
    },

    displayBonus (score) {
      return displayBonus(score)
    },

    selectRace (clear = false) {
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

      if (clear) {
        this.abilityBonuses = []
      }

      let choices = Array.from(ABILITYSCORES)
      if (this.race && this.race.abilityBonuses) {
        for (let abilityBonus of this.race.abilityBonuses) {
          choices.splice(choices.findIndex(item => item.value == abilityBonus.key), 1)
        }
      }
      this.abilityScoresChoices = choices
    },

    selectAbilityBonus (e) {
      if(e.length > this.race.freeAbilityBonuses.qty) {
        e.pop()
      } else {
        this.selectRace()
        for (let bonus of this.abilityBonuses) {
          this.abilityScores[this.abilityScores.findIndex(item => item.key == bonus)].racialBonus = this.race.freeAbilityBonuses.value
        }
      }
    },

    selectGenerationMethod () {
      // Réinitialisation des valeurs au changement de la méthode d'attribution
      if (this.generationMethod) {
        if (this.generationMethod == 'pointBuy') {
          for (let ability of this.abilityScores) {
            ability.value = 8
          }
        } else if (this.generationMethod == 'standardArray') {
          for (let ability of this.abilityScores) {
            ability.value = null
          }
        }
      }
    },

    selectPowerTier () {
      if (this.generationMethod == 'standardArray') {
        for (let ability of this.abilityScores) {
          ability.value = null
        }
      }
    },

    selectAbilityValue (ability) {
      // console.log(ability)
    },

    reset () {
      this.race = null
      this.generationMethod = GENERATION_METHOD_CHOICES[1].value
      this.powerTier = POWERTIERS[1]
      this.abilityScores = [
        { key: 'for', label: 'Force', value: 8, racialBonus: 0},
        { key: 'dex', label: 'Dextérité', value: 8, racialBonus: 0},
        { key: 'con', label: 'Constitution', value: 8, racialBonus: 0},
        { key: 'int', label: 'Intelligence', value: 8, racialBonus: 0},
        { key: 'sag', label: 'Sagesse', value: 8, racialBonus: 0},
        { key: 'cha', label: 'Charisme', value: 8, racialBonus: 0}
      ]
      this.abilityBonuses = []
    }
  }
}
</script>

<style lang="scss">
.v-input.text-center {
  input {
    text-align: center;
  }
}
</style>
