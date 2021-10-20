<template>
  <div>
    <section class="section">
      <table-b :data="getFuels" :node-props="nodeProps" />
    </section>
  </div>
</template>

<script>
// import { Sim, StorageNodeMap } from '@cbevins/fire-behavior-simulator'
import { mapGetters } from 'vuex'
import { median } from 'd3-array'
// import { defaultConfig } from '@/assets/defaultConfig.js'
import { nodeProps } from '@/assets/nodeProps.js'
// import { exFuels } from '@/assets/fuels.js'

export default {
  name: 'FuelsTable',

  components: {
  },

  data () {
    return {
      nodeProps: {},
      fuelPropNames: ['depth', 'dead1Load', 'dead10Load', 'dead100Load', 'totalHerbLoad', 'liveStemLoad', 'dead1Savr', 'liveHerbSavr', 'liveStemSavr', 'deadMext'],
      behavePropNames: ['fireFlameLength', 'fireSpreadRate']
    }
  },

  computed: {
    ...mapGetters({
      fuelModels: 'selector/fuelModels',
      siteInputs: 'selector/siteInputs',
      // canopyInputs: 'selector/canopyInputs',
      outputNodes: 'selector/outputNodes',
      results: 'selector/results',
      rangeInput: 'selector/rangeInput',
      selectedOutputs: 'selector/selectedOutputs',
      selectedFuels: 'selector/selectedFuels',
      defaultDagConfig: 'selector/defaultDagConfig'
    }),

    getFuels () {
      const resArray = []
      this.selectedFuels.forEach((fuel) => {
        const fuelModel = this.fuelModels[fuel]
        this.behavePropNames.forEach((prop) => {
          fuelModel[prop] = median(this.results[prop][fuel])
        })
        resArray.push(fuelModel)
      })
      return resArray
    },

    getCsvColumns () {
      const csvColumns = {}
      this.getColumns.forEach((column) => {
        csvColumns[column.field] = {
          title: column.label
        }
      })
      return csvColumns
    },

    getColumns () {
      const columns = []
      columns.push({
        field: 'code',
        label: 'Fuel model',
        width: 20
      })
      columns.push({
        field: 'label',
        label: 'Description',
        width: 350
      })

      this.fuelPropNames.forEach((prop) => {
        columns.push({
          field: prop,
          label: this.nodeProps.fuelNodeProps[prop].label + ' (' +
            this.nodeProps.fuelNodeProps[prop].units + ')',
          width: 10
        })
      })
      return columns
    }
  },
  created () {
    this.nodeProps = nodeProps
  }
}

</script>
