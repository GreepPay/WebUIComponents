<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50"
      @click.self="handleOverlayClick"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      :class="customClass"
    >
      <!-- Background overlay - darker for nested modals -->
      <div
        class="fixed inset-0 transition-opacity duration-300 ease-in-out"
        :class="isNested ? 'bg-black/80' : 'bg-gray-900/75'"
        :style="{
          opacity: isOpen ? 1 : 0
        }"
        aria-hidden="true"
      ></div>

      <!-- Rest of your modal content remains the same -->
      <div class="fixed inset-0 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all duration-300 ease-in-out sm:my-8 sm:w-full sm:max-w-lg"
            :class="{
              'opacity-100 translate-y-0 scale-100': isOpen,
              'opacity-0 translate-y-4 scale-95': !isOpen
            }"
          >
            <!-- Header -->
            <div
              v-if="showTitle"
              class="bg-white flex items-center justify-between px-6 py-4 border-b border-gray-200"
            >
              <div class="flex-1">
                <slot name="title">
                  <h2 class="text-xl font-semibold text-gray-900" id="modal-title">
                    {{ title }}
                  </h2>
                </slot>
              </div>
              
              <button
                type="button"
                class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                @click="handleClose"
              >
                <span class="sr-only">Close</span>
                <app-icon
                  name="close-circle"
                  custom-class="w-6 h-6 cursor-pointer hover:text-gray-600"
                />
              </button>
            </div>

            <!-- Content Area -->
            <div class="px-6 py-4 max-h-[70vh] overflow-y-auto">
              <slot />
            </div>

            <!-- Footer -->
            <div
              v-if="showFooter"
              class="bg-gray-50 px-6 py-4 border-t border-gray-200 sm:flex sm:flex-row-reverse sm:gap-3"
            >
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
  import { Teleport, defineProps, defineEmits, watch, onMounted, onUnmounted, computed } from "vue"
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
    closeOnEscape: {
      type: Boolean,
      default: true,
    },
    closeOnOverlay: {
      type: Boolean,
      default: true,
    },
    isNested: {
      type: Boolean,
      default: false,
    }
  })

  const emit = defineEmits(['close', 'confirm', 'cancel'])

  // Handle ESC key press
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && props.closeOnEscape && props.canClose) {
      handleClose()
    }
  }

  // Handle overlay click
  const handleOverlayClick = () => {
    if (props.closeOnOverlay && props.canClose) {
      handleClose()
    }
  }

  // Handle close button click
  const handleClose = () => {
    if (props.canClose) {
      emit('close')
      props.close()
    }
  }

  // Handle confirm button click
  const handleConfirm = () => {
    emit('confirm')
  }

  // Handle cancel button click
  const handleCancel = () => {
    emit('cancel')
    handleClose()
  }

  // Add/remove event listeners
  watch(() => props.isOpen, (newValue) => {
    if (newValue) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  })

  onMounted(() => {
    if (props.isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = ''
  })
</script>

<style scoped>
  /* Smooth transitions for modal */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  /* Custom scrollbar for modal content */
  .max-h-\[70vh\]::-webkit-scrollbar {
    width: 6px;
  }

  .max-h-\[70vh\]::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  .max-h-\[70vh\]::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }

  .max-h-\[70vh\]::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
</style>