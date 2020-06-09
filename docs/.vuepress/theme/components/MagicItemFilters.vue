<template>
  <div class="magic-item-filters pa-1">

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
        <v-expansion-panel-header>Types</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-btn class="mb-2 mt-2" small color="primary" @click="resetTypes" dark>Réinitialiser</v-btn>
          <v-switch v-for="(type, idx) in types" v-model="type.value" :label="type.label" dense class="ma-0" @change="switchType" color="accent"></v-switch>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Raretés</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-btn class="mb-2 mt-2" small color="primary" @click="resetRarities" dark>Réinitialiser</v-btn>
          <v-switch v-for="rarity in rarities" v-model="rarity.value" :label="rarity.label" dense class="ma-0" @change="switchRarity" color="accent"></v-switch>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Harmonisation</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="d-flex mt-2 mb-4">
            <v-btn-toggle v-model="hasAttunement" @change="switchHasAttunement" dark>
              <v-btn :value="true" small :color="setColor(hasAttunement, true, 'green')">
                <v-icon>mdi-check</v-icon>
              </v-btn>
              <v-btn :value="false" small :color="setColor(hasAttunement, false, 'red')">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-btn-toggle>

            <p class="mt-0 mb-0 ml-2">Harmonisation</p>
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
  name: 'MagicItemFilters',

  data () {
    return {
      panels: [],
    }
  },

  computed: {
    search: {
      get () {
        return this.$store.state.magicItemFilters.search
      },
      set (newValue) {
        this.$store.commit('magicItemFilters/setSearch', newValue)
      }
    },

    types: {
      get () {
        return this.$store.state.magicItemFilters.types
      },
      set (newValue) {
        this.$store.commit('magicItemFilters/setTypes', newValue)
      }
    },

    rarities: {
      get () {
        return this.$store.state.magicItemFilters.rarities
      },
      set (newValue) {
        this.$store.commit('magicItemFilters/setRarities', newValue)
      }
    },

    hasAttunement: {
      get () {
        return this.$store.state.magicItemFilters.hasAttunement
      },
      set (newValue) {
        this.$store.commit('magicItemFilters/setHasAttunement', newValue)
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

    switchRarity () {
      let list = []
      for (var i = 0; i < this.rarities.length; i++) {
        if (this.rarities[i].value) {
          list.push(this.rarities[i].label)
        }
      }
      setUrlParams('raretes', list)
    },

    switchHasAttunement () {
      let value = []
      if ((this.hasAttunement !== undefined)) {
        value[0] = this.hasAttunement
      }
      setUrlParams('harmonisation', value)
    },

    setColor (value, compare, color) {
      if (value === compare) {
        return color
      }
      return this.$site.themeConfig.primaryColor
    },

    resetTypes () {
      this.$store.commit('magicItemFilters/resetTypes')
      this.switchType()
    },

    resetRarities () {
      this.$store.commit('magicItemFilters/resetRarities')
      this.switchRarity()
    },
  },

  mounted () {
    this.$store.dispatch('magicItemFilters/reset')

    let selectedRarities = getUrlParameter(window.location.href, "raretes").split(",")
    let selectedTypes = getUrlParameter(window.location.href, "types").split(",")
    let hasAttunement = getUrlParameter(window.location.href, "harmonisation")

    setListMutation(selectedTypes, this.$store, 'magicItemFilters/setTypesFromList')
    setListMutation(selectedRarities, this.$store, 'magicItemFilters/setRaritiesFromList')

    setBooleanMutation(hasAttunement, this.$store, 'magicItemFilters/setHasAttunement')
  }
}
</script>

<style lang="scss">
</style>
