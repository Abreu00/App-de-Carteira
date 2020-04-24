import Vue from "vue";
import Vuex from "vuex";
import ActiveModel from "../indexedDB/ActiveModel";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isNavEnabled: true,
    activeList: [],
    balance: 0,
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
      state.balance += transactionQuotes * active.price;
      active.quotes = newQuotesValue;
      ActiveModel.update(ticker, "quotes", newQuotesValue);
    },
    updateBalance(state) {
      const { activeList } = state;
      state.balance = activeList.reduce((balance, active) => {
        return balance + active.quotes * active.price;
      }, 0);
    },
    updatePrices(state, priceList) {
      // Updates local app and db prices based on
      // remote api prices, and also calculate current
      // user balance based on those prices
      const { activeList } = state;
      let balance = 0;
      activeList.forEach((active) => {
        const { price } = priceList.find(
          (ApiActive) => ApiActive.ticker === active.ticker
        );
        active.price = price;
        ActiveModel.update(active.ticker, "price", price);
        balance += price * active.quotes;
      });
      state.balance = balance;
      window.localStorage.setItem("lastUpdate", new Date().valueOf());
    },
    clearActiveList(state) {
      state.activeList = [];
    },
  },
  getters: {
    getActive: (state) => (ticker) => {
      return state.activeList.find((active) => active.ticker === ticker);
    },
  },
});
