<template>
  <div :class="['p-6 flex flex-col']">
    <span class="text-gray-500 text-sm mb-2">{{ label }}</span>

    <span
      class="text-2xl font-semibold"
      :class="dynamicValueColor"
    >
       <slot>{{ value }}</slot>
    </span>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    label: string
    value: string | number
    type: "number" | "currency"
    sufixColor?: string // Added sufixColor prop as optional
  }

  const props = defineProps<Props>()

  // Helper function for default colors based on type, mirroring the example
  const getDefaultColor = () => {
    switch (props.type) {
      case "currency":
        return "text-green-600"; // Changed to specific shade for consistency with prompt example
      case "number":
      default:
        return "text-gray-900"; // Changed to specific shade for consistency with prompt example
    }
  };

  // Dynamic value color based on sufixColor prop, mirroring the example's logic
  const dynamicValueColor = computed(() => {
    if (props.sufixColor) {
      if (props.sufixColor === "red") return "!text-red-600";
      else if (props.sufixColor === "green") return "!text-green-600";
      else if (props.sufixColor === "blue") return "!text-blue-600";
      else if (props.sufixColor === "orange") return "!text-orange-600";
      else return getDefaultColor(); // Fallback if sufixColor is provided but not one of the recognized colors
    } else {
      return getDefaultColor(); // Use default color if sufixColor is not provided
    }
  });
</script>
