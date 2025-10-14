<template>
  <div class="w-full bg-gray-200 rounded-full h-2">
    <div 
      class="bg-green-600 h-2 rounded-full transition-all duration-300"
      :style="{ width: progressPercentage + '%' }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"

export default defineComponent({
  name: "AppProgressBar",
  props: {
    current: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    }
  },
  setup(props) {
    const progressPercentage = computed(() => {
      if (props.total === 0) return 0
      return (props.current / props.total) * 100
    })

    return {
      progressPercentage
    }
  },
})
</script>