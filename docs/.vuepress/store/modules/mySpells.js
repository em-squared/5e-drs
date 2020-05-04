import {sortByString} from '@theme/util/filterHelpers'

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
        state.spells = localStorageData.spells
        state.spellSlots = localStorageData.spellSlots
        state.notPrintedSpells = localStorageData.notPrintedSpells
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
      state.spells.forEach((spell, idx) => {
        if (spell.key == payload.key) {
          state.spells[idx] = payload
        }
      })
    },
    removeSpell: (state, payload) => {
      state.spells.forEach((spell, idx) => {
        if (spell.key == payload.key) {
          state.spells.splice(idx, 1)
        }
      })
    },
    setSpellSlots: (state, payload) => {
      state.spellSlots = payload
    },
    addNotPrintedSpell: (state, payload) => {
      let spellIndex = state.notPrintedSpells.findIndex(spell => spell.key == payload.key)
      if (!spellIndex >= 0) {
        state.notPrintedSpells.push(payload)
      }
    },
    removeNotPrintedSpell: (state, payload) => {
      let spellIndex = state.notPrintedSpells.findIndex(spell => spell.key == payload.key)
      if (spellIndex >= 0) {
        state.notPrintedSpells.splice(spellIndex, 1)
      }
    }
  }

}
