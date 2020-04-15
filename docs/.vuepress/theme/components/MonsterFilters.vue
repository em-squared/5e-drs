<template>
  <div class="monster-filters pa-1">

    <v-text-field
      class="mb-1"
      v-model="search"
      label="Filtrer"
      single-line
      hide-details
      color="accent"
      ></v-text-field>

    <v-expansion-panels multiple flat hover v-model="panels">

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



    </v-expansion-panels>

  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
import { setUrlParams, getUrlParameter, setBooleanMutation, setListMutation } from '@theme/util/filterHelpers'

export default {
  name: 'MonsterFilters',

  data () {
    return {
      panels: [],
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
  },

  methods: {

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
      setUrlParams('raretes', list)
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
  },

  mounted () {
    this.$store.dispatch('monsterFilters/reset')

    let selectedSizes = getUrlParameter(window.location.href, "raretes").split(",")
    let selectedTypes = getUrlParameter(window.location.href, "types").split(",")

    setListMutation(selectedTypes, this.$store, 'monsterFilters/setTypesFromList')
    setListMutation(selectedSizes, this.$store, 'monsterFilters/setSizesFromList')
  }
}
</script>

<style lang="scss">
</style>
