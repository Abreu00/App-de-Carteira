<template>
  <v-bottom-navigation
    v-if="isNavEnabled"
    app
    grow
    color="blue darken-3"
    background-color="grey lighten-5"
  >
    <v-btn to="/">
      <span>{{ $t("current") }}</span>
      <v-icon>account_balance</v-icon>
    </v-btn>
    <v-btn to="/consolidada">
      <span>{{ $t("target") }}</span>
      <v-icon>bar_chart</v-icon>
    </v-btn>
    <v-btn to="/goals">
      <span>{{ $t("goals") }}</span>
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
