<template>
  <section>
    <b-field label="Name">
      <b-input
        v-if="controlType === 'input'"
        v-bind="$attrs"
        @input="$emit('input', $event.target.value)"
      />
      <b-input
        v-if="controlType === 'textarea'"
        :value="value"
        maxlength="200"
        type="textarea"
        @input="$emit('input', $event.target.value)"
      />
    </b-field>
  </section>
</template>

<script>
export default {
  name: 'FuelInputForm',
  props: {

    controlType: {
      type: String,
      default: 'input'
    },

    value: {
      type: String,
      default: ''
    }
  }
}
</script>
