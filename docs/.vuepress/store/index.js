import Vue from 'vue'
import Vuex from 'vuex'

import spellFilters from './modules/spellFilters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    spellFilters
  },

  state: {
    drawer: true,
    rightDrawer: false,
    hasRightDrawer: false,
    inRightDrawer: null,
  },

  getters: {
    drawer: state => state.drawer,
    rightDrawer: state => state.rightDrawer,
    hasRightDrawer: state => state.hasRightDrawer,
    inRightDrawer: state => state.inRightDrawer,
  },

  actions: {
    updateDrawer: ({ commit }, payload) => {
      commit('setDrawer', payload)
    },
    updateRightDrawer: ({ commit }, payload) => {
      commit('setRightDrawer', payload)
    },
    updateHasRightDrawer: ({ commit }, payload) => {
      commit('setHasRightDrawer', payload)
    },
    updateInRightDrawer: ({ commit }, payload) => {
      commit('setInRightDrawer', payload)
    },
  },

  mutations: {
    setDrawer: (state, payload) => {
      state.drawer = payload
    },
    setRightDrawer: (state, payload) => {
      state.rightDrawer = payload
    },
    setHasRightDrawer: (state, payload) => {
      state.hasRightDrawer = payload
    },
    setInRightDrawer: (state, payload) => {
      state.inRightDrawer = payload
    },
  },
})
