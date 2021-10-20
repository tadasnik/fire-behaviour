<template>
  <section>
    <b-field grouped group-multiline>
      <div
        v-for="(column, index) in allColumns"
        :key="index"
        class="control"
      >
        <b-checkbox v-model="column.visible">
          {{ column.label }}
        </b-checkbox>
      </div>
    </b-field>
    <b-table
      :data="data"
      :striped="true"
    >
      <b-table-column
        v-for="(column, index) in columns"
        :key="index"
        v-slot="props"
        :label="column.label"
        :visible="column.visible"
        :width="column.width"
        centered
      >
        {{ props.row[column.field] }}
      </b-table-column>
      <b-table-column
        v-for="(column, index) in fireColumns"
        :key="index + column.field"
        v-slot="props"
        :label="column.label"
        :visible="column.visible"
        :width="column.width"
        centered
      >
        <span
          v-if="column.field === 'fireFlameLength'"
          :class="
            [
              'tag',
              {'is-very-low': props.row[column.field] < 0.33},
              {'is-low': props.row[column.field] >= 0.33 && props.row[column.field] < 1.2},
              {'is-moderate': props.row[column.field] >= 1.2 && props.row[column.field] <= 2.4},
              {'is-high': props.row[column.field] >= 2.4 && props.row[column.field] <= 3.6},
              {'is-very-high': props.row[column.field] >= 3.6 && props.row[column.field] <= 7.6},
              {'is-extreme': props.row[column.field] >= 7.6}
            ]"
        >
          {{ props.row[column.field] }}
        </span>
        <span
          v-if="column.field === 'fireSpreadRate'"
          :class="
            [
              'tag',
              {'is-very-low': props.row[column.field] < 0.66},
              {'is-low': props.row[column.field] >= 0.66 && props.row[column.field] < 1.66},
              {'is-moderate': props.row[column.field] >= 1.66 && props.row[column.field] <= 6.66},
              {'is-high': props.row[column.field] >= 6.66 && props.row[column.field] <= 16.66},
              {'is-very-high': props.row[column.field] >= 16.66 && props.row[column.field] <= 50},
              {'is-extreme': props.row[column.field] >= 50}
            ]"
        >
          {{ props.row[column.field] }}
        </span>
      </b-table-column>
    </b-table>
    <vue-json-to-csv
      :json-data="data"
      :labels="getCsvColumns"
    >
      <b-button
        class="is-success"
      >
        Export to csv <i class="mdi mdi-export-variant" aria-hidden="true" />
      </b-button>
    </vue-json-to-csv>
  </section>
</template>
<script>

import VueJsonToCsv from 'vue-json-to-csv'

export default {

  components: {
    VueJsonToCsv
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    nodeProps: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      fuelPropNames: ['depth', 'dead1Load', 'dead10Load', 'dead100Load', 'totalHerbLoad', 'liveStemLoad', 'dead1Savr', 'liveHerbSavr', 'liveStemSavr', 'deadMext'],
      behavePropNames: ['fireFlameLength', 'fireSpreadRate'],
      columns: {},
      fireColumns: {}
    }
  },

  computed: {
    allColumns () {
      return this.columns.concat(this.fireColumns)
    },

    getCsvColumns () {
      const csvColumns = {}
      this.allColumns.forEach((column) => {
        if (column.visible) {
          csvColumns[column.field] = {
            title: column.label
          }
        }
      })
      return csvColumns
    }
  },

  created () {
    this.columns = this.getColumns()
    this.fireColumns = this.getFireColumns()
  },

  methods: {
    getColumns () {
      const columns = []
      columns.push({
        field: 'code',
        label: 'Fuel model',
        width: 20,
        visible: true
      })
      columns.push({
        field: 'label',
        label: 'Description',
        width: 450,
        visible: true
      })

      this.fuelPropNames.forEach((prop) => {
        columns.push({
          field: prop,
          label: this.nodeProps.fuelNodeProps[prop].label + ' (' +
            this.nodeProps.fuelNodeProps[prop].units + ')',
          width: 20,
          visible: true
        })
      })
      return columns
    },

    getFireColumns () {
      const columns = []
      this.behavePropNames.forEach((prop) => {
        columns.push({
          field: prop,
          label: this.nodeProps.outputNodes[prop].label + ' (' +
            this.nodeProps.outputNodes[prop].units + ')',
          width: 20,
          visible: true
        })
      })
      return columns
    }
  }
}
</script>
