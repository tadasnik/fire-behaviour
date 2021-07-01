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
            Site inputs
          </p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'" />
          </a>
        </div>
      </template>
      <div class="card-content">
        <div class="block">
          <fuel-control
            v-for="{ label, geneLabel, max, step } in getInputNodes"
            :key="label"
            :title="label"
            :value="getValue(geneLabel)"
            :max="max"
            :step="step"
            indicator
            lazy
            @change="updateSiteInput(geneLabel, $event)"
            @input="triggerArray(geneLabel, $event)"
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
    nodeProps: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
    }
  },

  computed: {

    ...mapGetters({
      siteInput: 'selector/siteInput'
    }),

    getInputNodes () {
      return this.nodeProps.filter(item => item.used === true)
    }
  },

  methods: {

    getValue (param) {
      return this.siteInput(param)
    },

    updateSiteInput (geneLabel, payload) {
      this.$store.dispatch('selector/updateSiteInputsProp', { geneLabel, payload })
      this.$emit('change')
    },

    triggerArray (param, payload) {
      console.log('trigger', param, payload)
      if (payload === true) {
        const orig = this.getValue(param)
        let val = []
        console.log('trigger before', val)
        val = [orig, orig * 1.1]
        console.log('trigger after', val)
        this.updateSiteInput(param, val)
      } else {
        const val = [...this.getValue(param)]
        this.updateSiteInput(param, val[0])
      }
    }
  }
}
</script>
