<template>
  <section>
    <p>test</p>
    <fuels-table
      :data="getFuels"
      :node-props="nodeProps"
      @change="changeSelected($event)"
    />
    <pre v-if="selectedFuel">{{ selectedFuel }}</pre>
    <admin-fuel-form
      v-if="selectedFuel"
      :fuel="selectedFuel"
      :fuel-props="nodeProps.fuelNodeProps"
      @submitFuel="onSubmitted"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
// import fuelsBehave from '@/assets/behaveFuels.json'
// import fuelsUK from '@/assets/UKFuels.json'
import { nodeProps } from '@/assets/nodeProps.js'
import FuelsTable from '~/components/Admin/FuelsTable'

export default {

  components: {
    FuelsTable
  },

  layout: 'admin',

  middleware: ['auth'],

  data () {
    return {
      selectedFuel: null,
      selectedFuels: ['sh4', 'sh6', 'sh8'],
      fuelsBehave: {},
      fuelsUK: {},
      nodeProps: {}
    }
  },

  computed: {
    ...mapGetters({
      fuelModels: 'fuelModelsUK',
      isAuthenticated: 'isAuthenticated'
    }),

    getFuels () {
      const resArray = []
      this.selectedFuels.forEach((fuel) => {
        console.log(fuel)
        const fuelModel = this.fuelModels[fuel]
        resArray.push(fuelModel)
      })
      console.log('getFuels', resArray)
      return resArray
    }
  },

  created () {
    // this.fuelsBehave = fuelsBehave
    // this.fuelsUK = fuelsUK
    this.nodeProps = nodeProps
    // console.log(this.getFuels)
    // this.populateDatabase(this.fuelsBehave)
  },

  methods: {

    async onSubmitted (submitedFuel) {
      console.log(submitedFuel)
      await this.$store.dispatch('addFuel', { key: 'fuelsUK', fuel: submitedFuel })
      // this.$router.push('/admin')
    },

    changeSelected (payload) {
      console.log('change', payload)
      this.selectedFuel = payload
      this.$router.push('/admin/fuels/' + payload.id)
    },

    populateDatabase (fuels) {
      Object.entries(fuels).forEach(([_, item]) => {
        this.$store.dispatch('addFuel', { key: 'fuelsBehave', fuel: item })
      })
    },

    populateDatabaseUK (fuels) {
      Object.entries(fuels).forEach(([_, item]) => {
        const fuelUK = { ...item, codeUK: item.code + '_UK' }
        this.$store.dispatch('addFuel', { key: 'fuelsUK', fuel: fuelUK })
      })
    }
  }
}
</script>
