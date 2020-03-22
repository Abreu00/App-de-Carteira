<template>
  <v-list-item>
    <v-list-item-content class="pb-0 pt-2">
      <v-list-item-title class="title">
        {{ticker}}
        <v-badge :color="vuetifyColor" offset-y="2" offset-x="-1" />
      </v-list-item-title>
      <v-container>
        <v-row justify="space-between">
          <p class="pa-0 mr-0">Peso atual</p>
          <p>20%</p>
        </v-row>
        <v-row justify="space-between">
          <p class="pa-0 mr-0">Peso desejado</p>
          <p>20%</p>
        </v-row>
      </v-container>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "OnWalletActives",
  props: {
    ticker: {
      type: String,
      required: true
    },
    vuetifyColor: {
      type: String,
      required: true
    }
  }
};
</script>
