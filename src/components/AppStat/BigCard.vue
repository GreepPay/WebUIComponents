<template>
  <div :class="['flex flex-col rounded-sm shadow-sm border transition-all duration-200', sizeClasses, customClass]">
    <span class="text-gray-500 font-medium mb-2" :class="labelSizeClasses">
      {{ label }}
    </span>
    
    <!-- Main content area with value and optional progress bar in a row -->
    <div class="flex flex-row items-center justify-between gap-4">
      <!-- Value on the left -->
      <span
        class="font-semibold flex-shrink-0"
        :class="[valueSizeClasses, valueColor]"
      >
        <slot>{{ formattedValue }}</slot>
      </span>
      
      <!-- Progress Bar on the right when suffixComponent is 'progressbar' -->
      <div v-if="suffixComponent === 'progressbar'" class="flex-1 min-w-0">
        <app-progress-bar 
          :current="progressData.current"
          :total="progressData.total"
        />
    
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import AppProgressBar from "../AppProgressBar"

export default defineComponent({
  name: "BigCard",
  components: {
    AppProgressBar
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String as () => "number" | "currency" | "percentage" | "fraction",
      default: "number",
    },
    subtitle: {
      type: String,
      default: "",
    },
    customClass: {
      type: String,
      default: "",
    },
    size: {
      type: String as () => "sm" | "md" | "lg",
      default: "md",
    },
    suffixComponent: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    // Size-based classes
    const sizeClasses = computed(() => {
      switch (props.size) {
        case "sm":
          return "p-3"
        case "md":
          return "p-4"
        case "lg":
          return "p-6"
        default:
          return "p-4"
      }
    })

    const labelSizeClasses = computed(() => {
      switch (props.size) {
        case "sm":
          return "text-xs"
        case "md":
          return "text-sm"
        case "lg":
          return "text-base"
        default:
          return "text-sm"
      }
    })

    const valueSizeClasses = computed(() => {
      switch (props.size) {
        case "sm":
          return "text-lg"
        case "md":
          return "text-xl"
        case "lg":
          return "text-2xl"
        default:
          return "text-xl"
      }
    })

    const subtitleSizeClasses = computed(() => {
      switch (props.size) {
        case "sm":
          return "text-xs"
        case "md":
          return "text-sm"
        case "lg":
          return "text-sm"
        default:
          return "text-sm"
      }
    })

    const formattedValue = computed(() => {
      if (props.type === "currency") {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(Number(props.value))
      }
      if (props.type === "percentage") {
        return `${props.value}%`
      }
      return props.value
    })

    const valueColor = computed(() => {
      switch (props.type) {
        case "currency":
          return "text-green-600"
        case "percentage":
          return "text-blue-600"
        case "fraction":
          return "text-purple-600"
        default:
          return "text-gray-900"
      }
    })

    // Parse progress data from VALUE (e.g., "170 / 181")events
    const progressData = computed(() => {
      if (props.suffixComponent === 'progressbar') {
        // Try to parse from the value prop first
        const valueString = String(props.value)
        const parts = valueString.split('/').map(part => part.trim())
        
        if (parts.length === 2) {
          const current = parseInt(parts[0])
          const total = parseInt(parts[1])
          if (!isNaN(current) && !isNaN(total)) {
            return {
              current,
              total
            }
          }
        }
        
        // If value parsing fails, try subtitle as fallback
        if (props.subtitle) {
          const subtitleParts = props.subtitle.split('/').map(part => part.trim())
          if (subtitleParts.length === 2) {
            const current = parseInt(subtitleParts[0])
            const total = parseInt(subtitleParts[1])
            if (!isNaN(current) && !isNaN(total)) {
              return {
                current,
                total
              }
            }
          }
        }
      }
      
      // Return default values if parsing fails
      return {
        current: 0,
        total: 0
      }
    })

    return {
      sizeClasses,
      labelSizeClasses,
      valueSizeClasses,
      subtitleSizeClasses,
      formattedValue,
      valueColor,
      progressData
    }
  },
})
</script>