<template>
  <div class="monster-filters pa-1">

    <v-text-field
      class="mb-1 mx-2"
      v-model="search"
      label="Filtrer"
      single-line
      hide-details
      clearable
      color="accent"
      ></v-text-field>

    <v-expansion-panels multiple flat hover v-model="panels">

      <v-expansion-panel>
        <v-expansion-panel-header>Tranche d'ID</v-expansion-panel-header>
        <v-expansion-panel-content class="pt-4">
          <v-range-slider
            class="mt-6"
            v-model="challengeRange"
            min="0"
            :max="challenges.length-1"
            thumb-size="24"
            thumb-label="always"
            hide-details
            @end="onEndChallengeRange"
            >
            <template v-slot:thumb-label="{ value }">
              {{ challenges[value].label }}
            </template>
          </v-range-slider>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Types</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-btn class="mb-2 mt-2" small color="primary" @click="resetTypes" dark>Réinitialiser</v-btn>
          <v-switch v-for="(type, idx) in types" v-model="type.value" :label="type.label" dense class="ma-0" @change="switchType" color="accent"></v-switch>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Tailles</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-btn class="mb-2 mt-2" small color="primary" @click="resetSizes" dark>Réinitialiser</v-btn>
          <v-switch v-for="size in sizes" v-model="size.value" :label="size.label" dense class="ma-0" @change="switchSize" color="accent"></v-switch>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Environnements</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-btn class="mb-2 mt-2" small color="primary" @click="resetEnvironments" dark>Réinitialiser</v-btn>
          <v-switch v-for="(environment, idx) in environments" v-model="environment.value" :label="environment.label" dense class="ma-0" @change="switchEnvironment" color="accent"></v-switch>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Types de donjons</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-btn class="mb-2 mt-2" small color="primary" @click="resetDungeonTypes" dark>Réinitialiser</v-btn>
          <v-switch v-for="(dungeonType, idx) in dungeonTypes" v-model="dungeonType.value" :label="dungeonType.label" dense class="ma-0" @change="switchDungeonType" color="accent"></v-switch>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Déplacements</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="d-flex mt-2 mb-4">
            <v-btn-toggle v-model="speedFly" @change="switchSpeedFly" dark>
              <v-btn :value="true" small :color="setColor(speedFly, true, 'green')">
                <v-icon>mdi-check</v-icon>
              </v-btn>
              <v-btn :value="false" small :color="setColor(speedFly, false, 'red')">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-btn-toggle>

            <p class="mt-0 mb-0 ml-2">Vol</p>
          </div>

          <div class="d-flex mb-4">
            <v-btn-toggle v-model="speedSwim" @change="switchSpeedSwim" dark>
              <v-btn :value="true" small :color="setColor(speedSwim, true, 'green')">
                <v-icon>mdi-check</v-icon>
              </v-btn>
              <v-btn :value="false" small :color="setColor(speedSwim, false, 'red')">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-btn-toggle>

            <p class="mt-0 mb-0 ml-2">Nage</p>
          </div>

          <div class="d-flex">
            <v-btn-toggle v-model="speedBurrow" @change="switchSpeedBurrow" dark>
              <v-btn :value="true" small :color="setColor(speedBurrow, true, 'green')">
                <v-icon>mdi-check</v-icon>
              </v-btn>
              <v-btn :value="false" small :color="setColor(speedBurrow, false, 'red')">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-btn-toggle>

            <p class="mt-0 mb-0 ml-2">Fouissement</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-expansion-panels>

  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
import { setUrlParams, getUrlParameter, setBooleanMutation, setListMutation } from '@theme/util/filterHelpers'
import { CHALLENGES } from '../../data/monsters'

