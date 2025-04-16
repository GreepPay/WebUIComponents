<template>
  <div
    v-if="totalItems > 0"
    :class="[
      'flex items-center h-full space-x-3 gap-1 overflow-hidden',
      customClass,
    ]"
  >
    <p
      class="flex items-center space-x-2 whitespace-nowrap text-sm text-very-light-gray leading-6"
    >
      {{ startItem }} - {{ endItem }} of {{ totalItems }}
    </p>

    <div class="flex items-center space-x-3">
      <span
        @click="handlePrevious"
        :disabled="currentPage === 1"
        class="flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        title="Previous page"
      >
        <app-icon name="arrow-left" custom-class="h-5" />
      </span>

      <span
        @click="handleNext"
        :disabled="currentPage >= totalPages"
        class="flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <app-icon name="arrow-right" custom-class="h-5" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue"
  import AppIcon from "../AppIcon"

  export default defineComponent({
    name: "AppPagination",
    components: {
      AppIcon,
    },
    props: {
      currentPage: {
        type: Number,
        required: true,
      },
      itemsPerPage: {
        type: Number,
        required: true,
      },
      totalItems: {
        type: Number,
        required: true,
      },
      customClass: {
        type: String,
        default: "",
      },
    },
    emits: ["update:page"],
    setup(props, { emit }) {
      const totalPages = computed(() =>
        Math.ceil(props.totalItems / props.itemsPerPage)
      )

      const startItem = computed(
        () => (props.currentPage - 1) * props.itemsPerPage + 1
      )

      const endItem = computed(() =>
        Math.min(props.currentPage * props.itemsPerPage, props.totalItems)
      )

      const handlePrevious = () => {
        if (props.currentPage > 1) {
          emit("update:page", props.currentPage - 1)
        }
      }

      const handleNext = () => {
        if (props.currentPage < totalPages.value) {
          emit("update:page", props.currentPage + 1)
        }
      }

      return {
        totalPages,
        startItem,
        endItem,
        handlePrevious,
        handleNext,
      }
    },
  })
</script>

<style scoped>
  /* Optional: You can add more styles here if needed */
</style>
