<template>
  <button
    :class="`focus:outline-hidden rounded-[8px] flex flex-row space-x-1 !text-center items-center justify-center  ${padding} ${bgColor} ${textColor} ${customClass}`"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/**
 *  Button Component
 *
 *  This component is a reusable button with customizable styling.
 */
export default defineComponent({
  name: "AppButton",
  props: {
    /**
     * Background color of the button. Uses TailwindCSS classes.
     * @values 'bg-primary', 'bg-secondary', 'bg-success', 'bg-error', 'bg-warning', etc.
     */
    bgColor: {
      type: String,
      default: "bg-primary",
    },
    /**
     * Text color of the button. Uses TailwindCSS classes.
     * @values 'text-white', 'text-black', 'text-gray-500', etc.
     */
    textColor: {
      type: String,
      default: "text-white",
    },
    /**
     * Custom CSS classes to apply to the button. Uses TailwindCSS classes.
     */
    customClass: {
      type: String,
      default: "",
    },
    /**
     * Padding of the button. Uses TailwindCSS classes.
     * @values 'py-2 px-4', 'py-1 px-2', 'py-3 px-6', etc.
     */
    padding: {
      type: String,
      default: "py-2 px-4 ",
    },
  },
});
</script>
