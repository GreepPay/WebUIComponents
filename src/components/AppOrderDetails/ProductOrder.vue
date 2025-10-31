<template>
  <div class="flex flex-col w-full space-y-3">
    <div
      v-for="(detail, index) in details"
      :key="index"
      :class="[
        'bg-white rounded-2xl border border-gray-200 shadow-sm p-4',
        isVertical ? 'flex flex-col space-y-1' : 'flex items-center justify-between space-x-3',
      ]"
    >
      <!-- Title + Optional Status -->
      <div
        :class="[
          'flex',
          isVertical ? 'flex-col items-start space-y-1' : 'items-center justify-between w-full',
        ]"
      >
        <span class="text-gray-500 text-sm font-medium">
          {{ detail.title }}
        </span>

        <!-- Status badge -->
        <span
          v-if="detail.status"
          :class="[
            'px-2 py-0.5 text-xs font-semibold rounded-full',
            detail.status.toLowerCase() === 'pending'
              ? 'bg-yellow-100 text-yellow-700'
              : detail.status.toLowerCase() === 'delivered'
              ? 'bg-green-100 text-green-700'
              : detail.status.toLowerCase() === 'cancelled'
              ? 'bg-red-100 text-red-700'
              : 'bg-gray-100 text-gray-600',
          ]"
        >
          {{ detail.status }}
        </span>
      </div>

      <!-- Main content -->
      <div
        :class="[
          'text-sm font-semibold text-gray-900',
          isVertical ? 'text-left' : 'text-right',
        ]"
      >
        {{ detail.content }}
      </div>

      <!-- Optional sub content -->
      <div
        v-if="detail.subContent"
        class="text-xs text-gray-500 mt-1"
        :class="isVertical ? 'text-left' : 'text-right'"
      >
        {{ detail.subContent }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export interface OrderDetail {
  title: string
  content: string
  subContent?: string
  status?: string
}

export default defineComponent({
  name: "AppProductOrderDetails",
  props: {
    details: {
      type: Array as PropType<OrderDetail[]>,
      required: true,
      default: () => [],
    },
    isVertical: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style scoped>
/* clean and modern — Tailwind handles all colors now */
</style>
