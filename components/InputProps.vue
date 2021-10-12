<template>
  <section>
    <b-collapse class="card" :open="true" animation="slide" aria-id="contentIdForA21y3">
      <template #trigger="props">
        <div
          class="card-header"
          role="button"
          aria-controls="contentIdForA21y3"
        >
          <p class="card-header-title">
            Required weather/site inputs
          </p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'" />
          </a>
        </div>
      </template>
      <div class="card-content">
        <div class="block">
          <fuel-control
            v-for="{ label, code, max, min, step } in getInputNodes"
            :key="label"
            :title="label"
            :value="getValue(code)"
            :max="max"
            :min="min"
            :step="step"
            indicator
            lazy
            @change="updateSiteInput(code, $event)"
            @input="triggerArray(code, $event)"
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
    selectedInputs: {
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
    }
  },

  computed: {

    ...mapGetters({
      siteInputs: 'selector/siteInputs'
    }),

    getInputNodes () {
      const inputNodes = []
      this.selectedInputs.forEach((item) => {
        inputNodes.push(this.siteInputs[item])
      })
      return inputNodes
      // return this.nodeProps.filter(item => item.selected === true)
    }
  },

  methods: {

    getValue (param) {
      return this.siteInputs[param].value
    },

    updateSiteInput (input, payload) {
      const prop = 'value'
      this.$store.dispatch('selector/updateSiteInputProp', { input, prop, payload })
      this.$emit('change')
    },

    triggerArray (param, payload) {
      if (payload === true) {
        const orig = this.getValue(param)
        let val = []
        val = [orig, orig * 1.1]
        this.updateSiteInput(param, val)
      } else {
        const val = [...this.getValue(param)]
        this.updateSiteInput(param, val[0])
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.card-header {
 background-color: $warning;
}
</style>
