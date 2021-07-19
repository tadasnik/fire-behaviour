<template>
  <section class="section">
    <div class="tile is-ancestor">
      <div class="tile is-6 is-vertical is-parent">
        <div class="tile is-child box">
          <section class="pb-4">
            <h4 class="title is-4">
              BahavePlus inputs
            </h4>
          </section>
          <input-props
            key="uidinputs"
            :selected-inputs="selectedInputs"
            :node-props="nodeProps.inputNodes"
            @change="runModels()"
          />
          <section class="p-4">
            <nav class="level">
              <div class="level-left">
                <div class="level-item">
                  <h4 class="title is-4">
                    Selected fuels
                  </h4>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <multiselect
                    :label="'Add/remove fuel models'"
                    :options="fuelStrings"
                    :selected-options="selectedFuels"
                    @updateSelection="updateSelectedFuel"
                  />
                </div>
              </div>
            </nav>
          </section>
          <fuel-props
            v-for="(fuel, index) in selectedFuels"
            :key="fuel + index"
            :fuel-model-code="fuel"
            :node-props="nodeProps.fuelNodeProps"
            @change="fuelModelRun(fuel)"
          />
        </div>
      </div>
      <div class="tile is-6 is-vertical is-parent">
        <div class="tile is-child box">
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
                    :options="outputStrings"
                    :selected-options="selectedOutputs"
                    @updateSelection="updateSelectedOutput"
                  />
                </div>
              </div>
            </nav>
          </section>
          <box-apex
            v-for="(data, index) in dataset"
            :key="index"
            :dataset="data.dataset"
            :title="getBoxplotLabel(data.label)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { nodeProps } from '@/assets/nodeProps.js'
import { defaultConfig } from '@/assets/defaultConfig.js'
import { Sim, FuelCatalog, StorageNodeMap } from '@cbevins/fire-behavior-simulator'
import { min, max, median, quantile } from 'd3-array'
import { mapGetters } from 'vuex'
import FuelProps from '~/components/FuelProps'
import InputProps from '~/components/InputProps'
import Multiselect from '~/components/Multiselect'

