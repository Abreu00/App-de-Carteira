<template>
  <div>
    <v-tabs grow color="amber darken-4">
      <v-tab>Atual</v-tab>
      <v-tab>Consolidada</v-tab>
      <v-tab-item>
        <TabCarteiraAtual />
      </v-tab-item>
      <v-tab-item>
        <TabCarteiraAtual />
      </v-tab-item>
      <v-tab-item>
        <TabCarteiraAtual />
      </v-tab-item>
    </v-tabs>
    <v-btn fixed fab bottom right class="blue" @click="tooglePopUp">
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
