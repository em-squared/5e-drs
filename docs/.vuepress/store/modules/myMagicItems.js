import {sortByString} from '@theme/util/filterHelpers'

export default {
  namespaced: true,

  state: {
    magicItems: [],
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
        state.magicItems = localStorageData.magicItems
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
      state.magicItems.forEach((magicItem, idx) => {
        if (magicItem.key == payload.key) {
          state.magicItems[idx] = payload
        }
      })
    },
    removeMagicItem: (state, payload) => {
      state.magicItems.forEach((magicItem, idx) => {
        if (magicItem.key == payload.key) {
          state.magicItems.splice(idx, 1)
        }
      })
    },
  }

}
