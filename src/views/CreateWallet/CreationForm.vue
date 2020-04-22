<template>
  <v-container class="px-2">
    <v-card class="pb-4" raised shaped>
      <v-card-title class="px-3">
        <span>Criar Carteira</span>
      </v-card-title>

      <v-row v-for="(active, index) in actives" :key="index" justify="space-between" class="px-3">
        <v-col cols="4" align-self="center">
          <v-text-field
            solo
            v-model="active.ticker"
            label="Ticker"
            max-width="20"
            class="upper-input"
          ></v-text-field>
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

      <span class="d-block text-right subtitle-1 font-weight-bold mx-4">Alocado - {{ total }}%</span>
      <v-card-actions class="justify-space-between mx-4 mt-2">
        <v-btn text color="red" @click="onCancel">Cancelar</v-btn>
        <v-btn text color="blue darken2" @click="handleSave">Salvar</v-btn>
        <v-btn icon color="blue darken2" @click="handleNewLine">
          <v-icon>add</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
      multi-line
      top
      class="blue--text text--lighten-4"
    >
      <span>Alocação deve ser de 100%</span>
      <v-btn text @click="snackbar = false" color="blue lighten-4">fechar</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import ActiveModel from "../../indexedDB/ActiveModel";

export default {
  name: "CreationForm",
  props: {
    onCancel: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    snackbar: false,
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
      if (this.total !== 100) {
        return (this.snackbar = true);
      }
      this.actives.map(
        active =>
          active.ticker &&
          active.percentage > 0 &&
          ActiveModel.add(active.ticker, active.type, active.percentage)
      );
      this.$store.commit("toogleBottomNav");
      this.$router.replace("/consolidada");
    }
  },
  computed: {
    total() {
      let sum = 0;
      this.actives.forEach(active => {
        if (active.ticker) {
          sum += active.percentage;
        }
      });
      return sum;
    }
  }
};
</script>

<style>
.upper-input input {
  text-transform: uppercase;
}
</style>