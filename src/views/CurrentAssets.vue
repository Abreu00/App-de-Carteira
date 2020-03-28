<template>
  <v-container>
    <v-card>
      <v-card-title class="justify-space-between">
        <span>Carteira Atual</span>
        <div>
          <v-btn icon @click="tooglePopUp($event, false)" class="red--text mr-1">
            <v-icon>remove_circle</v-icon>
          </v-btn>
          <v-btn icon @click="tooglePopUp($event, true)" class="green--text">
            <v-icon>add_circle</v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <v-container>
        <ChartContainer>
          <Doughnut :actives="$store.state.actives" />
        </ChartContainer>
      </v-container>
      <v-list>
        <div v-for="(active, index) in $store.state.actives" :key="index">
          <v-divider class="blue lighten-3" />
          <OnWalletActive :ticker="active.ticker" :vuetifyColor="colors[index]" />
        </div>
      </v-list>
    </v-card>
    <AddActiveDialog v-model="popup.isVisible" :isBuying="popup.isBuying" />
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
//import firestore from "@/firestore.js";

export default {
  name: "Home",
  components: {
    AddActiveDialog,
    Doughnut,
    ChartContainer,
    OnWalletActive
  },
  data: () => ({
    popup: {
      isVisible: false,
      isBuying: null
    }
  }),
  computed: {
    colors() {
      return COLORS.map(color => color.vuetify);
    }
  },
  methods: {
    tooglePopUp(_, isBuying) {
      this.popup = {
        isVisible: !this.popup.isVisibile,
        isBuying
      };
    }
  }
};
</script>
<style></style>
