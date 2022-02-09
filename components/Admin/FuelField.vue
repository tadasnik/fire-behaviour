<template>
  <b-field
    :label="label"
  >
    <b-numberinput
      :value="value"
      @input="updateValue($event)"
    />
  </b-field>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },

  methods: {
    updateValue (value) {
      console.log('comp', this.label, value)
      this.$emit('updateValue', value)
    }
  }

}
</script>
