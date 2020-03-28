<template>
  <v-container>
    <div v-if="creating">
      <EditWallet />
    </div>
    <v-container fill-height fluid v-else-if="!exists">
      <v-row justify="center" align="center">
        <v-col>
          <p class="title text-center mt-8">
            Você ainda não criou sua
            <br />carteira consolidada
          </p>
          <div class="text-center">
            <v-btn color="amber darken-4" dark @click="creating = !creating">Criar minha carteira</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div v-else>
      <v-card>
        <v-card-title class="justify-space-between">
          Carteira Consolidada
          <v-menu :offset-y="true">
            <template v-slot:activator="{on}">
              <v-btn icon v-on="on">
                <v-icon>more_vert</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="creating = true">Editar Carteira</v-list-item>
              <v-list-item @click="cleanWallet">Limpar Carteira</v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>
        <v-container>
          <ChartContainer>
            <Doughnut :actives="$store.state.actives" />
          </ChartContainer>
        </v-container>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import EditWallet from "@/components/EditWallet";
import Doughnut from "@/components/charts/Doughnut.js";
import ChartContainer from "@/components/charts/ChartContainer";

export default {
  name: "TabCarteiraConsolidada",
  data: () => ({
    exists: false,
    creating: false,
    actives: []
  }),
  components: {
    EditWallet,
    Doughnut,
    ChartContainer
  },
  async created() {
    this.exists = this.$store.state.actives.length > 0;
  },
  methods: {
    cleanWallet() {
      // Toogle popup de confimação
      console.log("limpa");
    }
  }
};
</script>

