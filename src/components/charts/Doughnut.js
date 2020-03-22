import { Doughnut } from "vue-chartjs";
import COLORS from "./colors";

export default {
  extends: Doughnut,
  data: function() {
    return {
      chartdata: {
        labels: [
          "ABEV3",
          "EGIE3",
          "WEGE3",
          "RADL3",
          "LREN3",
          "ENBR3",
          "FLRY3",
          "MYPK3",
          "ITSA4",
          "JHSF3",
          "MDIA3",
          "VVAR3",
          "BBDC3",
          "BRSA3",
          "BRKM5",
          "KNRI11",
          "HGL11",
          "IVVB11",
          "XPML11",
          "RECT11",
          "BCFF11"
        ],
        datasets: [
          {
            label: "Data",
            backgroundColor: COLORS.map(color => color.hex),
            data: [30, 20, 10, 1, 4, 5, 12, 8, 5, 6, 6, 6],
            borderWidth: 0
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        cutoutPercentage: 65,
        tooltips: {
          enabled: true
        },
        legend: {
          display: false,
          position: "top",
          align: "start"
        },
        plugins: {
          datalabels: {
            color: "transparent"
          }
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
