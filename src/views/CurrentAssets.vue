<template>
  <v-container>
    <v-card>
      <v-card-title class="justify-space-between">
        <span>Carteira Atual</span>
        <v-menu :offset-y="true">
          <template v-slot:activator="{ on }">
            <v-btn icon slot="activator" v-on="on">
              <v-icon>more_horiz</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="tooglePopUp">Nova compra</v-list-item>
            <v-list-item @click="tooglePopUp">Nova venda</v-list-item>
          </v-list>
        </v-menu>
      </v-card-title>
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
    <AddActiveDialog v-model="popup" />
    <!-- <v-btn color="amber darken-4" dark @click="popup = true">Editar carteira</v-btn> -->
  </v-container>
  <!--     <v-btn fab bottom right fixed class="blue on-top" @click="tooglePopUp">
      <v-icon color="grey lighten-4">add</v-icon>
  </v-btn>-->
</template>

<script>
import AddActiveDialog from "@/components/dialogs/AddActiveDialog";
import Doughnut from "@/components/charts/Doughnut.js";
import ChartContainer from "@/components/charts/ChartContainer";
import OnWalletActive from "@/components/OnWalletActive";
import COLORS from "@/components/charts/colors.js";

export default {
  name: "Home",
  components: {
    AddActiveDialog,
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
  },
  methods: {
    tooglePopUp() {
      this.popup = !this.popup;
    }
  }
};
</script>
<style></style>
