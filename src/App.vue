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

export default {
  name: "App",
  components: {
    Header,
    Nav
  },
  created() {
    //this.syncLocalActives();
    //this.syncRemoteActives();
  },
  methods: {
    async syncLocalActives() {
      const actives = await ActiveModel.getAll();
      this.$store.commit("setActives", actives);
    },
    async syncRemoteActives() {
      const res = await api.get();
      if (this.shouldSyncRemote()) {
        window.localStorage.setItem(new Date().getTime().toString());
        return console.log(res);
      }
      console.log("should not");
    },
    shouldSyncRemote() {
      const lastPriceUpdateStr = window.localStorage.getItem("lastPriceUpdate");
      if (isNaN(lastPriceUpdate)) {
        return false;
      }
      const lastPriceUpdate = new Date(parseInt(lastPriceUpdateStr));
      const today = new Date();
      return !this.isSameDay(lastPriceUpdate, today);
    },
    isSameDay(date1, date2) {
      return (
        date1.getDay() === date2.getDay() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getYear() === date2.getYear()
      );
    }
  }
};
</script>
