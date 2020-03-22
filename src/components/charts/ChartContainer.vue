<template>
  <div class="chart-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "chart-container"
};
</script>

<style scoped>
.chart-container,
.chart-container > div {
  height: 100%;
  width: 100%;
  position: relative;
  margin: 0 auto;
}
</style>
