<template>
  <div class="flex flex-col w-full space-y-3">
    <div
      v-for="(detail, index) in details"
      :key="index"
      :class="[
        'bg-white rounded-2xl border border-gray-200 shadow-sm p-4',
        isVertical ? 'flex flex-col space-y-2' : 'flex items-center justify-between',
      ]"
    >
      <div
        :class="[
          'w-full',
          isVertical ? 'flex flex-col space-y-2' : 'flex items-center justify-between',
        ]"
      >
        <!-- Left side: Title and optional status -->
        <div class="flex items-center space-x-2">
          <span class="text-gray-500 text-sm font-medium">
            {{ detail.title }}
          </span>
          
        </div>

        <!-- Right side: Content -->
        <div
          :class="[
            'flex flex-col',
            isVertical ? 'items-start text-left' : 'items-end text-right',
          ]"
        >
          <!-- Main content -->
          <div v-if="!detail.status" class="text-sm font-semibold text-gray-900 whitespace-nowrap">
                {{ detail.content }}
              </div>
              
              <!-- Status badge (replaces content when status exists) -->
              <span
                v-else
                :class="[
                  'px-2 py-0.5 text-xs font-semibold rounded-full',
                  getStatusClasses(detail.status)
                ]"
              >
                {{ detail.status }}
              </span>

          <!-- Optional sub content -->
          <div
            v-if="detail.subContent"
            class="text-xs text-gray-500"
          >
            {{ detail.subContent }}
          </div>
        </div>
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
  methods: {
    getStatusClasses(status: string) {
      const statusLower = status.toLowerCase()
      
      if (statusLower === 'pending') {
        return 'bg-orange-200 text-yellow-700'
      } else if (statusLower === 'delivered') {
        return 'bg-green-100 text-green-700'
      } else if (statusLower === 'cancelled') {
        return 'bg-red-100 text-red-700'
      } else {
        return 'bg-gray-100 text-gray-600'
      }
    }
  }
})
</script>