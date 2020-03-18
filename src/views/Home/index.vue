<template>
  <v-container>
    <v-tabs grow color="amber darken-4">
      <v-tab>Carteira Atual</v-tab>
      <v-tab>Carteira desejada</v-tab>
      <v-tab-item>
        <TabCarteiraAtual />
      </v-tab-item>
      <v-tab-item><TabCarteiraAtual /></v-tab-item>
    </v-tabs>
    <v-btn fixed fab bottom right class="blue" @click="tooglePopUp">
      <v-icon color="grey lighten-4">add</v-icon>
    </v-btn>
    <v-dialog v-model="popup" max-width="800">
      <v-card class="px-6 pb-4">
        <v-card-title class="px-2 pb-1">
          Adicionar ativo
        </v-card-title>
        <v-divider color="grey" class="mb-6"></v-divider>
        <v-row>
          <v-text-field
            class="mr-2"
            label="Nome do papel"
            outlined
          ></v-text-field>
          <v-text-field
            label="Número de cotas"
            type="number"
            outlined
          ></v-text-field>
        </v-row>
        <v-text-field label="Preco" type="date" outlined></v-text-field>
        <v-row justify="end">
          <v-btn class="mr-4" text color="blue darken-2">Adicionar</v-btn>
          <v-btn text color="red">Cancelar</v-btn>
        </v-row>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import TabCarteiraAtual from "./tabs/CarteiraAtual";
export default {
  name: "Home",
  components: {
    TabCarteiraAtual
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
