<template>
  <div class="order-details">
    <div
      v-for="(detail, index) in details"
      :key="index"
      :class="`flex py-4 px-1 w-full  ${
        isVertical
          ? 'flex-col space-y-1'
          : 'items-center justify-between space-x-3'
      }  border-b`"
    >
      <!-- Title + Optional Status -->
      <div
        class="order-detail-header"
        :class="isVertical ? 'vertical-header' : 'horizontal-header'"
      >
        <span class="order-detail-title">{{ detail.title }}</span>

        <span
          v-if="detail.status"
          :class="['order-detail-status', `status-${detail.status.toLowerCase()}`]"
        >
          {{ detail.status }}
        </span>
      </div>

      <!-- Main content -->
      <div class="order-detail-content">
        {{ detail.content }}
      </div>

      <!-- Optional sub content -->
      <div v-if="detail.subContent" class="order-detail-sub-content">
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
  name: "AppOrderDetails",
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
:root {
  --radius-xl: 1rem;
  --color-gray-300: #f0f3f6;
  --color-gray-600: #666666;
  --color-gray-800: #333333;
  --color-gray-500: #999999;
  --color-warning-bg: #fff3cd;
  --color-warning-text: #856404;
}

/* --- Container --- */
.order-details {
  display: flex;
  flex-direction: column;
}

/* --- Item Wrapper --- */
.order-detail-item {
  background: white;
  border-radius: var(--radius-xl);
  padding: 1rem;
  border: 1px solid var(--color-gray-300);
  display: flex;
  flex-direction: column;
}

/* Add top border for spacing */
.bordered {
  border-top: 1px solid var(--color-gray-300);
  border-radius: 0;
}

/* --- Horizontal layout --- */
.horizontal .order-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.horizontal .order-detail-content {
  text-align: right;
  font-weight: 500;
  color: var(--color-gray-800);
}

/* --- Vertical layout --- */
.vertical .order-detail-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.25rem;
}

.vertical .order-detail-content {
  text-align: left;
  font-weight: 500;
  color: var(--color-gray-800);
}

/* --- Shared Styles --- */
.order-detail-title {
  font-size: 0.875rem;
  color: var(--color-gray-600);
  font-weight: 500;
}

.order-detail-status {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
}

.status-pending {
  background: var(--color-warning-bg);
  color: var(--color-warning-text);
}

.order-detail-sub-content {
  font-size: 0.875rem;
  color: var(--color-gray-500);
  margin-top: 0.25rem;
}
</style>
