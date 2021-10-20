<template>
  <div class="column is-narrow px-1 py-1">
    <div class="box px-1 py-1">
      <article class="media m-0  is-clickable" @click="isCardModalActive = true">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="require(`~/assets/images/${getThumbnail}`)" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p class="bd-notification is-info">
              <strong>{{ getFuelModelDisplayLabel }}</strong>
              <br>
              ({{ fuelModelCode }})
            </p>
          </div>
        </div>
      </article>
      <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="getURL" alt="Image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">
                  {{ getFuelModelDisplayLabel }}
                </p>
                <p class="subtitle is-5">
                  BehavePlus fuel model <strong>{{ fuelModelCode }}</strong>
                </p>
              </div>
            </div>

            <div class="content">
              {{ getDescription }}
            </div>
            <div class="content">
              <h5>Fuel model parameters</h5>
              <ul>
                <li
                  v-for="({ catalogParam, label }, index) in getFuelNodes"
                  :key="index+catalogParam"
                >
                  {{ label }}: <strong>{{ getValue(catalogParam) }}</strong> {{ getUnits(catalogParam) }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {

  components: {
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
      fuelModel: {},
      isCardModalActive: false
    }
  },

  computed: {

    ...mapGetters({
      fuelModels: 'selector/fuelModels'
    }),

    getURL () {
      return this.fuelModels[this.fuelModelCode].photo
    },

    getThumbnail () {
      return this.fuelModels[this.fuelModelCode].thumbnail
    },

    getFuelModelDisplayLabel () {
      return this.fuelModels[this.fuelModelCode].displayLabel
    },

    getDescription () {
      return this.fuelModels[this.fuelModelCode].description
    },

    getFuelNodes () {
      const fuelNodes = []
      Object.values(this.nodeProps).forEach((item) => {
        if (item.selected === true) {
          fuelNodes.push(item)
        }
      })
      return fuelNodes
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

    getUnits (param) {
      return this.nodeProps[param].units
    },

    setValue (param, payload) {
      this.$store.dispatch('selector/updateFuelProp', { fuel: this.fuelModelCode, param, payload })
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
  .box:hover {
     background-color: $grey-light;
  }
</style>
