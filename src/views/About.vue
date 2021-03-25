<template>
  <v-container class="d-flex justify-center">
    <v-card raised class="pb-4" max-width="700">
      <v-card-title class="justify-space-between">
        <span>
          FreakProof - Wallet
          <v-icon class="ml-1 mb-1 green--text">local_atm</v-icon>
        </span>
        <v-icon color="pink lighten-2">favorite</v-icon>
      </v-card-title>
      <v-card-subtitle class="subtitle-2">
        {{$t("createdBy", {author: "Fábio de Abreu"})}}
      </v-card-subtitle>
      <v-card-text
        class="text-justify"
      >{{ $t("aboutTheAppSection") }}</v-card-text>
      <v-row class="justify-center justify-sm-end px-sm-6">
        <v-btn
          small
          rounded
          class="mr-4"
          color="green darken-2"
          outlined
          href="https://github.com/Abreu00/Freak-proof-wallet-frontend"
          target="_blank"
        >{{ $t("appCode") }}</v-btn>
        <v-btn
          small
          rounded
          color="green darken-2"
          outlined
          href="https://github.com/Abreu00/flask-stock-api"
          target="_blank"
        >{{ $t("apiCode") }}</v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "About"
};
</script>
