<template>
  <div>
    <client-only>
      <highchart
        v-if="series"
        :options="chartOptions"
        :update="watchers"
      />
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    series: {
      type: Array,
      required: true
    },
    xlabel: {
      type: String,
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
      console.log('line', this.series)
      return {
        chart: {
          type: 'line',
          redraw: true,
          animation: true,
          zoomType: 'xy',
          panning: true,
          panKey: 'shift'
        },
        boost: { enabled: true },
        tooltip: {
        },
        series: this.series,
        yAxis: {
          title: {
            text: this.ylabel
          }
        },
        xAxis: {
          title: {
            text: this.xlabel
          }
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
