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
      <v-card-subtitle class="subtitle-2">Criado por Fábio de Abreu</v-card-subtitle>
      <v-card-text
        class="text-justify"
      >FreakProof Wallet é um app no formato de PWA para consolidação de carteira de investimentos em renda variavel. A partir de uma carteira consolidada criada pelo investidor o app mostra de maneira elegante a situação de seu investimentos incentivando a compra de ativos de forma a sempre buscar atingir a sua carteira ideal. Nesse sentido, as informações para o investidor gerir sua carteira estão disponiveis sem que aconteça exibição dos preços atuais do mercado, dessa forma evitando que o investidor atue por impulso em momentos de alta volatilidade no mercado, o que pode causar significativas perdas em seu portfolio.</v-card-text>
      <v-row class="justify-center justify-sm-end px-sm-6">
        <v-btn
          small
          rounded
          class="mr-4"
          color="green darken-2"
          outlined
          href="https://github.com/Abreu00/App-de-Carteira"
          target="_blank"
        >Codigo do App</v-btn>
        <v-btn
          small
          rounded
          color="green darken-2"
          outlined
          href="https://github.com/Abreu00/flask-stock-api"
          target="_blank"
        >Codigo da API</v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "About"
};
</script>
