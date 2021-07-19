<template>
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
            v-for="{ label, catalogParam, max, step } in getFuelNodes"
            :key="label+fuelModelCode"
            :title="label"
            :value="getValue(catalogParam)"
            :max="max"
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
</template>

<script>

import { mapGetters } from 'vuex'
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
  },

  computed: {

    ...mapGetters({
      fuelModels: 'selector/fuelModels'
    }),

    getFuelModelLabel () {
      return this.fuelModels[this.fuelModelCode].label
    },

    getFuelNodes () {
      const fuelNodes = []
      Object.values(this.nodeProps).forEach((item) => {
        if (item.selected === true) {
          fuelNodes.push(item)
        }
      })
      return fuelNodes
      // return this.nodeProps.filter(item => item.selected === true)
    }
  },

  methods: {

    getArrayMode (geneLabel) {
      const val = this.getValue(geneLabel)
      if (val.length > 1) {
        return true
      } else {
        return false
      }
    },

    getValue (param) {
      return this.fuelModels[this.fuelModelCode][param]
    },

    getValueConvert (param) {
      const val = this.fuelModels[this.fuelModelCode][param]
      if (param === 'deadHeat' || param === 'liveHeat') {
        if (Array.isArray(val)) {
          const valCopy = [...val]
          valCopy.forEach((element, index) => {
            valCopy[index] = Math.round(element / 1000)
          })
          return valCopy
        } else {
          return Math.round(val / 1000)
        }
      }
    },

    setValue (param, payload) {
      this.$store.dispatch('selector/updateFuelProp', { fuel: this.fuelModelCode, param, payload })
      this.$emit('change')
    },

    setValueConvert (param, payload) {
      if (param === 'deadHeat' || param === 'liveHeat') {
        if (Array.isArray(payload)) {
          const copyPayload = [...payload]
          copyPayload.forEach((element, index) => {
            copyPayload[index] = Math.round(element * 1000)
          })
          this.$store.dispatch('selector/updateFuelProp', { fuel: this.fuelModelCode, prop: param, value: copyPayload })
        } else {
          const copyPayload = payload.valueOf() * 1000
          this.$store.dispatch('selector/updateFuelProp', { fuel: this.fuelModelCode, prop: param, value: copyPayload })
        }
      }
      this.$emit('change')
    },

    triggerArray (param, payload) {
      if (payload === true) {
        const orig = this.getValue(param)
        let val = []
        val = [orig, orig * 1.1]
        this.setValue(param, val)
      } else {
        const val = [...this.getValue(param)]
        this.setValue(param, val[0])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-header:hover {
 background-color: $grey-light;
}
</style>
