<template>
  <v-container class="pa-0">
    <v-card class="pb-4" raised shaped>
      <v-card-title class="justify-space-between px-3">
        <span>Criar Carteira</span>
        <span>Alocado - {{total}}%</span>
      </v-card-title>

      <v-row v-for="(active, index) in actives" :key="index" justify="space-between" class="px-3">
        <v-col cols="4" align-self="center">
          <v-text-field solo v-model="active.ticker" label="Ticker" max-width="20"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-radio-group class="my-0" :mandatory="true">
            <v-radio label="Ação" value="Ação" />
            <v-radio label="FII" value="FII" />
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
      <v-card-actions class="justify-space-between mx-4">
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
export default {
  name: "EditWallet",
  components: {},
  data: () => ({
    actives: [
      {
        ticker: "",
        percentage: 0
      }
    ]
  }),
  methods: {
    handleNewLine() {
      this.actives.push({
        ticker: "",
        percentage: 0
      });
    },
    handleSave() {
      this.actives.forEach(active => {
        console.log(`${active.ticker} - ${active.percentage}%`);
      });
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