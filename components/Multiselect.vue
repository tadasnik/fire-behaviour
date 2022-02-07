<template>
  <section>
    <b-dropdown
      :scrollable="true"
      :max-height="550"
      aria-role="list"
      expanded
      multiple
      @change="toggleItem($event)"
    >
      <template #trigger>
        <b-button
          expanded
          icon-left="cog"
          :label="label"
          type="is-warning"
          icon-right="menu-up"
        />
      </template>
      <b-dropdown-item
        v-for="([option, text], index) in options"
        :key="index"
        :value="option"
        custom
        aria-role="listitem"
      >
        <b-checkbox
          :value="isSelected(option)"
          @input="toggleSelected($event, option)"
        >
          <span>{{ text }}</span>
        </b-checkbox>
      </b-dropdown-item>
    </b-dropdown>
  </section>
</template>

<script>
export default {

  props: {

    label: {
      type: String,
      required: true
    },

    options: {
      type: Array,
      required: true
    },

    selectedOptions: {
      type: Array,
      required: true
    }
  },

  methods: {

    isSelected (option) {
      return this.selectedOptions.includes(option)
    },

    toggleSelected (payload, label) {
      this.$emit('updateSelection', label, payload)
    }

  }
}
</script>
