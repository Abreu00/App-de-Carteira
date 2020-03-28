import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    actives: []
  },
  mutations: {
    setActives(state, newActives) {
      state.actives = newActives;
    }
  },
  actions: {},
  modules: {}
});
