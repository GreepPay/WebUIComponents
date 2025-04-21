<template>
  <span
    v-if="type === 'dot'"
    class="inline-block text-light-gray-two text-sm select-none"
  >
    •
  </span>

  <p
    v-else
    :class="[
      'bg-light-gray-two',
      type === 'horizontal' ? 'h-[1px] w-full' : 'w-[1px] h-5',
      'inline-block',
      customClass,
    ]"
    :style="customStyle"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "AppDivider",
  props: {
    type: {
      type: String as () => "vertical" | "horizontal" | "dot",
      default: "vertical",
    },
    customClass: {
      type: String,
      default: "",
    },
    customStyle: {
      type: String,
      default: "",
    },
  },
})
</script>
