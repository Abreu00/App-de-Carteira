import { Doughnut } from "vue-chartjs";
import COLORS from "./colors";

export default {
  extends: Doughnut,
  props: {
    actives: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      chartdata: {
        labels: this.actives.map(active => active.ticker),
        datasets: [
          {
            label: "Data",
            backgroundColor: COLORS.map(color => color.hex),
            data: this.actives.map(active => active.desiredPctg),
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
  },
  methods: {
    updateData() {
      this.chartdata = {
        ...this.chartdata,
        labels: this.actives.map(active => active.ticker),
        datasets: [
          {
            ...this.chartdata.datasets[0],
            data: this.actives.map(active => active.desiredPctg)
          }
        ]
      };
    }
  },
  watch: {
    actives: {
      handler() {
        this.updateData();
        this.$data._chart.destroy();
        this.renderChart(this.chartdata, this.options);
      }
    }
  }
};
