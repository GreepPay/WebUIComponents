<template>
  <h3
    :class="` font-bold
	${size == 'lg' ? 'lg:text-lg mdlg:text-lg text-lg' : ''}
	${size == 'xl' ? 'lg:text-lg mdlg:text-lg text-base' : ''}
	${size == 'base' ? 'lg:text-base mdlg:text-[13px] text-sm' : ''}
	${size == 'xs' ? 'mdlg:text-[12px]! text-xs' : ''}
	${customClass}
	${color}`"
  >
    <slot />
  </h3>
</template>
<script lang="ts">
  import { defineComponent } from "vue"
  /**
   * Header Text Component
   *
   * This component renders a heading (h3) with customizable size, color, and additional CSS classes.
   *
   * @slot Default slot for header text content.
   */
  export default defineComponent({
    name: "AppHeaderText",
    props: {
      /**
       * Defines the size of the header text.
       *
       * @values lg, xl, base, xs
       * @default lg
       */
      size: {
        type: String,
        default: "lg",
        validator: (value: string) =>
          ["lg", "xl", "base", "xs"].includes(value),
      },
      /**
       * Defines the color of the header text.
       * Accepts any valid tailwind color class e.g. `text-red-500`.
       * @default text-black
       */
      color: {
        type: String,
        default: "text-black",
      },
      /**
       *  Allows to add custom classes to the header text.
       *  @default ""
       */
      customClass: {
        type: String,
        default: "",
      },
    },
  })
</script>
