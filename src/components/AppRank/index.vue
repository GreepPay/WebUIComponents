<!-- AppRankBadge.vue -->
<template>
  <span 
    :class="[
      'inline-flex items-center justify-center rounded-full text-xs font-medium border',
      sizeClasses,
      backgroundColor,
      textColor,
      borderColor,
      customClass
    ]"
  >
    {{ rank }}
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"

export default defineComponent({
  name: "AppRankBadge",
  props: {
    rank: {
      type: Number,
      required: true
    },
    size: {
      type: String as () => 'sm' | 'md' | 'lg',
      default: 'md'
    },
    variant: {
      type: String as () => 'default' | 'primary' | 'secondary',
      default: 'default'
    },
    customClass: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const sizeClasses = computed(() => {
      switch (props.size) {
        case 'sm': return 'w-5 h-5 text-xs'
        case 'lg': return 'w-8 h-8 text-sm'
        default: return 'w-6 h-6 text-xs'
      }
    })

    const backgroundColor = computed(() => {
      switch (props.variant) {
        case 'primary': return 'bg-blue-500'
        case 'secondary': return 'bg-green-500'
        default: return 'bg-gray-100'
      }
    })

    const textColor = computed(() => {
      switch (props.variant) {
        case 'primary': return 'text-white'
        case 'secondary': return 'text-white'
        default: return 'text-gray-700'
      }
    })

    const borderColor = computed(() => {
      switch (props.variant) {
        case 'primary': return 'border-blue-600'
        case 'secondary': return 'border-green-600'
        default: return 'border-gray-300'
      }
    })

    return {
      sizeClasses,
      backgroundColor,
      textColor,
      borderColor
    }
  }
})
</script>