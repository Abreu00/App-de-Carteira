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

export default {
  name: "App",
  components: {
    Header,
    Nav
  },
  async created() {
    const actives = await ActiveModel.getAll();
    this.$store.commit("setActives", actives);
  }
};
</script>