export default {
  name: 'BahavePlus',

  components: {
    FuelProps,
    InputProps,
    Multiselect
  },

  data () {
    return {
      sim: {},
      dag: {},
      nodeProps: {},
      selectedFuels: [],
      selectedOutputs: [],
      selectedInputs: [],
      testdata: { bb: [1, 2, 3, 4, 5], cc: 2, dd: 5, ee: 3 }
    }
  },

  computed: {
    ...mapGetters({
      fuelModels: 'selector/fuelModels',
      siteInputs: 'selector/siteInputs',
      outputNodes: 'selector/outputNodes',
      defaultDagConfig: 'selector/defaultDagConfig',
      fuelDomain: 'selector/fuelDomain',
      results: 'selector/results'

    }),

    datasetbox () {
      const topArray = []
      this.selectedOutputs.forEach((node) => {
        const fuelArray = []
        this.selectedFuels.forEach((fuel) => {
          const fuelOb = []
          fuelOb.push(fuel)
          fuelOb.push(this.results[node][fuel])
          fuelArray.push(fuelOb)
        })
        topArray.push({
          label: node,
          dataset: fuelArray
        })
      })
      return topArray
    },

    dataset () {
      const resArray = []
      this.selectedOutputs.forEach((node) => {
        const res = []
        this.selectedFuels.forEach((fuel) => {
          res.push({ x: fuel, y: this.results[node][fuel] })
        })
        resArray.push({
          label: node,
          dataset: [{ data: res }]
        })
      })
      return resArray
    },

    fuelStrings () {
      const optionsText = []
      Object.keys(this.fuelModels).forEach((key) => {
        optionsText.push([key, this.fuelModels[key].code +
                         ': ' +
                         this.fuelModels[key].label])
      })
      return optionsText
    },

    outputStrings () {
      const optionsText = []
      Object.keys(this.outputNodes).forEach((key) => {
        optionsText.push([key, this.outputNodes[key].text])
      })
      return optionsText
    },

    availFuelModelStrings () {
      const modelStrings = []
      this.fuelModels.forEach((element) => {
        modelStrings.push(element.label)
      })
      return modelStrings
    },

    selectedNodes () {
      const outputNodeList = []
      this.selectedOutputs.forEach((item) => {
        outputNodeList.push(this.outputNodes[item].geneLabel)
      })
      return outputNodeList
    }
  },

  created () {
    this.nodeProps = nodeProps
    // this.fuelCatalog = FuelCatalog
    this.$store.dispatch('selector/initOutputNodes', this.nodeProps.outputNodes)
    this.$store.dispatch('selector/initSiteInputs', this.nodeProps.inputNodes)
    this.selectedOutputs = defaultConfig.defaultOutputs
    this.selectedFuels = defaultConfig.defaultFuels
    this.sim = new Sim()
    this.dag = this.sim.createDag('basicUsage')
    this.dag.configure(this.defaultDagConfig)
    this.setNodeUnits(this.nodeProps)
    this.prepareFuels()
    this.$store.dispatch('selector/initConfig')
    this.resultsObj = new StorageNodeMap(this.dag)
    this.dag.setStorageClass(this.resultsObj)
    this.updateDagSelected()
    this.updateRequiredSiteInputs()
  },

  mounted () {
    this.runModels()
  },

  beforeUpdate () {
    window.dispatchEvent(new Event('resize'))
  },

  methods: {
    getBoxplotLabel (node) {
      return this.outputNodes[node].text + ' (' +
        this.outputNodes[node].units + ')'
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

    getSeries (results) {
      const res = []
      for (const [key, val] of Object.entries(results)) {
        if (val.length === 1) {
          res.push({ x: key, y: Array(5).fill(val[0]) })
        } else {
          const stats = this.getStats(val)
          res.push({ x: key, y: stats })
        }
      }
      return [{ data: res }]
    },

    runModel (fuel) {
      this.setFuelInputs(fuel)
      this.setSiteInputs()
      this.dag.run()
      this.selectedOutputs.forEach((item) => {
        const geneLabel = this.outputNodes[item].geneLabel
        const node = this.dag.get(geneLabel)
        const res = this.resultsObj.get(geneLabel)
        const dispRes = []
        res.forEach((item) => {
          dispRes.push(node._variant.displayValue(item))
        })
        this.$store.dispatch('selector/updateResults', { output: item, fuel, payload: this.getStats(dispRes.map(Number)) })
      })
    },

    fuelModelRun (fuel) {
      this.runModel(fuel)
    },

    updateDagSelected () {
      this.dag.clearSelected()
      this.dag.select(this.selectedNodes)
    },

    updateRequiredSiteInputs () {
      this.selectedInputs = []
      const reqNodes = []
      this.dag.requiredInputNodes().forEach((node) => {
        if (node.key().split('.')[0] === 'site') {
          reqNodes.push(node.key())
        }
      })
      Object.keys(this.siteInputs).forEach((key) => {
        if (reqNodes.includes(this.siteInputs[key].geneLabel)) {
          this.selectedInputs.push(key)
        }
      })
    },

    runModels () {
      this.selectedFuels.forEach((item) => {
        this.runModel(item)
      })
    },

    setNodeUnits (nodePropObject) {
      Object.values(nodePropObject).forEach((group) => {
        Object.values(group).forEach((item) => {
          const node = this.dag.get(item.geneLabel)
          node._variant.setDisplayUnits(item.units)
          node._variant.setDisplayDecimals(item.decimals)
        })
      })
    },

    prepareFuels () {
      const Ms = FuelCatalog.models().filter(item => item.domain === 'behave')
      const fuelMs = {}
      Ms.forEach((item) => {
        const label = item.code
        fuelMs[label] = JSON.parse(JSON.stringify(item))
        fuelMs[label].selected = false
        Object.values(this.nodeProps.fuelNodeProps).forEach((fuelProp) => {
          const node = this.dag.get(fuelProp.geneLabel)
          const val = node._variant.displayValue(item[fuelProp.catalogParam])
          fuelMs[label][fuelProp.catalogParam] = parseFloat(val)
        })
      })
      const defFuels = defaultConfig.defaultFuels
      defFuels.forEach((item) => {
        fuelMs[item].selected = true
      })
      this.$store.dispatch('selector/initFuelModels', fuelMs)
    },

    /**
     * Make an array of evenly spaced numbers between min and max
     * values of the input array with a length of noElements param + 1
     * @param  {Array} origArray Input array
     * @param  {Number} noElements The second number
     * @return {Array} values The array with evenly spaced numbers
     */
    makeRange (origArray, noElements) {
      const vMax = max(origArray)
      const vMin = min(origArray)
      const increments = ((vMax - vMin) / noElements)
      const values = [...Array(noElements + 1)].map((x, y) => vMin + increments * y)
      return values
    },

    arrayToNative (node, values) {
      const valuesNative = []
      values.forEach((element) => {
        valuesNative.push(node._variant.displayValueToNativeValue(element))
      })
      return valuesNative
    },

    setSiteInputs () {
      Object.values(this.siteInputs).forEach((input) => {
        const node = this.dag.get(input.geneLabel)
        const val = input.value
        if (Array.isArray(val)) {
          const values = this.makeRange(val, 4)
          const valuesNative = this.arrayToNative(node, values)
          this.dag.input([[node, valuesNative]])
        } else {
          this.dag.input([[node, node._variant.displayValueToNativeValue(val)]])
        }
      })
    },

    setFuelInputs (fuel) {
      this.dag.input([['surface.primary.fuel.model.catalogKey', fuel]])
      Object.values(this.nodeProps.fuelNodeProps).forEach((fuelProp) => {
        if (fuelProp.selected) {
          const node = this.dag.get(fuelProp.geneLabel)
          node._is._input = true
          const val = this.fuelModels[fuel][fuelProp.catalogParam]
          if (Array.isArray(val)) {
            const values = this.makeRange(val, 9)
            const valuesNative = this.arrayToNative(node, values)
            this.dag.input([[node, valuesNative]])
          } else {
            this.dag.input([[node, node._variant.displayValueToNativeValue(val)]])
          }
        }
      })
    },

    modelSetup () {
      this.updateDagSelected()
      this.updateRequiredSiteInputs()
    },

    updateSelectedOutput (label, payload) {
      if (payload !== true) {
        const index = this.selectedOutputs.indexOf(label)
        if (index > -1) {
          this.selectedOutputs.splice(index, 1)
        }
      } else {
        this.selectedOutputs.push(label)
      }
      this.modelSetup()
      this.runModels()
    },

    updateSelectedFuel (label, payload) {
      if (payload !== true) {
        const index = this.selectedFuels.indexOf(label)
        if (index > -1) {
          this.selectedFuels.splice(index, 1)
        }
      } else {
        this.selectedFuels.push(label)
        this.runModel(label)
      }
    }
  }
}
</script>
