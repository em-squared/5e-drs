import {sortByString} from '@theme/util/filterHelpers'
import { getResourceIndexInLibrary } from '@theme/util'
import { ENCOUNTERLEVELS } from '../../data/monsters'
import { getPCbyChallenge } from '@theme/util/monsterHelpers'

export default {
  namespaced: true,

  state: {
    creatures: [],
    pc: 4,
    level: ENCOUNTERLEVELS[0].level,
  },

  getters: {
    creatures: state => state.creatures,
    pc: state => state.pc,
    level: state => state.level,
  },

  actions: {
    reset: ({ commit }) => {
      commit('resetCreatures')
    },
    updateCreatures: ({ commit }, payload) => {
      commit('setCreatures', payload)
    },
    resetCreatures: ({ commit }) => {
      commit('resetCreatures')
    },
    addCreature: ({ commit }, payload) => {
      commit('addCreature', payload)
    },
    removeCreature: ({ commit }, payload) => {
      commit('removeCreature', payload)
    },
    setCreatureQty: ({ commit }, payload) => {
      commit('setCreatureQty', payload)
    },
  },

  mutations: {
    setCreatures: (state, payload) => {
      state.creatures = payload
    },
    resetCreatures: (state) => {
      state.creatures = []
    },
    addCreature: (state, payload) => {
      // payload.qty = 1
      let c = Object.assign({}, payload)
      c.ally = false
      state.creatures.push(c)
      c = null
      // state.creatures.sort((a, b) => { return sortByString(a.title, b.title) })
    },
    updateCreatures: (state, payload) => {
      let creatureIndex = getResourceIndexInLibrary(payload, state.creatures)
      if (creatureIndex >= 0) {
        state.creatures[creatureIndex] = payload
      }
    },
    removeCreature: (state, payload) => {
      if (payload >= 0) {
        state.creatures.splice(payload, 1)
      }
    },
    switchCampCreature: (state, payload) => {
      if (payload >= 0) {
        state.creatures[payload].ally = !state.creatures[payload].ally
      }
    },
    setCreatureQty: (state, payload) => {
      let creatureIndex = getResourceIndexInLibrary(payload.creature, state.creatures)
      if (creatureIndex >= 0) {
        if (Number(payload.qty) > 0) {
          state.creatures[creatureIndex].qty = Number(payload.qty)
        } else {
          let creatureIndex = getResourceIndexInLibrary(payload.creature, state.creatures)
          if (creatureIndex >= 0) {
            state.creatures.splice(creatureIndex, 1)
          }
        }
      }
    },
    setPC: (state, payload) => {
      state.pc = payload
    },
    setLevel: (state, payload) => {
      state.level = payload
    },
  }

}
