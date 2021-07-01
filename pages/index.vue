<template>
  <section class="section">
    <div class="tile is-ancestor">
      <div class="tile is-6 is-vertical is-parent">
        <div class="tile is-child box">
          <p
            class="title"
          >
            Site inputs
          </p>
          <input-props
            key="uidinputs"
            :node-props="nodeProps.inputNodeProps"
            @change="runModels()"
          />
        </div>
        <div class="tile is-child box">
          <div class="level-left mb-4" style="width: 100%">
            <div class="level-item">
              <p class="subtitle is-3">
                <strong>Select fuel model</strong>
              </p>
            </div>
            <div class="level-item">
              <select-option
                :options="availFuelModelStrings"
                :selected="selectedPrimaryFuelString"
                @updateOption="addFuelToSelected($event)"
              />
            </div>
          </div>
          <fuel-props
            v-for="(item, index) in selectedFuels"
            :key="item + index"
            :fuel-model-code="item"
            :node-props="nodeProps.fuelNodeProps"
            @change="runModel(item)"
          />
        </div>
      </div>
      <div class="tile is-6 is-vertical is-parent">
        <div class="tile is-child box">
          <box-plot
            :dataset="dataset['surface.weighted.fire.flameLength']"
            :title="titleFlameHeight"
          />
        </div>
        <div class="tile is-child box">
          <box-plot
            :dataset="dataset['surface.weighted.fire.spreadRate']"
            :title="titleFireSpread"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { nodeProps } from '@/assets/nodeProps.js'
import { Sim, FuelCatalog, StorageNodeMap } from '@cbevins/fire-behavior-simulator'
import { min, max, median, quantile } from 'd3-array'
import { mapGetters } from 'vuex'
import FuelProps from '~/components/FuelProps'
import InputProps from '~/components/InputProps'
import SelectOption from '~/components/SelectOption'
// import BarPlot from '~/components/BarPlot'
// import Echars from '~/components/Echars'
import BoxPlot from '~/components/BoxPlot'

