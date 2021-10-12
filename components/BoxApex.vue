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
            show: false
          },
          y: {
            formatter: (value) => {
              return value.toFixed(1)
            }
          }
        },
        yaxis: {
          decimalsInFloat: 1
        },
        xaxis: {
          decimalsInFloat: 1
        },
        annotations: {
          yaxis: [
            {
              y: 1,
              y2: 2,
              offsetX: -50,
              width: '200%',
              yAxisIndex: 0,
              borderColor: '#000',
              fillColor: '#FEB019',
              label: {
                text: 'Y-axis range'
              }
            }
          ]
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
