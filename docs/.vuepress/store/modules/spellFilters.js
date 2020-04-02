import {setUrlParams} from '@theme/util/filterHelpers'

export default {
  namespaced: true,

  state: {
    search: '',
    mustBeConcentration: undefined,
    mustBeRitual: undefined,
    classes: [
      { label: "Barde", value: false },
      { label: "Clerc", value: false },
      { label: "Druide", value: false },
      { label: "Ensorceleur/Sorcelame", value: false },
      { label: "Magicien", value: false },
      { label: "Ombrelame", value: false },
      { label: "Paladin", value: false },
      { label: "Rôdeur", value: false },
      { label: "Sorcier", value: false },
    ],
    levels: [
      { level: 0, value: false },
      { level: 1, value: false },
      { level: 2, value: false },
      { level: 3, value: false },
      { level: 4, value: false },
      { level: 5, value: false },
      { level: 6, value: false },
      { level: 7, value: false },
      { level: 8, value: false },
      { level: 9, value: false },
    ],
    schools: [
      { label: "Abjuration", value: false },
      { label: "Enchantement", value: false },
      { label: "Divination", value: false },
      { label: "Évocation", value: false },
      { label: "Illusion", value: false },
      { label: "Invocation", value: false },
      { label: "Nécromancie", value: false },
      { label: "Transmutation", value: false },
    ],
    componentVerbal: undefined,
    componentSomatic: undefined,
    componentMaterial: undefined,
  },

  getters: {
    search: state => state.search,
    mustBeConcentration: state => state.mustBeConcentration,
    mustBeRitual: state => state.mustBeRitual,
    classes: state => state.classes,
    levels: state => state.levels,
    schools: state => state.schools,
    componentVerbal: state => state.componentVerbal,
    componentSomatic: state => state.componentSomatic,
    componentMaterial: state => state.componentMaterial,
  },

  actions: {
    reset: ({ commit }) => {
      commit('resetSearch')
      commit('resetMustBeConcentration')
      commit('resetMustBeRitual')
      commit('resetClasses')
      commit('resetLevels')
      commit('resetSchools')
      commit('resetComponentVerbal')
      commit('resetComponentSomatic')
      commit('resetComponentMaterial')
    },
    updateSearch: ({ commit }, payload) => {
      commit('setSearch', payload)
    },
    updateMustBeConcentration: ({ commit }, payload) => {
      commit('setMustBeConcentration', payload)
    },
    updateMustBeRitual: ({ commit }, payload) => {
      commit('setMustBeRitual', payload)
    },
    updateClasses: ({ commit }, payload) => {
      commit('setClasses', payload)
    },
    updateClassesFromList: ({ commit }, payload) => {
      commit('setClassesFromList', payload)
    },
    resetClasses: ({ commit }) => {
      commit('resetClasses')
    },
    updateLevels: ({ commit }, payload) => {
      commit('setLevels', payload)
    },
    updateLevelsFromList: ({ commit }, payload) => {
      commit('setLevelsFromList', payload)
    },
    resetLevels: ({ commit }) => {
      commit('resetLevels')
    },
    updateSchools: ({ commit }, payload) => {
      commit('setSchools', payload)
    },
    updateSchoolsFromLst: ({ commit }, payload) => {
      commit('setSchoolsFromList', payload)
    },
    resetSchools: ({ commit }) => {
      commit('resetSchools')
    },
    updateComponentVerbal: ({ commit }, payload) => {
      commit('setComponentVerbal', payload)
    },
    updateComponentSomatic: ({ commit }, payload) => {
      commit('setComponentSomatic', payload)
    },
    updateComponentMaterial: ({ commit }, payload) => {
      commit('setComponentMaterial', payload)
    },
  },

  mutations: {
    setSearch: (state, payload) => {
      state.search = payload
    },
    resetSearch: (state) => {
      state.search = ''
    },
    setMustBeConcentration: (state, payload) => {
      state.mustBeConcentration = payload
    },
    resetMustBeConcentration: (state) => {
      state.mustBeConcentration = undefined
    },
    setMustBeRitual: (state, payload) => {
      state.mustBeRitual = payload
    },
    resetMustBeRitual: (state) => {
      state.mustBeRitual = undefined
    },
    setClasses: (state, payload) => {
      state.classes = payload
    },
    setClassesFromList: (state, payload) => {
      for (let i = 0; i < payload.length; i++) {
        let idx = state.classes.findIndex(item => {
          return item.label == payload[i]
        })
        if (idx > -1) {
          state.classes[idx].value = true
        }
      }
    },
    resetClasses: (state) => {
      state.classes = [
        { label: "Barde", value: false },
        { label: "Clerc", value: false },
        { label: "Druide", value: false },
        { label: "Ensorceleur/Sorcelame", value: false },
        { label: "Magicien", value: false },
        { label: "Ombrelame", value: false },
        { label: "Paladin", value: false },
        { label: "Rôdeur", value: false },
        { label: "Sorcier", value: false },
      ]
    },
    setLevels: (state, payload) => {
      state.levels = payload
    },
    setLevelsFromList: (state, payload) => {
      for (let i = 0; i < payload.length; i++) {
        let idx = state.levels.findIndex(item => {
          return item.level == payload[i]
        })
        if (idx > -1) {
          state.levels[idx].value = true
        }
      }
    },
    resetLevels: (state) => {
      state.levels = [
        { level: 0, value: false },
        { level: 1, value: false },
        { level: 2, value: false },
        { level: 3, value: false },
        { level: 4, value: false },
        { level: 5, value: false },
        { level: 6, value: false },
        { level: 7, value: false },
        { level: 8, value: false },
        { level: 9, value: false },
      ]
    },
    setSchools: (state, payload) => {
      state.schools = payload
    },
    setSchoolsFromList: (state, payload) => {
      for (let i = 0; i < payload.length; i++) {
        let idx = state.schools.findIndex(item => {
          return item.label == payload[i]
        })
        if (idx > -1) {
          state.schools[idx].value = true
        }
      }
    },
    resetSchools: (state) => {
      state.schools = [
        { label: "Abjuration", value: false },
        { label: "Enchantement", value: false },
        { label: "Divination", value: false },
        { label: "Évocation", value: false },
        { label: "Illusion", value: false },
        { label: "Invocation", value: false },
        { label: "Nécromancie", value: false },
        { label: "Transmutation", value: false },
      ]
    },
    setComponentVerbal: (state, payload) => {
      state.componentVerbal = payload
    },
    resetComponentVerbal: (state) => {
      state.componentVerbal = undefined
    },
    setComponentSomatic: (state, payload) => {
      state.componentSomatic = payload
    },
    resetComponentSomatic: (state) => {
      state.componentSomatic = undefined
    },
    setComponentMaterial: (state, payload) => {
      state.componentMaterial = payload
    },
    resetComponentMaterial: (state) => {
      state.componentMaterial = undefined
    },
  }

}
