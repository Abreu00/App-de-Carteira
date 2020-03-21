<template>
  <v-container>
    <v-row justify="center">
      <Doughnut />
    </v-row>
    <v-btn color="amber darken-4" dark @click="popup = true">Editar carteira</v-btn>
  </v-container>
</template>

<script>
import Doughnut from "@/components/charts/Doughnut";
export default {
  name: "TabCarteiraAtual",
  components: {
    Doughnut
  },
  data: () => ({
    popup: false
  })
};
</script>
