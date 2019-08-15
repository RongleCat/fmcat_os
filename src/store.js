import Vue from 'vue'
import Vuex from 'vuex'
import window from './store/window'
import desktop from './store/desktop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    window,
    desktop
  }
})
