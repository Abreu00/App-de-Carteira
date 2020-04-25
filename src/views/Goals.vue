<template>
  <v-container>
    <Active
      v-for="(active, index) in $store.state.activeList"
      :key="index"
      :active="active"
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
