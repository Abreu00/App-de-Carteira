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
        <v-row align="start" justify="space-between">
          <v-col xl="10" lg="10" md="8" sm="8" xs="6" cols="6">
            <div class="limit">
              <ChartContainer>
                <Doughnut :actives="actives" />
              </ChartContainer>
            </div>
          </v-col>
          <v-col xl="2" lg="2" md="2" sm="2" xs="6">
            <div v-for="(active, index) in actives" :key="index" class="nowrap">
              <v-badge :color="colors[index]" dot offset-y="0" offset-x="14" />
              <span class="pa-0 mb-1 caption">{{ `${active.ticker} ${active.desiredPctg}%` }}</span>
            </div>
            <div v-for="(active, index) in actives" :key="index + 20" class="nowrap">
              <v-badge :color="colors[index]" dot offset-y="0" offset-x="14" />
              <span class="pa-0 mb-1 caption">{{ `${active.ticker} ${active.desiredPctg}%` }}</span>
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
      // Toogle popup de confimação
      ActiveModel.clear();
      this.$store.commit("clearActiveList");
      this.$router.replace("/createwallet");
    }
  },
  computed: {
    actives() {
      return this.$store.state.activeList;
    },
    activesFirstHalf() {
      const len = this.actives.length;
      return this.actives.slice(0, len / 2 + (len % 2));
    },
    activesLastHalf() {
      const len = this.actives.length;
      return this.actives.slice(Math.ceil(len / 2), len);
    },
    lastHalfStartIndex() {
      const len = this.actives.length;
      return Math.ceil(len / 2);
    },
    colors() {
      return COLORS.map(color => color.vuetify);
    }
  }
};
</script>
<style scoped>
.nowrap {
  white-space: nowrap;
}
</style>
