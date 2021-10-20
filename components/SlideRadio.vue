<template>
  <b-field grouped style="width: 95%">
    <b-field label="range" custom-class="is-small">
      <b-radio
        :value="rangeInput"
        :native-value="code"
        type="is-danger"
        @input="setRangeInput()"
      />
    </b-field>
    <b-field custom-class="is-small" expanded>
      <template #label>
        {{ title }} ({{ units }})
        <b-tooltip type="is-light" size="is-large" multilined :label="description">
          <b-icon size="is-small" icon="help-circle-outline" />
        </b-tooltip>
      </template>
      <b-slider
        :value="value"
        :max="max"
        :min="min"
        :step="step"
        type="is-danger"
        indicator
        lazy
        @change="passValue($event)"
      />
      </b-radio>
    </b-field>
  </b-field>
</template>

<script>
import { mapGetters } from 'vuex'

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
    code: {
      type: String,
      required: true
    },
    units: {
      type: String,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    step: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters({
      rangeInput: 'selector/rangeInput'
    })
  },

  methods: {

    setRangeInput () {
      this.$emit('changeInput', this.code)
    },

    passValue (payload) {
      this.$emit('change', payload)
    }
  }
}

</script>
