<template>
  <div
    v-if="isOpen"
    class="relative z-10"
    @click.self="$emit('close')"
    aria-labelledby="modal-title"
  >
    <!-- overlay -->
    <div
      class="fixed inset-0 bg-gray-500/75 !bg-red-800 transition-opacity"
      aria-hidden="true"
    ></div>

    <div class="fixed inset-0 w-screen overflow-y-auto">
      <div
        class="flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden bg-white text-left box-shadow transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <!-- Title -->
          <div
            v-if="showTitle"
            class="bg-white flex items-center space-x-4 justify-between p-4 border-b"
          >
            <slot name="title">
              <h2 class="text-lg font-medium text-black">{{ title }}</h2>
            </slot>

            <app-icon
              name="close-circle"
              custom-class="cursor-pointer"
              @click="$emit('close')"
            />
          </div>

          <!-- Content Area -->
          <div class="p-4">
            <slot />
          </div>

          <!-- Footer -->
          <div
            v-if="showFooter"
            class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
          >
            <button
              type="button"
              class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              Deactivate
            </button>
            <button
              type="button"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Teleport, defineProps, defineEmits, computed } from "vue"
  import AppIcon from "../AppIcon"

  const props = defineProps({
    canClose: {
      type: Boolean,
      default: true,
    },
    close: {
      type: Function,
      required: true,
    },
    customClass: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
    showFooter: {
      type: Boolean,
      default: false,
    },
  })

  const handleOverlayClick = () => {
    if (props.canClose) {
      props.close()
    }
  }
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
