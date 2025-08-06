<template>
  <button
    :class="[
      'relative flex items-center  justify-center gap-2 px-4 py-2 transition-all duration-300 ease-in-out rounded-[40px]',
      baseStyle,
      hoverStyle,
      disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
      customClass,
    ]"
    :disabled="disabled || loading"
  >
    <span v-if="loading">
      <svg
        :class="`animate-spin mr-3 h-5 w-5 ${loadingClass}`"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </span>
    <template v-if="!loading">
      <slot />
    </template>
  </button>
</template>

<script lang="ts">
  import { defineComponent, computed, PropType } from "vue"

  export default defineComponent({
    name: "AppButton",
    props: {
      /**
       * Variant for button styling. Only "primary" is supported for now.
       */
      variant: {
        type: String as PropType<"primary">,
        default: "primary",
        validator: (value: string) => ["primary"].includes(value),
      },
      outlined: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      loading: {
        type: Boolean,
        default: false,
      },
      customClass: {
        type: String,
        default: "",
      },
      rounded: {
        type: Boolean,
        default: true,
      },
      loadingClass: {
        type: String,
        default: "text-white",
      },
    },
    setup(props) {
      const baseStyle = computed(() => {
        if (props.variant === "primary") {
          return props.outlined
            ? "bg-transparent border border-black text-black"
            : "bg-black text-white border border-black"
        }
        return ""
      })

      const hoverStyle = computed(() => {
        if (props.variant === "primary") {
          return props.outlined ? "hover:bg-black/10" : "hover:bg-black/90"
        }
        return ""
      })

      return {
        baseStyle,
        hoverStyle,
      }
    },
  })
</script>
