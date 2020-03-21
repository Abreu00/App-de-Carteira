<template>
  <v-dialog v-model="visible" max-width="400" @click:outside="close">
    <v-card class="px-4 pb-2">
      <v-card-title class="px-0">Adicionar ativo</v-card-title>
      <v-container class="py-0 px-2">
        <v-row justify="center" align="start">
          <v-col class="flex-grow-0 mr-2">
            <v-radio-group v-model="typeOfActive" :mandatory="true">
              <v-radio label="Ação" value="Ação" />
              <v-radio label="FII" value="FII" />
            </v-radio-group>
          </v-col>
          <v-col class="flex-grow-1">
            <v-text-field
              v-model="paperName"
              class="mr-2"
              label="Nome do papel"
            ></v-text-field>
            <v-text-field
              v-model="numberOfPapers"
              label="Número de cotas"
              type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-btn text color="red" @click="close">Cancelar</v-btn>
          <v-btn
            class="mr-4"
            text
            color="blue darken-2"
            @click="handleNewActive"
            >Adicionar</v-btn
          >
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
    value: Boolean
  },
  data: () => ({
    typeOfActive: "",
    paperName: "",
    numberOfPapers: ""
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
