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
        <v-autocomplete v-else :items="options" label="Ticker" />
        <v-text-field required v-model="numberOfPapers" label="Número de cotas" type="number"></v-text-field>
        <v-row justify="end" class="mt-4">
          <v-btn text color="red" @click="close">Cancelar</v-btn>
          <v-btn class="mr-4" text color="blue darken-2" @click="handleNewActive">Adicionar</v-btn>
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
      default: null
    }
  },
  data: () => ({
    typeOfActive: "",
    paperName: "",
    numberOfPapers: "",
    options: ["ABEV3", "WEGE3", "ENGIE3"]
  }),
  methods: {
    close() {
      this.paperName = "";
      this.numberOfPapers = "";
      this.typeOfActive = "";
      this.visible = false;
    },
    handleNewActive() {}
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
