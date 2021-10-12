<template>
  <div>
    <highchart
      :more="true"
      :options="chartOptions"
      :update="watchers"
    />
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
          },
          plotLines: [{
            value: 932,
            color: 'red',
            width: 1,
            label: {
              text: 'Theoretical mean: 932',
              align: 'center',
              style: {
                color: 'gray'
              }
            }
          }]
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
