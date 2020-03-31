<template>
  <v-container fill-height fluid class="d-flex flex-column justify-center align-center">
    <p class="title text-center mt-8">
      Comece criando sua carteira
      <br />consolidada
    </p>
    <div class="text-center">
      <v-btn color="amber darken-4" dark @click="onConfirm">Criar minha carteira</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "PromptCreation",
  props: {
    onConfirm: {
      type: Function,
      required: true
    }
  }
};
</script>
