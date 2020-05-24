import {sortByString} from '@theme/util/filterHelpers'
import { getResourceIndexInLibrary } from '@theme/util'

export default {
  namespaced: true,

  state: {
    spells: [],
    spellSlots: [],
    notPrintedSpells: []
  },

  getters: {
    spells: state => state.spells,
  },

  actions: {
    reset: ({ commit }) => {
      commit('resetSpells')
    },
    updateSpells: ({ commit }, payload) => {
      commit('setSpells', payload)
    },
    addSpell: ({ commit }, payload) => {
      commit('addSpell', payload)
    },
    removeSpell: ({ commit }, payload) => {
      commit('removeSpell', payload)
    },
  },

  mutations: {
    initialiseStore (state) {
			// Récupération des données utilisateurs depuis le navigateur
			if(localStorage.getItem('mySpells') && localStorage.getItem('mySpells') !== undefined) {
        let localStorageData = JSON.parse(localStorage.getItem('mySpells'))
        if (localStorageData.spells) {
          state.spells = localStorageData.spells
        }
        if (localStorageData.spellSlots) {
          state.spellSlots = localStorageData.spellSlots
        }
        if (localStorageData.notPrintedSpells) {
          state.notPrintedSpells = localStorageData.notPrintedSpells
        }
			}
		},
    setSpells: (state, payload) => {
      state.spells = payload
    },
    resetSpells: (state) => {
      state.spells = []
    },
    addSpell: (state, payload) => {
      state.spells.push(payload)
      state.spells.sort((a, b) => { return sortByString(a.title, b.title) })
    },
    updateSpell: (state, payload) => {
      let spellIndex = getResourceIndexInLibrary(payload, state.spells)
      if (spellIndex >= 0) {
        state.spells[spellIndex] = payload
      }
    },
    removeSpell: (state, payload) => {
      let spellIndex = getResourceIndexInLibrary(payload, state.spells)
      if (spellIndex >= 0) {
        state.spells.splice(spellIndex, 1)
      }
    },
    setSpellSlots: (state, payload) => {
      state.spellSlots = payload
    },
    setNotPrintedSpells: (state, payload) => {
      state.notPrintedSpells = payload
    },
    addNotPrintedSpell: (state, payload) => {
      let spellIndex = getResourceIndexInLibrary(payload, state.notPrintedSpells)
      if (!spellIndex >= 0) {
        state.notPrintedSpells.push(payload)
      }
    },
    removeNotPrintedSpell: (state, payload) => {
      let spellIndex = getResourceIndexInLibrary(payload, state.notPrintedSpells)
      if (spellIndex >= 0) {
        state.notPrintedSpells.splice(spellIndex, 1)
      }
    }
  }

}
