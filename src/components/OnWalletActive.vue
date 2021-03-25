<template>
  <v-list-item>
    <v-list-item-content class="pb-0 pt-2">
      <v-list-item-title class="title">
        {{ active.ticker }}
        <v-badge :color="vuetifyColor" offset-y="2" offset-x="-1" />
      </v-list-item-title>
      <v-container>
        <v-row justify="space-between">
          <p class="pa-0 mr-0">{{ $t("targetValue") }}</p>
          <p>{{ active.desiredPctg.toFixed(2) }}%</p>
        </v-row>
        <v-row justify="space-between">
          <p class="pa-0 mr-0">{{ $t("currentValue") }}</p>
          <p>{{ currentPctg.toFixed(2) }}%</p>
        </v-row>
      </v-container>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "OnWalletActives",
  props: {
    active: {
      type: Object,
      required: true
    },
    vuetifyColor: {
      type: String,
      required: true
    }
  },
  computed: {
    balance() {
      return this.$store.state.balance;
    },
    currentPctg() {
      const { price, quotes } = this.active;
      return this.balance > 0 ? ((price * quotes) / this.balance) * 100 : 0;
    }
  }
};
</script>
