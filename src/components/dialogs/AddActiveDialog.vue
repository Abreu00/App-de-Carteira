<template>
  <v-dialog v-model="visible" max-width="400" @click:outside="close">
    <v-card class="px-4 pb-2">
      <v-card-title class="px-0">
        {{
        isBuying ? "Nova compra" : "Nova venda"
        }}
      </v-card-title>
      <v-container class="py-0 px-2">
        <v-text-field v-if="defaultTicker" label="Ticker" :value="defaultTicker" disabled />
        <v-autocomplete v-else :items="options" label="Ticker" v-model="paperName" />
        <v-text-field
          :rules="[requiredRule, positiveRule, integerRule]"
          v-model="numberOfPapers"
          label="Número de cotas"
          type="number"
        ></v-text-field>
        <v-row justify="end" class="mt-4">
          <v-btn text color="red" @click="close">Cancelar</v-btn>
          <v-btn class="mr-4" text color="blue darken-2" @click="handleTransaction">Adicionar</v-btn>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import ActiveModel from "../../indexedDB/ActiveModel";
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
      this.paperName = "";
      this.numberOfPapers = 0;
      this.typeOfActive = "";
      this.visible = false;
    },
    async handleTransaction() {
      const ticker = this.defaultTicker || this.paperName;
      if (!this.numberOfPapers || !ticker) {
        return;
      }
      const newQuotes = this.isBuying
        ? Number(this.numberOfPapers)
        : -Number(this.numberOfPapers);
      const { quotes } = await ActiveModel.get(ticker);
      ActiveModel.update(ticker, "quotes", quotes + newQuotes);

      this.close();
    },
    integerRule(value) {
      return Number.isInteger(parseFloat(value)) || "Valor deve ser inteiro";
    },
    requiredRule(value) {
      return !!value || "Favor preencher esse campo";
    },
    positiveRule(value) {
      return parseInt(value) > 0 || "Número deve ser positivo";
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
    }
  }
};
</script>
