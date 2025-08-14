<template>
  <button
    :class="[
      'relative flex items-center justify-center font-medium space-x-4 gap-2 px-4 py-2 transition-all duration-300 ease-in-out rounded-3xl',
      baseStyle,
      hoverStyle,
      disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
      customClass,
    ]"
    :disabled="disabled || loading"
  >
    <app-icon
      v-if="loading"
      name="spinner"
      class="animate-spin h-5 w-5"
      :class="loadingClass"
    />

    <AppIcon v-if="!loading && icon" :name="icon" class="h-5 w-5" />

    <slot>{{ text }}</slot>
  </button>
</template>

<script lang="ts">
  import { defineComponent, computed, PropType } from "vue"
  import AppIcon from "../AppIcon"

  type ButtonVariant = "primary" | "danger" | "success" | "secondary" | "gray"

  export default defineComponent({
    name: "AppButton",
    components: { AppIcon },
    props: {
      variant: {
        type: String as PropType<ButtonVariant>,
        default: "primary",
        validator: (value: string) =>
          ["primary", "danger", "success", "secondary", "gray"].includes(value),
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
      icon: {
        type: String,
        default: "",
      },
      text: {
        type: String,
        default: "",
      },
      customClass: {
        type: String,
        default: "",
      },
      loadingClass: {
        type: String,
        default: "text-white",
      },
    },
    setup(props) {
      const baseColors = {
        primary: "black",
        danger: "red-600",
        success: "green",
        secondary: "blue",
        gray: "light-gray",
      }

      const textColors = {
        primary: "white",
        danger: "white",
        success: "white",
        secondary: "white",
        gray: "white",
      }

      const baseStyle = computed(() => {
        const color = baseColors[props.variant]
        const text = textColors[props.variant]

        if (props.outlined) {
          return `bg-transparent  border  border-${color}  text-${color}`
        } else {
          return `bg-${color}  text-${text} border border-${color}`
        }
      })

      const hoverStyle = computed(() => {
        const color = baseColors[props.variant]
        return props.outlined
          ? `!hover:bg-${color}/10`
          : `!hover:bg-${color.replace("-600", "-700")}`
      })

      return {
        baseStyle,
        hoverStyle,
      }
    },
  })
</script>
