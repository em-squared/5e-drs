import {sortByString} from '@theme/util/filterHelpers'
import { getResourceIndexInLibrary } from '@theme/util'

export default {
  namespaced: true,

  state: {
    magicItems: [],
    notPrintedMagicItems: []
  },

  getters: {
    magicItems: state => state.magicItems,
  },

  actions: {
    reset: ({ commit }) => {
      commit('resetMagicItems')
    },
    updateMagicItems: ({ commit }, payload) => {
      commit('setMagicItems', payload)
    },
    addMagicItem: ({ commit }, payload) => {
      commit('addMagicItem', payload)
    },
    removeMagicItem: ({ commit }, payload) => {
      commit('removeMagicItem', payload)
    },
  },

  mutations: {
    initialiseStore (state) {
			// Récupération des données utilisateurs depuis le navigateur
			if(localStorage.getItem('myMagicItems') && localStorage.getItem('myMagicItems') !== undefined) {
        let localStorageData = JSON.parse(localStorage.getItem('myMagicItems'))
        if (localStorageData.magicItems) {
          state.magicItems = localStorageData.magicItems
        }
        if (localStorageData.notPrintedMagicItems) {
          state.notPrintedMagicItems = localStorageData.notPrintedMagicItems
        }
			}
		},
    setMagicItems: (state, payload) => {
      state.magicItems = payload
    },
    resetMagicItems: (state) => {
      state.magicItems = []
    },
    addMagicItem: (state, payload) => {
      state.magicItems.push(payload)
      state.magicItems.sort((a, b) => { return sortByString(a.title, b.title) })
    },
    updateMagicItem: (state, payload) => {
      let magicItemIndex = getResourceIndexInLibrary(payload, state.magicItems)
      if (magicItemIndex >= 0) {
        state.magicItems[magicItemIndex] = payload
      }
    },
    removeMagicItem: (state, payload) => {
      let magicItemIndex = getResourceIndexInLibrary(payload, state.magicItems)
      if (magicItemIndex >= 0) {
        state.magicItems.splice(magicItemIndex, 1)
      }
    },
    setNotPrintedMagicItems: (state, payload) => {
      state.notPrintedMagicItems = payload
    },
    addNotPrintedMagicItem: (state, payload) => {
      let magicItemIndex = getResourceIndexInLibrary(payload, state.notPrintedMagicItems)
      if (!magicItemIndex >= 0) {
        state.notPrintedMagicItems.push(payload)
      }
    },
    removeNotPrintedMagicItem: (state, payload) => {
      let magicItemIndex = getResourceIndexInLibrary(payload, state.notPrintedMagicItems)
      if (magicItemIndex >= 0) {
        state.notPrintedMagicItems.splice(magicItemIndex, 1)
      }
    }
  }

}
