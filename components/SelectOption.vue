<template>
  <b-field>
    <b-select
      v-model="selOption"
      placeholder="Select fuel"
      @input="changeOption($event)"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
      >
        {{ option }}
      </option>
    </b-select>
  </b-field>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  directives: {
    clickOutside: vClickOutside.directive
  },

  props: {
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      selOption: this.selected,
      isActive: false
    }
  },

  watch: {
    // whenever selected changes, this function will run
    selected (newSelected, oldSelected) {
      this.setValue(newSelected)
    }
  },

  mounted () {
    console.log('selector mounted')
    console.log(this.selOption)
  },

  methods: {

    hide () {
      if (this.isActive) {
        this.isActive = false
      }
    },

    changeOption (option) {
      console.log('option changed', option)
      this.$emit('updateOption', option)
    },

    setValue (payload) {
      this.selOption = payload
    }
  }
}
</script>
<style>
.field {
    display: inline-block;
}
</style>
