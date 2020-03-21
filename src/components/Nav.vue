<template>
  <v-bottom-navigation grow color="blue darken-3">
    <v-btn to="/">
      <span>Carteiras</span>
      <v-icon>bar_chart</v-icon>
    </v-btn>
    <v-btn to="/goals">
      <span>Metas</span>
      <v-icon>assignment_turned_in</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  name: "Nav"
};
</script>
