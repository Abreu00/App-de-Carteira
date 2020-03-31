<template>
  <v-container>
    <v-card>
      <v-card-title class="justify-space-between">
        Carteira Consolidada
        <v-menu :offset-y="true">
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>more_vert</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="cleanWallet">Limpar Carteira</v-list-item>
          </v-list>
        </v-menu>
      </v-card-title>
      <v-container class="px-2">
        <v-row align="center">
          <v-col cols="6">
            <div class="limit">
              <ChartContainer>
                <Doughnut :actives="actives" />
              </ChartContainer>
            </div>
          </v-col>
          <v-col cols="6">
            <div v-for="(active, index) in actives" :key="index">
              <p v-if="index < 10" class="pa-0 mb-1">
                {{ active.ticker }}
                <span class="pl-2">KNRI11</span>
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Doughnut from "@/components/charts/Doughnut.js";
import ChartContainer from "@/components/charts/ChartContainer";
import ActiveModel from "../indexedDB/ActiveModel";

export default {
  name: "TabCarteiraConsolidada",
  data: () => ({
    actives: []
  }),
  components: {
    Doughnut,
    ChartContainer
  },
  async created() {
    this.actives = await ActiveModel.getAll();
    if (this.actives.length === 0) {
      this.$router.replace("/createwallet");
    }
  },
  methods: {
    cleanWallet() {
      // Toogle popup de confimação
      ActiveModel.clear();
      this.$router.replace("/createwallet");
    }
  }
};
</script>
<style scoped>
@media (max-width: 900px) {
  .limit {
    max-height: 15vh;
    height: 15vh;
  }
}
</style>
