<template>
  <div
    :class="`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
      variant === 'filled' ? bgColor + ' ' + textColor : 'border ' + borderColor + ' ' + textColor
    } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`"
  >
    <slot name="prefix" />
    <span class="mx-1">
      <slot />
    </span>
    <span
      v-if="closable && !disabled"
      @click="$emit('close')"
      class="ml-1 cursor-pointer hover:opacity-75"
    >
      ×
    </span>
    <slot name="suffix" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

/**
 * Chip Component
 * 
 * Displays compact elements that represent an input, attribute, or action
 */
export default defineComponent({
  name: 'AppChip',
  props: {
    /**
     * Visual variant of the chip
     */
    variant: {
      type: String,
      default: 'filled',
      validator: (value: string) => ['filled', 'outlined'].includes(value),
    },
    /**
     * Background color class (TailwindCSS) - used in filled variant
     */
    bgColor: {
      type: String,
      default: 'bg-primary',
    },
    /**
     * Text color class (TailwindCSS)
     */
    textColor: {
      type: String,
      default: 'text-white',
    },
    /**
     * Border color class (TailwindCSS) - used in outlined variant
     */
    borderColor: {
      type: String,
      default: 'border-primary',
    },
    /**
     * Whether the chip can be closed/removed
     */
    closable: {
      type: Boolean,
      default: false,
    },
    /**
     * Whether the chip is disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],
})
</script>
