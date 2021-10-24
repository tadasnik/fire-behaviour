<template>
  <div>
    <b-navbar type="is-primary">
      <template #start>
        <b-navbar-item href="/">
          Home
        </b-navbar-item>
        <b-navbar-item href="table">
          Model
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
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
