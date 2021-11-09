<template>
  <div>
    <b-navbar type="is-danger">
      <template #start>
        <b-navbar-item
          tag="nuxt-link"
          to="/"
          type="is-danger"
        >
          Home
        </b-navbar-item>
        <b-navbar-item
          tag="nuxt-link"
          to="/admin/fuels"
        >
          Edit fuels
        </b-navbar-item>
      </template>
    </b-navbar>
    <section>
      <nuxt />
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
