<template>
  <div class="block">
    <b-field :label="title" style="width: 90%;">
      <b-slider
        :value="value"
        :max="max"
        :step="step"
        :disabled="disabled"
        indicator
        lazy
        @change="passValue($event)"
      />
    </b-field>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: [Number, Array],
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    step: {
      type: Number,
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
    }
  },

  methods: {
    passValue (payload) {
      this.$emit('change', payload)
    }
  }
}

</script>
