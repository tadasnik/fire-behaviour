<template>
  <section>
    <b-collapse class="card" :open="false" animation="slide" aria-id="contentIdForA11y3">
      <template #trigger="props">
        <div
          class="card-header"
          role="button"
          aria-controls="contentIdForA11y3"
        >
          <p class="card-header-title">
            {{ getFuelModelLabel }}, "{{ fuelModelCode }}"
          </p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'" />
          </a>
        </div>
      </template>
      <div class="card-content">
        <div class="content">
          <b-button
            type="is-danger"
            icon-left="delete"
            @click="removeFuel(fuelModelCode)"
          >
            Remove
          </b-button>
        </div>
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
      type: Array,
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
      fuelMod: 'selector/fuelMod'
    }),

    getFuelModelLabel () {
      return this.fuelMod(this.fuelModelCode).label
    },

    getFuelNodes () {
      return this.nodeProps.filter(item => item.used === true)
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
      return this.fuelMod(this.fuelModelCode)[param]
    },

    getValueConvert (param) {
      const val = this.fuelMod(this.fuelModelCode)[param]
      if (param === 'deadHeat' || param === 'liveHeat') {
        if (Array.isArray(val)) {
          const valCopy = [...val]
          valCopy.forEach((element, index) => {
            valCopy[index] = Math.round(element / 1000)
          })
          return valCopy
        } else {
          console.log('gete')
          return Math.round(val / 1000)
        }
      }
    },

    removeFuel (payload) {
      console.log('removing fuel', payload)
      this.$store.dispatch('selector/removeSelectedFuel', payload)
      this.$emit('deleteFuel')
    },

    setValue (param, payload) {
      this.$store.dispatch('selector/updateFuelProp', { fuel: this.fuelModelCode, prop: param, value: payload })
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
      console.log('trigger', param, payload)
      if (payload === true) {
        const orig = this.getValue(param)
        let val = []
        console.log('trigger before', orig)
        val = [orig, orig * 1.1]
        console.log('trigger after', val)
        this.setValue(param, val)
      } else {
        const val = [...this.getValue(param)]
        this.setValue(param, val[0])
      }
    }
  }
}
</script>
