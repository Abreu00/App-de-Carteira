<template>
  <v-card
    class="lighten-1 mb-4"
    height="6rem"
    :class="{
      green: isAboveExpected,
      red: !isAboveExpected
    }"
    ripple
  >
    <v-container class="d-flex justify-space-between py-1 px-2" fill-height>
      <p class="mb-0 font-weight-bold title">R${{ valueIndicator }}</p>
      <p class="font-weight-bold text-center mb-0 text-uppercase display-1 force-center">{{ticker}}</p>
      <p class="font-weight-bold text-right align-self-start mb-0 subtitle-2">{{quotes}}</p>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: "Active",
  props: {
    ticker: {
      type: String,
      required: true
    },
    difference: {
      /* Difference between expected value and total active value*/
      type: Number,
      required: true
    },
    quotes: {
      /* How many quotes of this active does the user have */
      type: Number,
      required: true
    }
  },
  computed: {
    valueIndicator() {
      return Math.abs(this.difference);
    },
    isAboveExpected() {
      /* returns if the user has more or less of this active than he should, according to his wallet plan */
      return this.difference >= 0;
    }
  }
};
</script>
