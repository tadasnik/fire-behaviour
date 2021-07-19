<template>
  <client-only>
    <div>
      <VueApexCharts
        type="boxPlot"
        :options="chartOptions"
        :series="dataset"
        :title="title"
        style="width: 100%"
      />
    </div>
  </client-only>
</template>

<script>
export default {

  components: {
    VueApexCharts: () => import('vue-apexcharts')
  },

  props: {
    dataset: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      chartOptions: {
        chart: {
          id: 'boxplot-1',
          type: 'boxPlot',
          height: 350
        },
        tooltip: {
          enebled: true,
          x: {
            show: true
          },
          y: {
            formatter: (value) => {
              return value.toFixed(2)
            }
          }
        },
        plotOptions: {
          boxPlot: {
            colors: {
              upper: '#5C4742',
              lower: '#A5978B'
            }
          }
        }
      }
    }
  },
  created () {
    this.chartOptions.title = { text: this.title }
  }
}
</script>