export default {
  name: 'MonsterFilters',

  data () {
    return {
      panels: [],
      challenges: CHALLENGES
    }
  },

  computed: {
    search: {
      get () {
        return this.$store.state.monsterFilters.search
      },
      set (newValue) {
        this.$store.commit('monsterFilters/setSearch', newValue)
      }
    },

    challengeRange: {
      get () {
        return this.$store.state.monsterFilters.challengeRange
      },
      set (newValue) {
        this.$store.commit('monsterFilters/setChallengeRange', newValue)
      }
    },

    types: {
      get () {
        return this.$store.state.monsterFilters.types
      },
      set (newValue) {
        this.$store.commit('monsterFilters/setTypes', newValue)
      }
    },

    sizes: {
      get () {
        return this.$store.state.monsterFilters.sizes
      },
      set (newValue) {
        this.$store.commit('monsterFilters/setSizes', newValue)
      }
    },

    environments: {
      get () {
        return this.$store.state.monsterFilters.environments
      },
      set (newValue) {
        this.$store.commit('monsterFilters/setEnvironments', newValue)
      }
    },

    dungeonTypes: {
      get () {
        return this.$store.state.monsterFilters.dungeonTypes
      },
      set (newValue) {
        this.$store.commit('monsterFilters/setDungeonTypes', newValue)
      }
    },

    speedFly: {
      get () {
        return this.$store.state.monsterFilters.speedFly
      },
      set (newValue) {
        this.$store.commit('monsterFilters/setSpeedFly', newValue)
      }
    },

    speedSwim: {
      get () {
        return this.$store.state.monsterFilters.speedSwim
      },
      set (newValue) {
        this.$store.commit('monsterFilters/setSpeedSwim', newValue)
      }
    },

    speedBurrow: {
      get () {
        return this.$store.state.monsterFilters.speedBurrow
      },
      set (newValue) {
        this.$store.commit('monsterFilters/setSpeedBurrow', newValue)
      }
    },
  },

  methods: {

    onEndChallengeRange () {
      if (this.challengeRange[0] > this.challengeRange[1]) {
        let min = range[1]
        let max = range[0]
        this.challengeRange[0] = min
        this.challengeRange[1] = max
      }
      let range = [Number(CHALLENGES[this.challengeRange[0]].value), Number(CHALLENGES[this.challengeRange[1]].value)]
      setUrlParams('trancheID', range)
    },

    switchType () {
      let list = []
      for (var i = 0; i < this.types.length; i++) {
        if (this.types[i].value) {
          list.push(this.types[i].label)
        }
      }
      setUrlParams('types', list)
    },

    switchSize () {
      let list = []
      for (var i = 0; i < this.sizes.length; i++) {
        if (this.sizes[i].value) {
          list.push(this.sizes[i].label)
        }
      }
      setUrlParams('tailles', list)
    },

    switchEnvironment () {
      let list = []
      for (var i = 0; i < this.environments.length; i++) {
        if (this.environments[i].value) {
          list.push(this.environments[i].label)
        }
      }
      setUrlParams('environnements', list)
    },

    switchDungeonType () {
      let list = []
      for (var i = 0; i < this.dungeonTypes.length; i++) {
        if (this.dungeonTypes[i].value) {
          list.push(this.dungeonTypes[i].label)
        }
      }
      setUrlParams('donjons', list)
    },

    switchSpeedFly () {
      let value = []
      if ((this.speedFly !== undefined)) {
        value[0] = this.speedFly
      }
      setUrlParams('vol', value)
    },

    switchSpeedSwim () {
      let value = []
      if ((this.speedSwim !== undefined)) {
        value[0] = this.speedSwim
      }
      setUrlParams('nage', value)
    },

    switchSpeedBurrow () {
      let value = []
      if ((this.speedBurrow !== undefined)) {
        value[0] = this.speedBurrow
      }
      setUrlParams('fouissement', value)
    },

    setColor (value, compare, color) {
      if (value === compare) {
        return color
      }
      return this.$site.themeConfig.primaryColor
    },

    resetTypes () {
      this.$store.commit('monsterFilters/resetTypes')
      this.switchType()
    },

    resetSizes () {
      this.$store.commit('monsterFilters/resetSizes')
      this.switchSize()
    },

    resetEnvironments () {
      this.$store.commit('monsterFilters/resetEnvironments')
      this.switchEnvironment()
    },

    resetDungeonTypes () {
      this.$store.commit('monsterFilters/resetDungeonTypes')
      this.switchDungeonType()
    },
  },

  mounted () {
    this.$store.dispatch('monsterFilters/reset')

    let challengeRange = getUrlParameter(window.location.href, "trancheID").split(",")
    let selectedSizes = getUrlParameter(window.location.href, "tailles").split(",")
    let selectedTypes = getUrlParameter(window.location.href, "types").split(",")
    let selectedEnvironments = getUrlParameter(window.location.href, "environnements").split(",")
    let selectedDungeonTypes = getUrlParameter(window.location.href, "donjons").split(",")
    let speedFly = getUrlParameter(window.location.href, "vol")
    let speedSwim = getUrlParameter(window.location.href, "nage")
    let speedBurrow = getUrlParameter(window.location.href, "fouissement")

    if (challengeRange && challengeRange[0] != '' && challengeRange[1] != '') {
      let convertedChallengeRange = []
      let min = CHALLENGES.findIndex(e => e.value == challengeRange[0])
      if (min !== -1) {
        convertedChallengeRange[0] = Number(min)
      } else {
        convertedChallengeRange[0] = Number(0)
      }
      let max = CHALLENGES.findIndex(e => e.value == challengeRange[1])
      if (max !== -1) {
        convertedChallengeRange[1] = Number(max)
      } else {
        convertedChallengeRange[1] = Number(CHALLENGES.length - 1)
      }
      this.$store.commit('monsterFilters/setChallengeRange', convertedChallengeRange)
    }
    setListMutation(selectedTypes, this.$store, 'monsterFilters/setTypesFromList')
    setListMutation(selectedSizes, this.$store, 'monsterFilters/setSizesFromList')
    setListMutation(selectedEnvironments, this.$store, 'monsterFilters/setEnvironmentsFromList')
    setListMutation(selectedDungeonTypes, this.$store, 'monsterFilters/setDungeonTypesFromList')

    setBooleanMutation(speedFly, this.$store, 'monsterFilters/setSpeedFly')
    setBooleanMutation(speedSwim, this.$store, 'monsterFilters/setSpeedSwim')
    setBooleanMutation(speedBurrow, this.$store, 'monsterFilters/setSpeedBurrow')
  }
}
</script>

<style lang="scss">
</style>
