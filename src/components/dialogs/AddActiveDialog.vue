<template>
  <v-dialog v-model="visible" max-width="400" @click:outside="close">
    <v-card class="px-4 pb-2">
      <v-card-title class="px-0 justify-space-between">
        <span>
          {{
          isBuying ? $t("newAcquisition") : $t("newSale")
          }}
        </span>
        <span class="subtitle-2">{{ quotes }}</span>
      </v-card-title>
      <v-container class="py-0 px-2">
        <v-text-field v-if="defaultTicker" label="Ticker" :value="defaultTicker" disabled />
        <v-autocomplete v-else :items="options" label="Ticker" v-model="paperName" />
        <v-form ref="form">
          <v-text-field
            :rules="[requiredRule, positiveRule, integerRule]"
            v-model="numberOfPapers"
            :label="$t('numberOfShares')"
            type="number"
          ></v-text-field>
        </v-form>
        <v-row justify="end" class="mt-4">
          <v-btn text color="red" @click="close">{{ $t("cancel") }}</v-btn>
          <v-btn class="mr-4" text color="blue darken-2" @click="handleTransaction">{{$t("complete")}}</v-btn>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AddActiveDialog",
  props: {
    value: Boolean,
    isBuying: {
      type: Boolean,
      required: false,
      default: true
    },
    defaultTicker: {
      type: String,
      required: false,
      default: ""
    },
    options: {
      type: Array,
      required: false
    }
  },
  data: () => ({
    typeOfActive: "",
    paperName: "",
    numberOfPapers: ""
  }),
  methods: {
    close() {
      this.$refs.form.reset();
      this.paperName = "";
      this.numberOfPapers = "";
      this.typeOfActive = "";
      this.visible = false;
    },
    async handleTransaction() {
      const ticker = this.defaultTicker || this.paperName;
      if (!ticker || this.numberOfPapers <= 0 || !this.isSellValid()) {
        return;
      }
      const transactionQuotes = this.isBuying
        ? parseInt(this.numberOfPapers)
        : -parseInt(this.numberOfPapers);
      this.$store.commit("activeTransaction", {
        ticker,
        transactionQuotes
      });
      this.close();
    },
    isSellValid() {
      /*
        guarantees user is not selling more shares than he had
      */
      if (this.isBuying) return true;
      const sellingQuotes = parseInt(this.numberOfPapers);
      return sellingQuotes <= this.quotes;
    },
    integerRule(value) {
      return Number.isInteger(parseFloat(value)) || this.$t("valueShouldBeInteger");
    },
    requiredRule(value) {
      return !!value || this.$t("pleaseFillThisField");
    },
    positiveRule(value) {
      return parseInt(value) > 0 || this.$t("numberShouldBePositive");
    }
  },
  computed: {
    visible: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    },
    quotes() {
      const ticker = this.defaultTicker || this.paperName;
      if (ticker) {
        return this.$store.getters.getActive(ticker).quotes;
      }
      return "";
    }
  }
};
</script>
