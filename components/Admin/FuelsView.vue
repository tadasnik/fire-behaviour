<template>
  <div class="container box">
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
    </b-table>
    <section>
      <b-collapse class="card" :open="false" animation="slide" aria-id="contentIdForA11y3">
        <template #trigger="props">
          <div
            class="card-header"
            padding="0.5"
            role="button"
            aria-controls="contentIdForA11y3"
          >
            <p class="card-header-title is-size-6" is-size-1>
              {{ fuelModelCode }}: {{ getFuelModelLabel }}
            </p>
            <a class="card-header-icon">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'" />
            </a>
          </div>
        </template>
        <div class="card-content">
          <div class="block">
            <fuel-control
              v-for="{ label, catalogParam, max, min, step } in getFuelNodes"
              :key="label+fuelModelCode"
              :title="label"
              :value="getValue(catalogParam)"
              :max="max"
              :min="min"
              :step="step"
              indicator
              lazy
              @change="setValue(catalogParam, $event)"
              @input="triggerArray(catalogParam, $event)"
            />
          </div>
        </div>
      </b-collapse>
    </section>
  </div>
</template>

<script>

import FuelControl from '~/components/FuelControl'

export default {

  components: {
    FuelControl
  },

  props: {

    fuelModelCode: {
      type: String,
      required: true
    },

    nodeProps: {
      type: Object,
      required: true
    }

  },

  data () {
    return {
      fuelModel: {}
    }
  }
}
