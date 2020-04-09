import {setUrlParams} from '@theme/util/filterHelpers'

export default {
  namespaced: true,

  state: {
    search: '',
    types: [
      { label: "Anneau", value: false },
      { label: "Arme", value: false },
      { label: "Armure", value: false },
      { label: "Baguette", value: false },
      { label: "Bâton", value: false },
      { label: "Objet merveilleux", value: false },
      { label: "Parchemin", value: false },
      { label: "Potion", value: false },
      { label: "Sceptre", value: false },
    ],
    rarities: [
      { label: "Courant", value: false },
      { label: "Peu courant", value: false },
      { label: "Rare", value: false },
      { label: "Très rare", value: false },
      { label: "Légendaire", value: false },
      { label: "Artefact", value: false },
    ],
    hasAttunement: undefined,
  },

  getters: {
    search: state => state.search,
    types: state => state.types,
    rarities: state => state.rarities,
    hasAttunement: state => state.hasAttunement,
  },

  actions: {
    reset: ({ commit }) => {
      commit('resetSearch')
      commit('resetTypes')
      commit('resetRarities')
      commit('resetHasAttunement')
    },
    updateSearch: ({ commit }, payload) => {
      commit('setSearch', payload)
    },
    updateTypes: ({ commit }, payload) => {
      commit('setTypes', payload)
    },
    updateTypesFromList: ({ commit }, payload) => {
      commit('setTypesFromList', payload)
    },
    resetTypes: ({ commit }) => {
      commit('resetTypes')
    },
    updateRarities: ({ commit }, payload) => {
      commit('setRarities', payload)
    },
    updateRaritiesFromLst: ({ commit }, payload) => {
      commit('setRaritiesFromList', payload)
    },
    resetRarities: ({ commit }) => {
      commit('resetRarities')
    },
    updateHasAttunement: ({ commit }, payload) => {
      commit('setHasAttunement', payload)
    },
  },

  mutations: {
    setSearch: (state, payload) => {
      state.search = payload
    },
    resetSearch: (state) => {
      state.search = ''
    },
    setTypes: (state, payload) => {
      state.types = payload
    },
    setTypesFromList: (state, payload) => {
      for (let i = 0; i < payload.length; i++) {
        let idx = state.types.findIndex(item => {
          return item.label == payload[i]
        })
        if (idx > -1) {
          state.types[idx].value = true
        }
      }
    },
    resetTypes: (state) => {
      state.types = [
        { label: "Anneau", value: false },
        { label: "Arme", value: false },
        { label: "Armure", value: false },
        { label: "Baguette", value: false },
        { label: "Bâton", value: false },
        { label: "Objet merveilleux", value: false },
        { label: "Parchemin", value: false },
        { label: "Potion", value: false },
        { label: "Sceptre", value: false },
      ]
    },
    setRarities: (state, payload) => {
      state.rarities = payload
    },
    setRaritiesFromList: (state, payload) => {
      for (let i = 0; i < payload.length; i++) {
        let idx = state.rarities.findIndex(item => {
          return item.label == payload[i]
        })
        if (idx > -1) {
          state.rarities[idx].value = true
        }
      }
    },
    resetRarities: (state) => {
      state.rarities = [
        { label: "Courant", value: false },
        { label: "Peu courant", value: false },
        { label: "Rare", value: false },
        { label: "Très rare", value: false },
        { label: "Légendaire", value: false },
        { label: "Artefact", value: false },
      ]
    },
    setHasAttunement: (state, payload) => {
      state.hasAttunement = payload
    },
    resetHasAttunement: (state) => {
      state.hasAttunement = undefined
    },
  }

}
