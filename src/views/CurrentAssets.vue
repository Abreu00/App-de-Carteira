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
          <Doughnut :actives="actives" />
        </ChartContainer>
      </v-container>
      <v-list>
        <div v-for="(active, index) in actives" :key="index">
          <v-divider class="blue lighten-3" />
          <OnWalletActive
            :ticker="active.ticker"
            :vuetifyColor="colors[index]"
            :desiredPctg="active.desiredPctg"
            :currentPctg="getRealPercentage(active)"
          />
        </div>
      </v-list>
    </v-card>
    <AddActiveDialog v-model="popup.isVisible" :isBuying="popup.isBuying" :options="tickers" />
  </v-container>
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
    popup: {
      isVisible: false,
      isBuying: null
    }
  }),
  computed: {
    balance() {
      return this.$store.state.balance;
    },
    actives() {
      return this.$store.state.activeList;
    },
    colors() {
      return COLORS.map(color => color.vuetify);
    },
    tickers() {
      return this.actives.map(active => active.ticker);
    }
  },
  async created() {},
  methods: {
    tooglePopUp(_, isBuying) {
      this.popup = {
        isVisible: !this.popup.isVisibile,
        isBuying
      };
    },
    getRealPercentage(active) {
      return (((active.price * active.quotes) / this.balance) * 100).toFixed(2);
    }
  }
};
</script>
<style></style>
