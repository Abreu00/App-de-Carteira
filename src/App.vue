<template>
  <v-app>
    <Header />
    <v-content>
      <router-view />
    </v-content>
    <Nav />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Header,
    Nav
  }
};
</script>
