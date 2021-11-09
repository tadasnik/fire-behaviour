<template>
  <section>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-6-tablet is-4-desktop is-3-widescreen">
          <form action="" class="box">
            <b-field label="Fuel code">
              <b-input
                v-model="editedFuel.code"
              />
            </b-field>
            <b-field label="Domain">
              <b-input
                v-model="editedFuel.domain"
              />
            </b-field>
            <b-field label="Label">
              <b-input
                v-model="editedFuel.label"
              />
            </b-field>
            <b-field label="Description">
              <b-input
                v-model="editedFuel.description"
                type="textarea"
                minlength="0"
                maxlength="1000"
              />
            </b-field>
            <b-field
              :label="getPropLabel('deadMext')"
            >
              <b-numberinput
                v-model="editedFuel.deadMext"
              />
            </b-field>
            <b-button
              @click="onSave"
            >
              Save
            </b-button>
            <b-button
              @click="onCancel"
            >
              Cancel
            </b-button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

  props: {
    fuel: {
      type: Object,
      default () {
        return {}
      },
      required: false
    },

    fuelProps: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      editedFuel: this.fuel
        ? { ...this.fuel }
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: '',
            previewText: '',
            id: ''
          }
    }
  },

  methods: {

    getPropLabel (prop) {
      console.log(prop)
      return this.fuelProps[prop].label + ' (' +
      this.fuelProps[prop].units + ')'
    },

    onSave () {
      console.log('submiting', this.editedFuel)
      this.$emit('submitFuel', this.editedFuel)
    },

    onCancel () {
      // navigate back
      this.$router.push('/admin/fuels')
    }
  }
}
</script>
