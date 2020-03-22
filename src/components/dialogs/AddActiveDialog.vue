<template>
  <v-dialog v-model="visible" max-width="400" @click:outside="close">
    <v-card class="px-4 pb-2">
      <v-card-title class="px-0">{{isBuying ? "Nova Compra" : "Nova venda"}}</v-card-title>
      <v-container class="py-0 px-2">
        <v-autocomplete :items="options" label="Ticker"></v-autocomplete>
        <v-text-field v-model="numberOfPapers" label="Número de cotas" type="number"></v-text-field>
        <v-row justify="end" class="mt-4">
          <v-btn text color="red" @click="close">Cancelar</v-btn>
          <v-btn class="mr-4" text color="blue darken-2" @click="handleNewActive">Adicionar</v-btn>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import IDB from "../../IndexedDB";

export default {
  name: "AddActiveDialog",
  props: {
    value: Boolean,
    isBuying: {
      type: Boolean,
      required: false,
      default: true
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
    handleNewActive() {
      const idb = IDB.getDB();
      console.log(idb);
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
