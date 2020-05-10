<template>
  <div class="spell-filters pa-1">

    <v-text-field
      class="mb-1"
      v-model="search"
      label="Filtrer"
      single-line
      hide-details
      clearable
      color="accent"
      ></v-text-field>

    <v-expansion-panels multiple flat hover v-model="panels">

      <v-expansion-panel>
        <v-expansion-panel-header>Classes</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-btn class="mb-2 mt-2" small color="primary" @click="resetClasses" dark>Réinitialiser</v-btn>
          <v-switch v-for="(c, idx) in classes" v-model="c.value" :label="c.label" dense class="ma-0" @change="switchClass" color="accent"></v-switch>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Niveaux de sorts</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-btn class="mb-2 mt-2" small color="primary" @click="resetLevels" dark>Réinitialiser</v-btn>
          <v-switch v-for="level in levels" v-model="level.value" dense class="ma-0" @change="switchLevel" color="accent">
            <template v-slot:label>
              <span v-html="levelDisplay(level)"></span>
            </template>
          </v-switch>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Écoles de magie</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-btn class="mb-2 mt-2" small color="primary" @click="resetSchools" dark>Réinitialiser</v-btn>
          <v-switch v-for="school in schools" v-model="school.value" :label="school.label" dense class="ma-0" @change="switchSchool" color="accent"></v-switch>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Composantes d'incantation</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="d-flex mt-2 mb-4">
            <v-btn-toggle v-model="componentVerbal" @change="switchComponentVerbal" dark>
              <v-btn :value="true" small :color="setColor(componentVerbal, true, 'green')">
                <v-icon>mdi-check</v-icon>
              </v-btn>
              <v-btn :value="false" small :color="setColor(componentVerbal, false, 'red')">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-btn-toggle>

            <p class="mt-0 mb-0 ml-2">Verbales</p>
          </div>

          <div class="d-flex mb-4">
            <v-btn-toggle v-model="componentSomatic" @change="switchComponentSomatic" dark>
              <v-btn :value="true" small :color="setColor(componentSomatic, true, 'green')">
                <v-icon>mdi-check</v-icon>
              </v-btn>
              <v-btn :value="false" small :color="setColor(componentSomatic, false, 'red')">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-btn-toggle>

            <p class="mt-0 mb-0 ml-2">Somatiques</p>
          </div>

          <div class="d-flex">
            <v-btn-toggle v-model="componentMaterial" @change="switchComponentMaterial" dark>
              <v-btn :value="true" small :color="setColor(componentMaterial, true, 'green')">
                <v-icon>mdi-check</v-icon>
              </v-btn>
              <v-btn :value="false" small :color="setColor(componentMaterial, false, 'red')">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-btn-toggle>

            <p class="mt-0 mb-0 ml-2">Matérielles</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Concentration et Rituel</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="d-flex mt-2 mb-4">
            <v-btn-toggle v-model="mustBeConcentration" @change="switchMustBeConcentration" dark>
              <v-btn :value="true" small :color="setColor(mustBeConcentration, true, 'green')">
                <v-icon>mdi-check</v-icon>
              </v-btn>
              <v-btn :value="false" small :color="setColor(mustBeConcentration, false, 'red')">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-btn-toggle>

            <p class="mt-0 mb-0 ml-2">Concentration</p>
          </div>

          <div class="d-flex">
            <v-btn-toggle v-model="mustBeRitual" @change="switchMustBeRitual" dark>
              <v-btn :value="true" small :color="setColor(mustBeRitual, true, 'green')">
                <v-icon>mdi-check</v-icon>
              </v-btn>
              <v-btn :value="false" small :color="setColor(mustBeRitual, false, 'red')">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-btn-toggle>

            <p class="mt-0 mb-0 ml-2">Rituel</p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-expansion-panels>

  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
import { setUrlParams, getUrlParameter, setBooleanMutation, setListMutation } from '@theme/util/filterHelpers'

