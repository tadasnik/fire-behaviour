<template>
  <div class="block">
    <b-field :label="title" style="width: 100%;">
      <div class="level">
        <div class="level-left" style="width: 80%">
          <b-slider
            :value="value"
            :max="max"
            :step="step"
            indicator
            lazy
            @change="passValue($event)"
          />
        </div>
        <div class="level-right" style="width: 20%">
          <b-switch
            v-model="isDisabled"
            @input="passEvent($event)"
          />
          Range
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
      console.log('switch', this.isDisabled)
      this.$emit('input', this.isDisabled)
    }

  }
}

</script>
