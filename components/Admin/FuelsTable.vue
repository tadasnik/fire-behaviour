<template>
  <section class="section">
    <div class="container box">
      <b-table
        :data="data"
        :selected.sync="selected"
        @click="selectFuel"
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
      </b-table>
    </div>
  </section>
</template>
<script>

export default {

  components: {
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
      selected: null,
      fuelPropNames: ['depth', 'dead1Load', 'dead10Load', 'dead100Load', 'totalHerbLoad', 'liveStemLoad', 'dead1Savr', 'liveHerbSavr', 'liveStemSavr', 'deadMext'],
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
  },

  methods: {
    selectFuel (payload) {
      console.log('selectFuel', payload)
      this.$emit('change', payload)
    },
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
    }
  }
}
</script>
