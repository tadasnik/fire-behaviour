<template>
  <section class="p-4">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <h4 class="title is-4">
            Model outputs
          </h4>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <multiselect
            :label="'Select model outputs'"
            :options="getOutputOptions"
            :selected-options="selectedOutputs"
            @updateSelection="updateSelectedOutput"
          />
        </div>
      </div>
    </nav>
    <box-high
      v-for="({ data, fuels, yLabel }, index) in dataset"
      :key="yLabel+index"
      :data="data"
      :fuels="fuels"
      :ylabel="yLabel"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { min, max, median, quantile } from 'd3-array'
import Multiselect from '~/components/Multiselect'

export default {
  name: 'SufraceBehaviour',

  components: {
    Multiselect
  },

  data () {
    return {
    }
  },

  computed: {
    ...mapGetters({
      siteInputs: 'selector/siteInputs',
      outputNodes: 'selector/outputNodes',
      defaultDagConfig: 'selector/defaultDagConfig',
      results: 'selector/results',
      rangeInput: 'selector/rangeInput',
      selectedOutputs: 'selector/selectedOutputs',
      selectedFuels: 'selector/selectedFuels'
    }),

    dataset () {
      const resArray = []
      this.selectedOutputs.forEach((node) => {
        const yLabel = this.getOutputDisplaylabel(node)
        const fuels = []
        const data = []
        this.selectedFuels.forEach((fuel) => {
          fuels.push(fuel)
          data.push(this.getStats(this.results[node][fuel]))
        })
        resArray.push(
          { data, fuels, yLabel }
        )
      })
      return resArray
    },

    getOutputOptions () {
      const optionsText = []
      Object.keys(this.outputNodes).forEach((key) => {
        const outNode = this.outputNodes[key]
        if (outNode.group === 'primary') {
          const dispString = this.outputNodes[key].label
          optionsText.push([key, dispString])
        }
      })
      return optionsText
    }
  },

  methods: {

    getStats (values) {
      if (values.length === 1) {
        return Array(5).fill(values[0])
      } else {
        const vMin = min(values)
        const vQ25 = quantile(values, 0.25)
        const vMax = max(values)
        const vMedian = median(values)
        const vQ75 = quantile(values, 0.75)
        return [vMin, vQ25, vMedian, vQ75, vMax]
      }
    },

    updateSelectedOutput (key, payload) {
      const single = false
      this.$store.dispatch('selector/updateSelectedOutputs', { key, payload, single })
      this.$emit('change')
    },

    getOutputDisplaylabel (node) {
      const outNode = this.outputNodes[node]
      return outNode.label + ' (' + outNode.units + ')'
    }
  }
}
</script>
