import Vue from 'vue'
import Vuex from 'vuex'

import spellFilters from './modules/spellFilters'
import magicItemFilters from './modules/magicItemFilters'
import monsterFilters from './modules/monsterFilters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    spellFilters,
    magicItemFilters,
    monsterFilters
  },

  state: {
    loading: false,
    drawer: true,
    rightDrawer: false,
    hasRightDrawer: false,
    inRightDrawer: null,
    isThemeDark: false,
  },

  getters: {
    loading: state => state.loading,
    drawer: state => state.drawer,
    rightDrawer: state => state.rightDrawer,
    hasRightDrawer: state => state.hasRightDrawer,
    inRightDrawer: state => state.inRightDrawer,
    isThemeDark: state => state.isThemeDark,
  },

  actions: {
    updateLoading: ({ commit }, payload) => {
      commit('setLoading', payload)
    },
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
    isThemeDark: ({ commit }, payload) => {
      commit('setIsThemeDark', payload)
    },
  },

  mutations: {
    setLoading: (state, payload) => {
      state.loading = payload
    },
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
    setIsThemeDark: (state, payload) => {
      state.isThemeDark = payload
    },
  },
})
