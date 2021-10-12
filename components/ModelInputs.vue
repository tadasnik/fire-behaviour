<template>
  <section>
    <h4 class="title is-4">
      BehavePlus inputs
    </h4>
    <div class="block">
      <slide-radio
        v-for="{ label, code, max, min, step, description } in getInputNodes"
        :key="label"
        :title="label"
        :value="getValue(code)"
        :code="code"
        :max="max"
        :min="min"
        :step="step"
        :description="description"
        indicator
        lazy
        @change="updateSiteInput(code, $event)"
        @changeInput="resetRangeInput(code, $event)"
      />
    </div>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'
import SlideRadio from '~/components/SlideRadio'

export default {
  components: {
    SlideRadio
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
      radio: 'default'
    }
  },

  computed: {

    ...mapGetters({
      siteInputs: 'selector/siteInputs',
      rangeInput: 'selector/rangeInput'
    }),

    getInputNodes () {
      const inputNodes = []
      this.selectedInputs.forEach((item) => {
        if (this.siteInputs[item].selected) {
          inputNodes.push(this.siteInputs[item])
        }
      })
      return inputNodes
      // return this.nodeProps.filter(item => item.selected === true)
    }
  },

  methods: {

    resetRangeInput (code) {
      console.log('cur range input', this.rangeInput)
      console.log('seting range input', code)
      // update previous rangeInput value to single value
      const defValue = this.siteInputs[this.rangeInput].defValue
      console.log('curVal', defValue)
      this.updateSiteInput(this.rangeInput, defValue)
      console.log('range input', this.rangeInput)
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
      console.log('changing value', input, payload)
      if (Array.isArray(payload)) {
        payload = this.makeRange(payload, 20)
        console.log(input, 'values', payload)
        this.$store.dispatch('selector/updateSiteInputProp',
          { input, prop, payload })
      } else {
        this.$store.dispatch('selector/updateSiteInputProp', { input, prop, payload })
      }
      this.$emit('change')
    },

    makeRange (origArray, noElements) {
      console.log(origArray)
      const vMin = Math.min(origArray[0], origArray[1])
      const vMax = Math.max(origArray[0], origArray[1])
      const increments = ((vMax - vMin) / noElements)
      console.log(increments)
      const values = [...Array(noElements + 1)].map((_, y) => vMin + increments * y)
      console.log(values)
      return values
    },

    getValue (param) {
      const values = this.siteInputs[param].value
      if (Array.isArray(values)) {
        return [values[0], values.slice(-1)[0]]
      } else { return values }
    },

    triggerArray (param, payload) {
      console.log()
      if (payload === true) {
        const orig = this.getValue(param)
        let val = []
        val = [orig, orig * 1.5]
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
