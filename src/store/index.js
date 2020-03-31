import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isNavEnabled: true
  },
  mutations: {
    toogleBottomNav(state) {
      state.isNavEnabled = !state.isNavEnabled;
    }
  },
  actions: {},
  modules: {}
});
