<template>
  <div>
    <TabCarteiraAtual />
    <v-btn fab bottom right class="blue" @click="tooglePopUp">
      <v-icon color="grey lighten-4">add</v-icon>
    </v-btn>
    <AddActiveDialog v-model="popup" />
  </div>
</template>

<script>
import TabCarteiraAtual from "./tabs/CarteiraAtual";

import AddActiveDialog from "../../components/dialogs/AddActiveDialog";
export default {
  name: "Home",
  components: {
    TabCarteiraAtual,
    AddActiveDialog
  },
  data: () => ({
    popup: false
  }),
  methods: {
    tooglePopUp() {
      this.popup = !this.popup;
    }
  }
};
</script>
