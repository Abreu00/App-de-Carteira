<template>
  <apexchart
    width="380"
    type="donut"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  name: "Doughnut",
  data: () => ({
    chartOptions: {
      labels: ["KNRI11", "ITUB3", "ABEV3", "LREN3"]
    },
    series: [35, 10, 20, 12]
  })
};
</script>
