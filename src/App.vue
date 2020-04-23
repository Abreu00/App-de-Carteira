<template>
  <v-app>
    <Header />
    <v-content class="grey lighten-3">
      <router-view />
    </v-content>
    <Nav />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Nav from "./components/Nav";
import ActiveModel from "./indexedDB/ActiveModel";
import api from "./services/api";
import moment from "moment";

export default {
  name: "App",
  components: {
    Header,
    Nav
  },
  async created() {
    const actives = await ActiveModel.getAll();
    this.$store.commit("setActiveList", actives);
    if (actives.length === 0) {
      return this.goToCreateWallet();
    }
    if (this.shouldUpdatePrices()) {
      this.updatePrices();
    } else {
      this.$store.commit("updateBalance");
    }
  },
  methods: {
    async updatePrices() {
      const response = await api.get();
      this.$store.commit("updatePrices", response.data);
    },
    shouldUpdatePrices() {
      /*
        Returns if local prices should be updated by calling
        remote API, should return true once a day
      */
      const lastUpdate = Number(window.localStorage.getItem("lastUpdate"));
      const isSameDay = moment().isSame(moment(lastUpdate), "day");
      return !isSameDay;
    },
    goToCreateWallet() {
      this.$router.replace("/createwallet").catch(err => err);
    }
  }
};
</script>
