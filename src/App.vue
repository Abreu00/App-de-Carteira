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
import idb from "./indexedDB/idb";

export default {
  name: "App",
  components: {
    Header,
    Nav
  },
  created() {
    idb.getDB();
  }
};
</script>
