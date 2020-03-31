<template>
  <v-bottom-navigation
    app
    grow
    color="blue darken-3"
    background-color="grey lighten-5"
  >
    <v-btn to="/" :disabled="!isNavEnabled">
      <span>Atual</span>
      <v-icon>account_balance</v-icon>
    </v-btn>
    <v-btn to="/consolidada" :disabled="!isNavEnabled">
      <span>Consolidada</span>
      <v-icon>bar_chart</v-icon>
    </v-btn>
    <v-btn to="/goals" :disabled="!isNavEnabled">
      <span>Metas</span>
      <v-icon>assignment_turned_in</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  name: "Nav",
  computed: {
    isNavEnabled() {
      return this.$store.state.isNavEnabled;
    }
  }
};
</script>
