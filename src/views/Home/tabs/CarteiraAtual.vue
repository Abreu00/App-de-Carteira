<template>
  <v-container>
    <v-card>
      <v-card-title>Carteira Atual</v-card-title>
      <v-container class="doughnut-size">
        <ChartContainer>
          <Doughnut />
        </ChartContainer>
      </v-container>
      <v-list>
        <div v-for="number in 5" :key="number">
          <v-divider class="blue lighten-3" />
          <OnWalletActive ticker="WEGE3" :vuetifyColor="colors[number - 1]" />
        </div>
      </v-list>
    </v-card>
    <!-- <v-btn color="amber darken-4" dark @click="popup = true">Editar carteira</v-btn> -->
  </v-container>
</template>

<script>
import Doughnut from "@/components/charts/Doughnut.js";
import ChartContainer from "@/components/charts/ChartContainer";
import OnWalletActive from "@/components/OnWalletActive";
import COLORS from "@/components/charts/colors.js";

export default {
  name: "TabCarteiraAtual",
  components: {
    Doughnut,
    ChartContainer,
    OnWalletActive
  },
  data: () => ({
    popup: false
  }),
  computed: {
    colors() {
      return COLORS.map(color => color.vuetify);
    }
  }
};
</script>
<style>
.doughnut-size {
  height: 16rem;
}
</style>