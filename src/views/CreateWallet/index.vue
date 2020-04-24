<template>
  <v-container class="pa-0">
    <transition name="form-appear">
      <CreationForm
        v-if="isCreating"
        :onCancel="toogleCreation"
        :activePriceList="activePriceList"
      />
    </transition>
    <div class="mt-12" v-if="!isCreating">
      <PromptCreation :onConfirm="toogleCreation" />
    </div>
  </v-container>
</template>
<script>
import CreationForm from "./CreationForm";
import PromptCreation from "./PromptCreation";
import api from "../../services/api";

export default {
  name: "CreateWallet",
  components: {
    PromptCreation,
    CreationForm
  },
  data: () => ({
    isCreating: false,
    activePriceList: []
  }),
  async created() {
    this.$store.commit("toogleBottomNav");
    const res = await api.get();
    this.activePriceList = res.data;
  },
  methods: {
    toogleCreation() {
      this.isCreating = !this.isCreating;
      console.log(this.$store.state.activeList);
    }
  }
};
</script>

<style scoped>
.form-appear-enter-active,
.form-appear-leave-active {
  transition: transform 0.5s, opacity 0.5s;
}

.form-appear-leave,
.form-appear-enter-to {
  transform: translateX(0%);
  opacity: 1;
}

.form-appear-enter,
.form-appear-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
