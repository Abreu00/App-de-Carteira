<template>
  <v-container class="pa-0">
    <v-card class="pb-4" raised shaped>
      <v-card-title class="px-3 text-uppercase">
        <span>Criar Carteira</span>
      </v-card-title>

      <v-row v-for="(active, index) in actives" :key="index" justify="space-between" class="px-3">
        <v-col cols="4" align-self="center">
          <v-text-field solo v-model="active.ticker" label="Ticker" max-width="20"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-radio-group class="my-0" :mandatory="true" v-model="active.type">
            <v-radio label="Ação" value="stock" />
            <v-radio label="FII" value="fii" />
          </v-radio-group>
        </v-col>
        <v-col cols="4">
          <v-slider
            v-model="active.percentage"
            max="20"
            :hint="active.percentage.toString()"
            label="%"
            persistent-hint
          />
        </v-col>
      </v-row>
      <span class="d-block text-right subtitle-1 font-weight-bold mx-4">Alocado - {{total}}%</span>
      <v-card-actions class="justify-space-between mx-4 mt-2">
        <v-btn text color="red">Cancelar</v-btn>
        <v-btn text color="blue darken2" @click="handleSave">Salvar</v-btn>
        <v-btn icon color="blue darken2" @click="handleNewLine">
          <v-icon>add</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
import ActiveModel from "../indexedDB/ActiveModel.js";

export default {
  name: "EditWallet",
  components: {},
  data: () => ({
    actives: [
      {
        ticker: "",
        percentage: 0,
        type: "stock"
      },
      {
        ticker: "",
        percentage: 0,
        type: "stock"
      },
      {
        ticker: "",
        percentage: 0,
        type: "stock"
      }
    ]
  }),
  methods: {
    handleNewLine() {
      this.actives.push({
        ticker: "",
        percentage: 0,
        type: "stock"
      });
    },
    handleSave() {
      this.actives.map(
        active =>
          active.ticker &&
          ActiveModel.add(active.ticker, active.type, active.percentage)
      );
    }
  },
  computed: {
    total() {
      let sum = 0;
      this.actives.forEach(active => {
        sum += active.percentage;
      });
      return sum;
    }
  }
};
</script>

<style scoped>
.v-text-field__slot input {
  text-transform: uppercase;
}
</style>