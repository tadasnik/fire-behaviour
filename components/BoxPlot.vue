<template>
  <div ref="boxsvg" style="position: relative">
    <svg class="boxchart" width="100%" :viewBox="viewBoxString" overflow="visible">
      <g :transform="`translate(${marginLeft}, ${marginTop})`">
        <g class="x-axis" fill="none" :transform="`translate(0, ${height})`" style="color: #888">
          <path class="domain" stroke="currentColor" :d="`M0.5,6V0.5H${width}.5V6`" />
          <g
            v-for="(box, index) in getBoxes"
            :key="index"
            class="tick"
            opacity="1"
            font-size="10"
            font-family="sans-serif"
            text-anchor="middle"
            :transform="`translate(${box.x + box.width / 2}, 0)`"
          >
            <line stroke="currentColor" y2="6" />
            <text fill="currentColor" y="9" dy="0.71em">{{ box.xLabel }}</text>
          </g>
        </g>
        <g class="y-axis" fill="none" :transform="`translate(0, 0)`" style="color: #888">
          <path class="domain" stroke="currentColor" :d="`M 0.5 0 V${height}.5 H-6`" />
          <g
            v-for="(tick, index) in yTicks"
            :key="index"
            class="tick"
            opacity="1"
            font-size="10"
            font-family="sans-serif"
            text-anchor="end"
            :transform="`translate(0, ${y(tick) + 0.5})`"
          >
            <line stroke="currentColor" x2="-6" />
            <text fill="currentColor" x="-9" dy="0.32em">{{ tick }}</text>
          </g>
        </g>
        <g class="boxes" fill="none">
          <rect
            v-for="(box, index) in getBoxes"
            :key="index"
            fill="#3333f3"
            :height="box.height"
            :width="box.width"
            :x="box.x"
            :y="box.y"
          />
        </g>

      </g>
    </svg>
  </div>
</template>

<script>
import { scaleLinear, scaleBand } from 'd3-scale'

export default {
  name: 'BoxChart',
  props: {
    dataSet: {
      type: Object,
      required: true
    },
    marginLeft: {
      type: Number,
      default: 40
    },
    marginTop: {
      type: Number,
      default: 5
    },
    marginBottom: {
      type: Number,
      default: 40
    },
    marginRight: {
      type: Number,
      default: 5
    },
    tickCount: {
      type: Number,
      default: 5
    },
    barPadding: {
      type: Number,
      default: 0.3
    }
  },

  data () {
    return {
      svgWidth: 0,
      svgHeight: 0,
      width: 0,
      height: 0
    }
  },
  computed: {

    getSvgWidth () {
      return this.svgWidth
    },

    getSvgHeight () {
      return this.svgHeight
    },

    viewBoxString () {
      return `0 0 ${this.svgWidth} ${this.svgHeight}`
    },

    yTicks () {
      return this.y.ticks(this.tickCount)
    },

    x () {
      return scaleBand()
        .range([0, this.width])
        .padding(this.barPadding)
        .domain(this.dataSet.dataset.map(e => e[0]))
    },

    y () {
      const values = this.dataSet.dataset.map(d => d[1][4])
      return scaleLinear()
        .range([this.height, 0])
        .domain([0, Math.max(...values)])
    },

    getBoxes () {
      const boxes = this.dataSet.dataset.map((d) => {
        return {
          xLabel: d[0],
          x: this.x(d[0]),
          y: this.y(d[1][3]),
          width: this.x.bandwidth(),
          height: this.height - this.y(d[1][3] - d[1][1])
        }
      })
      return boxes
    }
  },

  mounted () {
    const [viewport] = this.$el.getElementsByClassName('viewport')
    this.viewport = viewport
    this.svgWidth = this.$refs.boxsvg.getBoundingClientRect().width
    this.svgHeight = this.svgWidth * 0.61
    console.log('svg width height', this.svgWidth, this.svgHeight)
    this.width = this.svgWidth - this.marginLeft - this.marginRight
    this.height = this.svgHeight - this.marginTop - this.marginBottom
    this.boxes = this.getBoxes
  }
  /*
     use component
  <client-only>
    <box-plot
      v-for="(item, index) in datasetbox"
      :key="item.label + index"
      :data-set="item"
    />
  </client-only>
 */
}
</script>

<style></style>
