<template>
  <div>
    <b-navbar type="is-primary">
      <template #start>
        <b-navbar-item
          tag="nuxt-link"
          to="/"
          type="is-danger"
        >
          Home
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="div">
          <b-button
            tag="nuxt-link"
            to="/admin"
            type="is-warning"
          >
            admin
          </b-button>
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
