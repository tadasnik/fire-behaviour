<template>
  <div>
    <nav
      class="navbar header has-shadow is-warning"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <nuxt-link
          class="navbar-item"
          to="/"
        >
          UKFDRS/BehavePlus
        </nuxt-link>
        <nuxt-link
          class="navbar-item"
          to="table"
        >
          Table View
        </nuxt-link>
        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section>
      <div class="container">
        <nuxt />
      </div>
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
