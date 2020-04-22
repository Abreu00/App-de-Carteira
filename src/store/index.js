import Vue from "vue";
import Vuex from "vuex";
import ActiveModel from "../indexedDB/ActiveModel";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isNavEnabled: true,
    activeList: [],
  },
  mutations: {
    toogleBottomNav(state) {
      state.isNavEnabled = !state.isNavEnabled;
    },
    setActiveList(state, activeList) {
      state.activeList = activeList;
    },
    activeTransaction(state, { ticker, transactionQuotes }) {
      const active = state.activeList.find(
        (active) => active.ticker === ticker
      );
      const newQuotesValue = active.quotes + transactionQuotes;
      active.quotes = newQuotesValue;
      ActiveModel.update(ticker, "quotes", newQuotesValue);
    },
  },
  actions: {},
  modules: {},
});
