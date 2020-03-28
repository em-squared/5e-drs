import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true,
  },
  getters: {
    drawer: state => state.drawer,
  },
  actions: {
    updateDrawer: ({ commit }, payload) => {
      commit('setDrawer', payload)
    }
  },
  mutations: {
    setDrawer: (state, payload) => {
      state.drawer = payload
    },
  },
})
