<template>
  <div class="encounter-calculator pa-1">

    <v-expansion-panels multiple flat hover v-model="panels">

      <v-expansion-panel>
        <v-expansion-panel-header><strong>Calculateur de rencontre</strong></v-expansion-panel-header>
        <v-expansion-panel-content class="pt-1">
          <div>
            <v-select :items="encounterLevels" item-text="level" item-value="level" label="Niveau moyen du groupe" outlined dense v-model="level"></v-select>
          </div>
          <div>
            <v-text-field label="Nombre de PJ" type="number" min="1" outlined dense v-model="pc"></v-text-field>
          </div>
          <div v-if="creatures.length == 0" class="body-2 font-italic">
            Aucune créature sélectionnée
          </div>
          <div v-else>
            <div class="body-2 mb-4">
              <span class="subtitle-2">Difficulté: </span>{{challenge.label}}
              <v-progress-linear
              :color="challenge.color"
              :value="challengeRate"
              ></v-progress-linear>
            </div>
            <v-row class="d-flex align-center my-0" v-for="c in creatures">
              <v-col class="px-0 py-1">
                <div class="subtitle-2">{{c.title}}</div>
                <!-- <div><span class="subtitle-2">ID : </span>{{c.frontmatter.challenge}}</div> -->
              </v-col>
              <v-col class="px-0 py-1">
                <v-btn dense icon small @click="removeCreatureInEncounter(c)">
                  <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-expansion-panels>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { CHALLENGES, ENCOUNTERLEVELS } from '../../data/monsters'
import { getPCbyChallenge } from '@theme/util/monsterHelpers'

export default {
  name: 'EncounterCalculator',

  data () {
    return {
      panels: [0],
      challenges: CHALLENGES,
      encounterLevels: ENCOUNTERLEVELS,
    }
  },

  computed: {
    ...mapState({
      creatures: state => state.encounterCalculator.creatures,
    }),

    ...mapGetters({
      totalPC: 'encounterCalculator/totalPC',
    }),

    pc: {
      get () {
        return this.$store.state.encounterCalculator.pc
      },
      set (newValue) {
        this.$store.commit('encounterCalculator/setPC', newValue)
      }
    },

    level: {
      get () {
        return this.$store.state.encounterCalculator.level
      },
      set (newValue) {
        this.$store.commit('encounterCalculator/setLevel', Number(newValue))
      }
    },

    challenge () {
      let label = "Aisée"
      let color = 'green'
      if (this.totalPC > this.challengeForGroup.easy) {
        label = "Ordinaire"
        color = 'amber'
      }
      if (this.totalPC > this.challengeForGroup.normal) {
        label = "Ardue"
        color = 'orange'
      }
      if (this.totalPC > this.challengeForGroup.hard) {
        label = "Abominable"
        color = 'red'
      }
      if (this.totalPC > this.challengeForGroup.deadly) {
        label = "Impossible"
        color = 'purple'
      }
      return {label, color}
    },

    totalPC () {
      let pc = 0
      for (let c of this.creatures) {
        pc += getPCbyChallenge(Number(c.frontmatter.challenge))
      }
      return pc
    },

    challengeForGroup () {
      let level = this.encounterLevels[this.encounterLevels.findIndex((item) => { return item.level == this.level })]
      return {
        easy: (level.easy*this.pc)/4,
        normal: (level.normal*this.pc)/4,
        hard: (level.hard*this.pc)/4,
        deadly: (level.deadly*this.pc)/4,
      }
    },

    challengeRate () {
      return (this.totalPC/this.challengeForGroup.deadly)*100
    },
  },

  methods: {
    removeCreatureInEncounter (creature) {
      this.$store.commit('encounterCalculator/removeCreature', creature)
    }
  },

  mounted () {

  }
}
</script>

<style lang="scss">
</style>
