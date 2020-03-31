<template>
  <v-container v-if="isCreating" class="pa-0">
    <v-card class="pb-4" raised shaped>
      <v-card-title class="px-3 text-uppercase">
        <span>Criar Carteira</span>
      </v-card-title>

      <v-row
        v-for="(active, index) in actives"
        :key="index"
        justify="space-between"
        class="px-3"
      >
        <v-col cols="4" align-self="center">
          <v-text-field
            solo
            v-model="active.ticker"
            label="Ticker"
            max-width="20"
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
      <span class="d-block text-right subtitle-1 font-weight-bold mx-4"
        >Alocado - {{ total }}%</span
      >
      <v-card-actions class="justify-space-between mx-4 mt-2">
        <v-btn text color="red" @click="handleCancel">Cancelar</v-btn>
        <v-btn text color="blue darken2" @click="handleSave">Salvar</v-btn>
        <v-btn icon color="blue darken2" @click="handleNewLine">
          <v-icon>add</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
  <v-container v-else fill-height fluid>
    <v-row justify="center" align="center">
      <v-col>
        <p class="title text-center mt-8">
          Você ainda não criou sua
          <br />carteira consolidada
        </p>
        <div class="text-center">
          <v-btn color="amber darken-4" dark @click="isCreating = !isCreating"
            >Criar minha carteira</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ActiveModel from "../indexedDB/ActiveModel.js";

export default {
  name: "CreateWallet",
  components: {},
  data: () => ({
    isCreating: false,
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
  created() {
    this.$store.commit("toogleBottomNav");
  },
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
      this.$store.commit("toogleBottomNav");
      this.$router.replace("/consolidada");
    },
    handleCancel() {
      this.isCreating = false;
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
