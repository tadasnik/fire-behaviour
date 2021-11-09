<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-6-tablet is-4-desktop is-3-widescreen">
            <form action="" class="box">
              <b-field
                label="Email"
                type="is-low"
                message="This email is invalid"
              >
                <b-input
                  v-model="email"
                  type="email"
                  value="john@"
                  maxlength="30"
                />
              </b-field>

              <b-field label="Password">
                <b-input
                  v-model="password"
                  type="password"
                  value="iwantmytreasure"
                  password-reveal
                />
              </b-field>
              <b-field>
                <p class="control">
                  <b-button
                    type="is-primary"
                    @click="onSubmit"
                  >
                    {{ isLogin ? 'Login' : 'Sign Up' }}
                  </b-button>
                </p>
                <p class="control">
                  <b-button
                    type="is-low"
                    @click="isLogin = !isLogin"
                  >
                    Switch to {{ isLogin ? 'Signup' : 'Login' }}
                  </b-button>
                </p>
              </b-field>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

  layout: 'admin',

  data () {
    return {
      email: '',
      password: '',
      error: '',
      isLogin: true
    }
  },

  methods: {
    async onSubmit () {
      await this.$store.dispatch('authenticateUser', {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      })
        .catch(e => console.log(e))
      this.$router.push('/')
    }
  }
}
</script>
