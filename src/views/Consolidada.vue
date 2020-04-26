<template>
  <v-container>
    <v-card>
      <v-card-title class="justify-space-between mx-sm-0 mx-n2">
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
        <v-row class="ml-2 mb-6" justify="center">
          <div v-for="(active, index) in actives" :key="index" class="mr-6">
            <v-badge dot :color="colors[index]" offset-x="10" offset-y="-2" />
            {{active.ticker}}
            {{active.desiredPctg}}%
          </div>
        </v-row>
        <ChartContainer>
          <Doughnut :actives="actives" :activeDataHandler="chartDataHandler" />
        </ChartContainer>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Doughnut from "@/components/charts/Doughnut.js";
import ChartContainer from "@/components/charts/ChartContainer";
import ActiveModel from "../indexedDB/ActiveModel";
import COLORS from "@/components/charts/colors.js";

export default {
  name: "Consolidada",
  data: () => ({}),
  components: {
    Doughnut,
    ChartContainer
  },
  methods: {
    cleanWallet() {
      ActiveModel.clear();
      this.$store.commit("clearActiveList");
      this.$router.replace("/createwallet");
    },
    chartDataHandler(active) {
      return active.desiredPctg;
    }
  },
  computed: {
    actives() {
      return this.$store.state.activeList;
    },

    colors() {
      return COLORS.map(color => color.vuetify);
    }
  }
};
</script>
