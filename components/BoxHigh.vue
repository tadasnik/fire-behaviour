<template>
  <div>
    <client-only>
      <highchart
        :more="true"
        :options="chartOptions"
        :update="watchers"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    fuels: {
      type: Array,
      required: true
    },
    ylabel: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      watchers: ['options.series', 'options.yAxis', 'options.xAxis']
    }
  },

  computed: {
    getPlotlines () {
      if (this.ylabel === 'Fire flame length (m)') {
        return [{
          value: 0.5,
          color: '#eae2b7',
          width: 1,
          zIndex: 10,
          label: {
            text: 'Moderate intensity',
            align: 'left',
            style: {
              color: '#eae2b7'
            }
          }
        },
        {
          value: 1.5,
          color: '#fcbf49',
          width: 1,
          zIndex: 10,
          label: {
            text: 'High intensity',
            align: 'left',
            style: {
              color: '#fcbf49'
            }
          }
        },
        {
          value: 3.5,
          color: '#f77f00',
          width: 1,
          zIndex: 10,
          label: {
            text: 'Extreme intensity',
            align: 'left',
            style: {
              color: '#f77f00'
            }
          }
        },
        {
          value: 8,
          color: '#d62828',
          width: 1,
          zIndex: 10,
          label: {
            text: 'Beyond extreme...',
            align: 'left',
            style: {
              color: '#d62828'
            }
          }
        }

        ]
      } else {
        return []
      }
    },
    chartOptions () {
      return {
        chart: {
          type: 'boxplot',
          redraw: true,
          animation: true,
          zoomType: 'xy',
          panning: true,
          panKey: 'shift'
        },
        boost: { enabled: true },
        tooltip: {
        },

        series: [{
          color: '#003049',
          fillColor: '#FCBF49',
          name: this.yLabel,
          data: this.data
        }],

        xAxis: {
          categories: this.fuels,
          title: {
            text: 'Fuel model'
          }
        },

        yAxis: {
          title: {
            text: this.ylabel
          }
        },
        legend: {
          enabled: false
        },
        title: {
          text: ''
        },
        credits: {
          enabled: false
        }
      }
    }
  }
}
</script>
