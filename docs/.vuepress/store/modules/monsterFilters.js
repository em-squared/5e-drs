import {setUrlParams} from '@theme/util/filterHelpers'

export default {
  namespaced: true,

  state: {
    search: '',
    challengeRange: [0, 33],
    types: [
      { label: "Aberration", value: false },
      { label: "Bête", value: false },
      { label: "Céleste", value: false },
      { label: "Créature artificielle", value: false },
      { label: "Créature monstrueuse", value: false },
      { label: "Dragon", value: false },
      { label: "Élémentaire", value: false },
      { label: "Fée", value: false },
      { label: "Fiélon", value: false },
      { label: "Géant", value: false },
      { label: "Humanoïde", value: false },
      { label: "Mort-vivant", value: false },
      { label: "Plante", value: false },
      { label: "Vase", value: false },
    ],
    sizes: [
      { label: "Très petit", abbr:"TP", value: false },
      { label: "Petit", abbr:"P", value: false },
      { label: "Moyen", abbr:"M", value: false },
      { label: "Grand", abbr:"G", value: false },
      { label: "Très grand", abbr:"TG", value: false },
      { label: "Gigantesque", abbr:"Gig", value: false },
    ],
    environments: [
      { label: "Arctique / Subarctique", value: false },
      { label: "Bois / Forêt", value: false },
      { label: "Collines / Vallées", value: false },
      { label: "Désert chaud", value: false },
      { label: "Jungle", value: false },
      { label: "Littoral", value: false },
      { label: "Mangrove / Marécage", value: false },
      { label: "Mer / Océan", value: false },
      { label: "Montagnes", value: false },
      { label: "Plaine / Champs / Prairie / Savane", value: false },
      { label: "Plans élémentaires", value: false },
    ],
    dungeonTypes: [
      { label: "Caverne aménagée", value: false },
      { label: "Caverne naturelle", value: false },
      { label: "Caverne sous-marine", value: false },
      { label: "Donjon maçonné", value: false },
      { label: "Ruines extérieures", value: false },
      { label: "Ruines souterraines", value: false },
      { label: "Ruines sous-marines", value: false },
    ],
  },

  getters: {
    search: state => state.search,
    types: state => state.types,
    sizes: state => state.sizes,
    environments: state => state.environments,
    dungeonTypes: state => state.dungeonTypes,
  },

  actions: {
    reset: ({ commit }) => {
      commit('resetSearch')
      commit('resetTypes')
      commit('resetSizes')
      commit('resetEnvironments')
      commit('resetDungeonTypes')
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
    updateSizes: ({ commit }, payload) => {
      commit('setSizes', payload)
    },
    updateSizesFromLst: ({ commit }, payload) => {
      commit('setSizesFromList', payload)
    },
    resetSizes: ({ commit }) => {
      commit('resetSizes')
    },
    updateEnvironments: ({ commit }, payload) => {
      commit('setEnvironments', payload)
    },
    updateEnvironentsFromLst: ({ commit }, payload) => {
      commit('setEnvironmentsFromList', payload)
    },
    resetEnvironments: ({ commit }) => {
      commit('resetEnvironments')
    },
    updateDungeonTypes: ({ commit }, payload) => {
      commit('setDungeonTypes', payload)
    },
    updateDungeonTypesFromLst: ({ commit }, payload) => {
      commit('setDungeonTypesFromList', payload)
    },
    resetDungeonTypes: ({ commit }) => {
      commit('resetDungeonTypes')
    },
  },

  mutations: {
    setSearch: (state, payload) => {
      state.search = payload
    },
    resetSearch: (state) => {
      state.search = ''
    },
    setChallengeRange: (state, payload) => {
      state.challengeRange = payload
    },
    resetChallengeRange: (state, payload) => {
      state.challengeRange = [0, 33]
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
        { label: "Aberration", value: false },
        { label: "Bête", value: false },
        { label: "Céleste", value: false },
        { label: "Créature artificielle", value: false },
        { label: "Créature monstrueuse", value: false },
        { label: "Dragon", value: false },
        { label: "Élémentaire", value: false },
        { label: "Fée", value: false },
        { label: "Fiélon", value: false },
        { label: "Géant", value: false },
        { label: "Humanoïde", value: false },
        { label: "Mort-vivant", value: false },
        { label: "Plante", value: false },
        { label: "Vase", value: false },
      ]
    },
    setSizes: (state, payload) => {
      state.sizes = payload
    },
    setSizesFromList: (state, payload) => {
      for (let i = 0; i < payload.length; i++) {
        let idx = state.sizes.findIndex(item => {
          return item.label == payload[i]
        })
        if (idx > -1) {
          state.sizes[idx].value = true
        }
      }
    },
    resetSizes: (state) => {
      state.sizes = [
        { label: "Très petit", abbr:"TP", value: false },
        { label: "Petit", abbr:"P", value: false },
        { label: "Moyen", abbr:"M", value: false },
        { label: "Grand", abbr:"G", value: false },
        { label: "Très grand", abbr:"TG", value: false },
        { label: "Gigantesque", abbr:"Gig", value: false },
      ]
    },
    setEnvironments: (state, payload) => {
      state.environments = payload
    },
    setEnvironmentsFromList: (state, payload) => {
      for (let i = 0; i < payload.length; i++) {
        let idx = state.environments.findIndex(item => {
          return item.label == payload[i]
        })
        if (idx > -1) {
          state.environments[idx].value = true
        }
      }
    },
    resetEnvironments: (state) => {
      state.environments = [
        { label: "Arctique / Subarctique", value: false },
        { label: "Bois / Forêt", value: false },
        { label: "Collines / Vallées", value: false },
        { label: "Désert chaud", value: false },
        { label: "Jungle", value: false },
        { label: "Littoral", value: false },
        { label: "Mangrove / Marécage", value: false },
        { label: "Mer / Océan", value: false },
        { label: "Montagnes", value: false },
        { label: "Plaine / Champs / Prairie / Savane", value: false },
        { label: "Plans élémentaires", value: false },
      ]
    },
    setDungeonTypes: (state, payload) => {
      state.dungeonTypes = payload
    },
    setDungeonTypesFromList: (state, payload) => {
      for (let i = 0; i < payload.length; i++) {
        let idx = state.dungeonTypes.findIndex(item => {
          return item.label == payload[i]
        })
        if (idx > -1) {
          state.dungeonTypes[idx].value = true
        }
      }
    },
    resetDungeonTypes: (state) => {
      state.dungeonTypes = [
        { label: "Caverne aménagée", value: false },
        { label: "Caverne naturelle", value: false },
        { label: "Caverne sous-marine", value: false },
        { label: "Donjon maçonné", value: false },
        { label: "Ruines extérieures", value: false },
        { label: "Ruines souterraines", value: false },
        { label: "Ruines sous-marines", value: false },
      ]
    },
  }

}
