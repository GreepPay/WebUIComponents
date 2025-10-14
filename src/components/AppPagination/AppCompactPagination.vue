<!-- AppCompactPagination.vue -->
<template>
  <div :class="['flex items-center justify-between w-full px-4 py-3', customClass]">
    <!-- Left side: Page info -->
    <div class="flex items-center space-x-4">
      <span class="text-sm text-gray-600">
        {{ pagination.currentPage }} of {{ pagination.lastPage }} pages
      </span>
      
      <span class="text-gray-300">|</span>
      
      <span class="text-sm text-gray-600">
        {{ pagination.firstItem }} - {{ pagination.lastItem }} of {{ pagination.total }}
      </span>
    </div>

    <!-- Right side: Pagination controls - Only arrows -->
    <div class="flex items-center space-x-2">
      <!-- Previous button - Only show if not on first page -->
      <button
        v-if="pagination.currentPage > 1"
        @click="handlePrevious"
        :class="[
          'w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-colors cursor-pointer hover:bg-gray-50'
        ]"
      >
        <app-icon name="arrow-left" custom-class="h-3" />
      </button>

      <!-- Next button - Only show if there are more pages -->
      <button
        v-if="pagination.hasMorePages"
        @click="handleNext"
        :class="[
          'w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-colors cursor-pointer hover:bg-gray-50'
        ]"
      >
        <app-icon name="arrow-right" custom-class="h-3" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import AppIcon from "../AppIcon"

export default defineComponent({
  name: "AppCompactPagination",
  components: {
    AppIcon
  },
  props: {
    pagination: {
      type: Object as () => {
        currentPage: number
        firstItem: number
        hasMorePages: boolean
        lastItem: number
        lastPage: number
        perPage: number
        total: number
      },
      required: true
    },
    customClass: {
      type: String,
      default: "",
    }
  },
  emits: ["update:page"],
  setup(props, { emit }) {
    const handlePrevious = () => {
      if (props.pagination.currentPage > 1) {
        emit("update:page", props.pagination.currentPage - 1)
      }
    }

    const handleNext = () => {
      if (props.pagination.hasMorePages) {
        emit("update:page", props.pagination.currentPage + 1)
      }
    }

    return {
      handlePrevious,
      handleNext
    }
  },
})
</script>