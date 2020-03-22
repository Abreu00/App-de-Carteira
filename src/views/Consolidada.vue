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
    <div v-else>oi</div>
  </v-container>
</template>

<script>
import EditWallet from "@/components/EditWallet";

export default {
  name: "TabCarteiraConsolidada",
  data: () => ({
    exists: false,
    creating: false
  }),
  components: {
    EditWallet
  }
};
</script>