export default {
  name: 'SpellFilters',

  data () {
    return {
      panels: [],
    }
  },

  computed: {
    search: {
      get () {
        return this.$store.state.spellFilters.search
      },
      set (newValue) {
        this.$store.commit('spellFilters/setSearch', newValue)
      }
    },

    classes: {
      get () {
        return this.$store.state.spellFilters.classes
      },
      set (newValue) {
        this.$store.commit('spellFilters/setClasses', newValue)
      }
    },

    levels: {
      get () {
        return this.$store.state.spellFilters.levels
      },
      set (newValue) {
        this.$store.commit('spellFilters/setLevels', newValue)
      }
    },

    schools: {
      get () {
        return this.$store.state.spellFilters.schools
      },
      set (newValue) {
        this.$store.commit('spellFilters/setSchools', newValue)
      }
    },

    componentVerbal: {
      get () {
        return this.$store.state.spellFilters.componentVerbal
      },
      set (newValue) {
        this.$store.commit('spellFilters/setComponentVerbal', newValue)
      }
    },

    componentSomatic: {
      get () {
        return this.$store.state.spellFilters.componentSomatic
      },
      set (newValue) {
        this.$store.commit('spellFilters/setComponentSomatic', newValue)
      }
    },

    componentMaterial: {
      get () {
        return this.$store.state.spellFilters.componentMaterial
      },
      set (newValue) {
        this.$store.commit('spellFilters/setComponentMaterial', newValue)
      }
    },

    mustBeConcentration: {
      get () {
        return this.$store.state.spellFilters.mustBeConcentration
      },
      set (newValue) {
        this.$store.commit('spellFilters/setMustBeConcentration', newValue)
      }
    },

    mustBeRitual: {
      get () {
        return this.$store.state.spellFilters.mustBeRitual
      },
      set (newValue) {
        this.$store.commit('spellFilters/setMustBeRitual', newValue)
      }
    }
  },

  methods: {

    switchClass () {
      let list = []
      for (var i = 0; i < this.classes.length; i++) {
        if (this.classes[i].value) {
          list.push(this.classes[i].label)
        }
      }
      setUrlParams('classes', list)
    },

    switchSchool () {
      let list = []
      for (var i = 0; i < this.schools.length; i++) {
        if (this.schools[i].value) {
          list.push(this.schools[i].label)
        }
      }
      setUrlParams('ecoles', list)
    },

    switchLevel () {
      let list = []
      for (var i = 0; i < this.levels.length; i++) {
        if (this.levels[i].value) {
          list.push(this.levels[i].level)
        }
      }
      setUrlParams('niveaux', list)
    },

    switchComponentVerbal () {
      let value = []
      if ((this.componentVerbal !== undefined)) {
        value[0] = this.componentVerbal
      }
      setUrlParams('v', value)
    },

    switchComponentSomatic () {
      let value = []
      if ((this.componentSomatic !== undefined)) {
        value[0] = this.componentSomatic
      }
      setUrlParams('s', value)
    },

    switchComponentMaterial () {
      let value = []
      if ((this.componentMaterial !== undefined)) {
        value[0] = this.componentMaterial
      }
      setUrlParams('m', value)
    },

    switchMustBeConcentration () {
      let value = []
      if ((this.mustBeConcentration !== undefined)) {
        value[0] = this.mustBeConcentration
      }
      setUrlParams('c', value)
    },

    switchMustBeRitual () {
      let value = []
      if ((this.mustBeRitual !== undefined)) {
        value[0] = this.mustBeRitual
      }
      setUrlParams('r', value)
    },

    isSchool (school) {
      return this.schools.indexOf(school) > -1
    },

    setColor (value, compare, color) {
      if (value === compare) {
        return color
      }
      return this.$site.themeConfig.primaryColor
    },

    levelDisplay (level) {
      if (level.level == 0) {
        return 'Tour de magie'
      } else if (level.level == 1) {
        return level.level.toString() + '<sup>er</sup>'
      }
      return level.level.toString() + '<sup>ème</sup>'
    },

    resetClasses () {
      this.$store.commit('spellFilters/resetClasses')
      this.switchClass()
    },

    resetLevels () {
      this.$store.commit('spellFilters/resetLevels')
      this.switchLevel()
    },

    resetSchools () {
      this.$store.commit('spellFilters/resetSchools')
      this.switchSchool()
    },
  },

  mounted () {
    this.$store.dispatch('spellFilters/reset')

    let selectedSchools = getUrlParameter(window.location.href, "ecoles").split(",")
    let selectedClasses = getUrlParameter(window.location.href, "classes").split(",")
    let selectedLevels = getUrlParameter(window.location.href, "niveaux").split(",")
    let componentVerbal = getUrlParameter(window.location.href, "v")
    let componentSomatic = getUrlParameter(window.location.href, "s")
    let componentMaterial = getUrlParameter(window.location.href, "m")
    let mustBeConcentration = getUrlParameter(window.location.href, "c")
    let mustBeRitual = getUrlParameter(window.location.href, "r")

    setListMutation(selectedClasses, this.$store, 'spellFilters/setClassesFromList')
    setListMutation(selectedLevels, this.$store, 'spellFilters/setLevelsFromList')
    setListMutation(selectedSchools, this.$store, 'spellFilters/setSchoolsFromList')

    setBooleanMutation(componentVerbal, this.$store, 'spellFilters/setComponentVerbal')
    setBooleanMutation(componentSomatic, this.$store, 'spellFilters/setComponentSomatic')
    setBooleanMutation(componentMaterial, this.$store, 'spellFilters/setComponentMaterial')

    setBooleanMutation(mustBeConcentration, this.$store, 'spellFilters/setMustBeConcentration')
    setBooleanMutation(mustBeRitual, this.$store, 'spellFilters/setMustBeRitual')
  }
}
</script>

<style lang="scss">
</style>
