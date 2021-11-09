<template>
  <div>
    <section>
      <AdminFuelForm :fuel="loadedFuel" :fuel-props="nodeProps" @submitFuel="onSubmitted" />
    </section>
  </div>
</template>

<script>
import { nodeProps } from '@/assets/nodeProps.js'
import AdminFuelForm from '@/components/Admin/AdminFuelForm'
export default {

  components: {
    AdminFuelForm
  },

  layout: 'admin',

  middleware: ['auth'],

  async asyncData ({ params, $http }) {
    const rawFuel = await $http.$get('fuelsUK/' + params.id + '.json')
    const loadedFuel = { ...rawFuel, id: params.id }
    return { loadedFuel }
  },

  data () {
    return {
      fuelDomain: 'fuelsUK'
    }
  },

  created () {
    this.nodeProps = nodeProps.fuelNodeProps
  },

  methods: {
    async onSubmitted (submitedFuel) {
      console.log(submitedFuel)
      await this.$store.dispatch('editFuel', { key: 'fuelsUK', fuel: submitedFuel })
      this.$router.push('/admin/fuels')
    }
  }
}
</script>
<style>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
