<template>
  <div class="block">
    <b-field :label="title" custom-class="is-small" horizontal style="width: 100%">
      <div class="level">
        <div class="level-left" style="width: 70%">
          <b-slider
            :value="value"
            :max="max"
            :step="step"
            indicator
            lazy
            @change="passValue($event)"
          />
        </div>
        <div class="level-right" style="width: 15%">
          <div class="level-item">
            <b-switch
              v-model="isDisabled"
              size="is-small"
              @input="passEvent($event)"
            />
            <p class="is-size-7">
              Range
            </p>
          </div>
        </div>
      </div>
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
    }
  },

  data () {
    return {
      isDisabled: false
    }
  },

  created () {
    this.checkDisabled()
  },

  methods: {

    checkDisabled () {
      if (Array.isArray(this.value)) {
        this.isDisabled = true
      } else {
        this.isDisabled = false
      }
    },

    passValue (payload) {
      this.$emit('change', payload)
    },

    passEvent (payload) {
      this.$emit('input', this.isDisabled)
    }

  }
}

</script>
