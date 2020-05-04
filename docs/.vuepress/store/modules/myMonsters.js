import {sortByString} from '@theme/util/filterHelpers'

export default {
  namespaced: true,

  state: {
    monsters: [],
    notPrintedMonsters: []
  },

  getters: {
    monsters: state => state.monsters,
  },

  actions: {
    reset: ({ commit }) => {
      commit('resetMonsters')
    },
    updateMonsters: ({ commit }, payload) => {
      commit('setMonsters', payload)
    },
    addMonster: ({ commit }, payload) => {
      commit('addMonster', payload)
    },
    removeMonster: ({ commit }, payload) => {
      commit('removeMonster', payload)
    },
  },

  mutations: {
    initialiseStore (state) {
			// Récupération des données utilisateurs depuis le navigateur
			if(localStorage.getItem('myMonsters') && localStorage.getItem('myMonsters') !== undefined) {
        let localStorageData = JSON.parse(localStorage.getItem('myMonsters'))
        if (localStorageData.monsters) {
          state.monsters = localStorageData.monsters
        }
        if (localStorageData.notPrintedMonsters) {
          state.notPrintedMonsters = localStorageData.notPrintedMonsters
        }
			}
		},
    setMonsters: (state, payload) => {
      state.monsters = payload
    },
    resetMonsters: (state) => {
      state.monsters = []
    },
    addMonster: (state, payload) => {
      state.monsters.push(payload)
      state.monsters.sort((a, b) => { return sortByString(a.title, b.title) })
    },
    updateMonster: (state, payload) => {
      state.monsters.forEach((monster, idx) => {
        if (monster.key == payload.key) {
          state.monsters[idx] = payload
        }
      })
    },
    removeMonster: (state, payload) => {
      state.monsters.forEach((monster, idx) => {
        if (monster.key == payload.key) {
          state.monsters.splice(idx, 1)
        }
      })
    },
    setNotPrintedMonsters: (state, payload) => {
      state.notPrintedMonsters = payload
    },
    addNotPrintedMonster: (state, payload) => {
      let monsterIndex = state.notPrintedMonsters.findIndex(monster => monster.key == payload.key)
      if (!monsterIndex >= 0) {
        state.notPrintedMonsters.push(payload)
      }
    },
    removeNotPrintedMonster: (state, payload) => {
      let monsterIndex = state.notPrintedMonsters.findIndex(monster => monster.key == payload.key)
      if (monsterIndex >= 0) {
        state.notPrintedMonsters.splice(monsterIndex, 1)
      }
    }
  }

}
