<template>
  <div :class="['p-4 flex flex-col']">
    <span class="text-gray-500 text-sm mb-2">{{ label }}</span>

    <span
      class="text-2xl font-semibold"
      :class="type === 'currency' ? 'text-green' : 'text-black'"
    >
       <slot>{{ value }}</slot>
    </span>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    label: string
    value: string | number
    type: "number" | "currency"
  }>()
</script>
