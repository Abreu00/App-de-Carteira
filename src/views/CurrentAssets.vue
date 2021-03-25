<template>
  <v-container>
    <v-card>
      <v-card-title class="justify-space-between">
        <span>{{ $t("currentWallet") }}</span>
        <div v-if="balance > 0">
          <v-btn icon @click="tooglePopUp($event, false)" class="red--text mr-1">
            <v-icon>remove_circle</v-icon>
          </v-btn>
          <v-btn icon @click="tooglePopUp($event, true)" class="green--text">
            <v-icon>add_circle</v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <v-container class="relative">
        <ChartContainer>
          <Doughnut :actives="actives" :activeDataHandler="getRealPercentage" />
        </ChartContainer>
        <div class="absolute d-flex flex-column align-center" v-if="balance === 0">
          <p class="ma-0 title">{{ $t("youDontHaveAnyAssets") }}</p>
          <v-btn class="green--text large-btn" icon @click="tooglePopUp($event, true)">
            <v-icon size="120">add_circle</v-icon>
          </v-btn>
        </div>
      </v-container>
      <v-list>
        <div v-for="(active, index) in actives" :key="index">
          <v-divider class="blue lighten-3" />
          <OnWalletActive :active="active" :vuetifyColor="colors[index]" />
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
    },
    message: "Você Ainda não possui ativos"
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
  methods: {
    tooglePopUp(_, isBuying) {
      this.popup = {
        isVisible: !this.popup.isVisibile,
        isBuying
      };
    },
    getRealPercentage(active) {
      return Number(
        (((active.price * active.quotes) / this.balance) * 100).toFixed(2)
      );
    }
  }
};
</script>
<style scoped>
.relative {
  position: relative;
}
.absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.large-btn {
  height: 9rem;
  width: 9rem;
}
</style>
