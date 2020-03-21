<template>
  <v-container>
    <Active ticker="WEGE3" :difference="150" :quotes="12" />
    <Active ticker="ABEV3" :difference="-90" :quotes="31" />
    <Active ticker="ITSA4" :difference="-200" :quotes="8" />
    <Active ticker="MDIA3" :difference="20" :quotes="4" />
    <Active ticker="HGLG11" :difference="250" :quotes="2" />
  </v-container>
</template>
<script>
import Active from "../components/Active";
export default {
  name: "Goals",
  components: {
    Active
  }
};
</script>

<style>
.force-center {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
</style>
