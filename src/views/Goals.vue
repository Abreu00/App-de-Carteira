<template>
  <v-container>
    <Active
      v-for="(active, index) in $store.state.activeList"
      :key="index"
      :ticker="active.ticker"
      :difference="index % 2 === 0 ? 100 : -100"
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
  async created() {},
  methods: {
    activeClick(_, ticker) {
      this.popup = {
        isVisible: true,
        ticker
      };
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
