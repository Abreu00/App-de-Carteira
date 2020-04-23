<template>
  <v-container>
    <Active
      v-for="(active, index) in $store.state.activeList"
      :key="index"
      :ticker="active.ticker"
      :difference="calc(active)"
      :quotes="active.quotes"
      @click.native="activeClick($event, active.ticker)"
    />
    <AddActiveDialog v-model="popup.isVisible" :defaultTicker="popup.ticker" />
  </v-container>
</template>
<script>
import Active from "../components/Active";
import AddActiveDialog from "@/components/dialogs/AddActiveDialog";

export default {
  name: "Goals",
  components: {
    Active,
    AddActiveDialog
  },
  data: () => ({
    popup: {
      isVisible: false,
      ticker: ""
    }
  }),
  methods: {
    activeClick(_, ticker) {
      this.popup = {
        isVisible: true,
        ticker
      };
    },
    calc(active) {
      const balance = this.$store.state.balance;
      const targetValue = (balance * active.desiredPctg) / 100;
      const realValue = active.price * active.quotes;
      return Number((targetValue - realValue).toFixed(2));
    }
  }
};
</script>

<style>
.force-center {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
</style>
