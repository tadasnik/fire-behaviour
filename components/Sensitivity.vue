<template>
  <section>
    <h4 class="title is-4">
      BehavePlus outputs
    </h4>
    <b-field label="Select model output (Y axis)">
      <b-select
        placeholder="Select output variable"
        :value="selectedOutputs[0]"
        @input="setOutput($event)"
      >
        <optgroup label="Surface">
          <option
            v-for="([option, text], index) in getOutputOptionsM('primary')"
            :key="index+option"
            :value="option"
          >
            {{ text }}
          </option>
        </optgroup>
        <optgroup label="Fire Effects">
          <option
            v-for="([option, text], index) in getOutputOptionsM('effects')"
            :key="index+option"
            :value="option"
          >
            {{ text }}
          </option>
        </optgroup>
        <optgroup label="Crown fire">
          <option
            v-for="([option, text], index) in getOutputOptionsM('crown')"
            :key="index+option"
            :value="option"
          >
            {{ text }}
          </option>
        </optgroup>
      </b-select>
      <b-modal
        v-model="isCardModalActive"
        :width="640"
        scroll="keep"
      >
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">
                  {{ getOutputDisplaylabel }}
                </p>
              </div>
            </div>
            <div class="content">
              {{ getOutputDescription }}
            </div>
          </div>
        </div>
      </b-modal>
      <p class="control">
        <b-button
          type="is-warning"
          label=""
          icon-right="mdi mdi-help-circle-outline"
          @click="isCardModalActive = true"
        />
      </p>
    </b-field>
    <box-high
      :data="datasetBox"
      :fuels="selectedFuels"
      :ylabel="getOutputDisplaylabel"
    />
    <line-high
      :series="datasetLine"
      :xlabel="getInputDisplaylabel"
      :ylabel="getOutputDisplaylabel"
    />
  </section>
</template>

<script>

import { mapGetters } from 'vuex'
import { min, max, median, quantile } from 'd3-array'

export default {

  components: {
  },

  props: {
  },

  data () {
    return {
      isCardModalActive: false
    }
  },

  computed: {

    ...mapGetters({
      siteInputs: 'selector/siteInputs',
      outputNodes: 'selector/outputNodes',
      rangeInput: 'selector/rangeInput',
      rangeOutput: 'selector/rangeOutput',
      selectedFuels: 'selector/selectedFuels',
      selectedOutputs: 'selector/selectedOutputs',
      results: 'selector/results'
    }),

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
    },

    getOutputDescription () {
      return this.outputNodes[this.selectedOutputs[0]].description
    },

    getOutputDisplaylabel () {
      const outNode = this.outputNodes[this.selectedOutputs[0]]
      return outNode.label + ' (' + outNode.units + ')'
    },

    getInputDisplaylabel () {
      const inpNode = this.siteInputs[this.rangeInput]
      return inpNode.label + ' (' + inpNode.units + ')'
    },

    getInputOptions () {
      const optionsText = []
      Object.keys(this.siteInputs).forEach((key) => {
        optionsText.push([key, this.siteInputs[key].label])
      })
      return optionsText
    },

    datasetLine () {
      const resArray = []
      this.selectedFuels.forEach((fuel) => {
        const inputs = this.siteInputs[this.rangeInput].value
        const outputs = this.results[this.selectedOutputs[0]][fuel]
        resArray.push({ name: fuel, data: inputs.map((e, i) => { return [e, outputs[i]] }) })
      })
      return resArray
    },

    datasetBox () {
      const data = []
      this.selectedFuels.forEach((fuel) => {
        data.push(this.getStats(this.results[this.selectedOutputs[0]][fuel]))
      })
      return data
    },

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
    }

  },

  created () {
    this.setRangeInput(this.rangeInput)
  },

  methods: {

    getOutputOptionsM (filterString) {
      const optionsText = []
      Object.keys(this.outputNodes).forEach((key) => {
        const outNode = this.outputNodes[key]
        if (outNode.group === filterString && outNode.selected) {
          const dispString = this.outputNodes[key].label
          optionsText.push([key, dispString])
        }
      })
      return optionsText
    },

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

    resetRangeInput (code) {
      // update previous rangeInput value to single value
      const defValue = this.siteInputs[this.rangeInput].defValue
      this.updateSiteInput(this.rangeInput, defValue)
      // change rangeInput value
      this.$store.dispatch('selector/updateRangeInput', code)
      this.setRangeInput(this.rangeInput)
      this.$emit('change')
    },

    setRangeInput (input) {
      const minVal = this.siteInputs[input].min
      const maxVal = this.siteInputs[input].max
      this.updateSiteInput(input, [minVal, maxVal])
    },

    updateSiteInput (input, payload) {
      const prop = 'value'
      if (Array.isArray(payload)) {
        payload = this.makeRange(payload, 20)
        this.$store.dispatch('selector/updateSiteInputProp',
          { input, prop, payload })
      } else {
        this.$store.dispatch('selector/updateSiteInputProp', { input, prop, payload })
      }
    },

    makeRange (origArray, noElements) {
      const vMin = Math.min(origArray[0], origArray[1])
      const vMax = Math.max(origArray[0], origArray[1])
      const increments = ((vMax - vMin) / noElements)
      const values = [...Array(noElements + 1)].map((_, y) => vMin + increments * y)
      return values
    },

    setOutput (key) {
      const single = true
      const payload = false
      this.$store.dispatch('selector/updateSelectedOutputs', { key, payload, single })
      this.$emit('change')
    }
  }
}
</script>
<style lang="scss" scoped>
.card-header {
 background-color: $warning;
}
</style>