export default {
  name: 'BahavePlus',

  components: {
    FuelProps,
    InputProps,
    SelectOption,
    BoxPlot
  },

  data () {
    return {
      sim: {},
      dag: {},
      results: {},
      nodeProps: {},
      activeTab: 0,
      availFuelModels: [],
      numbers: [2, 4],
      fuelModelsDisabled: true,
      resultsObj: {},
      dataset: {
        'surface.weighted.fire.flameLength': {},
        'surface.weighted.fire.spreadRate': {}
      },
      titleFlameHeight: {
        text: 'Flame length (m)'
      },
      titleFireSpread: {
        text: 'Fire spread rate (m/min)'
      }
    }
  },

  computed: {
    ...mapGetters({
      fuelModels: 'selector/fuelModels',
      fuelMod: 'selector/fuelMod',
      siteInputs: 'selector/siteInputs',
      siteInput: 'selector/siteInput',
      selectNodes: 'selector/selectNodes',
      defaultDagConfig: 'selector/defaultDagConfig',
      fuelDomain: 'selector/fuelDomain',
      selectedFuels: 'selector/selectedFuels'
    }),

    getFlameLength () {
      return this.dataset['surface.weighted.fire.flameLength']
    },
    getFuelNodes () {
      return this.nodeProps.fuelNodeProps.filter(item => item.used === true)
    },

    getInputNodes () {
      return this.nodeProps.inputNodeProps.filter(item => item.used === true)
    },

    getSelectedNodes () {
      return this.dag.selectedNodes()
    },

    availFuelModelStrings () {
      const modelStrings = []
      this.fuelModels.forEach((element) => {
        modelStrings.push(element.label)
      })
      return modelStrings
    },

    selectedPrimaryFuelString () {
      return (this.fuelModels.filter(element => element.code === this.selectedFuels[0]))[0].label
    },

    getResults () {
      const resul = []
      const selNodes = this.getSelectedNodes
      selNodes.forEach((node) => {
        resul.push([node.label().split(' ').slice(-2), node.displayValue()])
      })
      return resul
    }
  },

  created () {
    this.nodeProps = nodeProps
    // this.fuelCatalog = FuelCatalog
    this.$store.dispatch('selector/initConfig')
    this.$store.dispatch('selector/initSiteInputs', this.nodeProps.inputNodeProps)
    this.sim = new Sim()
    this.dag = this.sim.createDag('basicUsage')
    this.setNodeUnits(this.nodeProps)
    this.prepareFuels()
    this.dag.select(this.selectNodes)
    this.dag.configure(this.defaultDagConfig)
    this.resultsObj = new StorageNodeMap(this.dag)
    this.populateResults()
    this.dag.setStorageClass(this.resultsObj)
    this.runModels()
  },

  mounted () {
  },

  methods: {

    populateResults () {
      this.selectNodes.forEach((item) => {
        this.results[item] = {}
        this.dataset[item] = {}
      })
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

    getSeriesN (results) {
      const res = []
      for (const [key, val] of Object.entries(results)) {
        res.push({ x: key, y: val })
      }
      return [{ data: res }]
    },

    runModel (fuel) {
      this.setFuelInputs(fuel)
      this.setSiteInputs()
      this.dag.run()
      this.selectNodes.forEach((item) => {
        console.log('run', item)
        const node = this.dag.get(item)
        const res = this.resultsObj.get(item)
        const dispRes = []
        res.forEach((item) => {
          dispRes.push(node._variant.nativeValueToDisplayValue(item))
        })
        console.log('run re ', dispRes)
        this.results[item][fuel] = this.getStats(dispRes)
        console.log('run results ', this.results[item])
        console.log('run dataset ', this.getSeriesN(this.results[item]))
        this.dataset[item] = this.getSeriesN(this.results[item])
      })
    },

    runModels () {
      this.selectedFuels.forEach((item) => {
        this.runModel(item)
      })
      // this.dataset = this.getSeries()
    },

    fuelPropChange (fuel, prop, payload) {

    },

    formatResults (fuel) {
      const res = {
        x: fuel,
        y: []
      }
      return res
    },

    setNodeUnits (nodePropObject) {
      for (const key in nodePropObject) {
        nodePropObject[key].forEach((item) => {
          this.dag.get(item.geneLabel)._variant.setDisplayUnits(item.units)
        })
      }
    },

    prepareFuels () {
      const Ms = FuelCatalog.models().filter(item => item.domain === 'behave').slice()
      const fuelMs = JSON.parse(JSON.stringify(Ms))
      this.nodeProps.fuelNodeProps.forEach((fuelProp) => {
        if (fuelProp.used === true) {
          const node = this.dag.get(fuelProp.geneLabel)
          fuelMs.forEach((item) => {
            const val = node._variant.displayValue(item[fuelProp.catalogParam])
            item[fuelProp.catalogParam] = parseFloat(val)
          })
        }
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
      values.forEach((element, index) => {
        valuesNative.push(node._variant.displayValueToNativeValue(element))
      })
      return valuesNative
    },

    setSiteInputs () {
      this.siteInputs.forEach((input) => {
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
      this.nodeProps.fuelNodeProps.forEach((fuelProp) => {
        if (fuelProp.used) {
          const node = this.dag.get(fuelProp.geneLabel)
          node._is._input = true
          const val = this.fuelMod(fuel)[fuelProp.catalogParam]
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

    getPrimaryFuel (label) {
      return this.fuelCatalog.models().filter(element =>
        element.label === label
      )[0]
    },

    getFuelCode (payload) {
      const fuel = this.fuelModels.filter(element => element.label === payload)[0].code
      return fuel
    },

    addFuelToSelected (selected) {
      const fuelCode = this.getFuelCode(selected)
      this.$store.dispatch('selector/addSelectedFuel', fuelCode)
      this.runModels()
    },

    removeFuelFromSelected (selected) {
      const fuelCode = this.getFuelCode(selected)
      this.$store.dispatch('selector/removeSelectedFuel', fuelCode)
      this.runModels()
    },

    getStoreValue (label) {
      return parseFloat(this[label])
    },

    updateSiteInput (geneLabel, payload) {
      this.$store.dispatch('selector/updateSiteInputsProp', { geneLabel, payload })
      this.runModels()
    }
  }
}
</script>
