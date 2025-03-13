<template>
  <div :class="['relative w-full rounded-[40px]', customClass]">
    <!-- Gradient Overlay -->
    <div
      class="absolute !h-full !w-full inset-0 bg-gradient-to-tl rounded-[40px] from-[#10BB76] via-[#10BB76] to-[#10BB76]"
      :class="[customClass]"
    ></div>

    <!-- Background Image -->
    <div
      :class="[
        'relative bg-cover bg-center w-full rounded-[40px]',
        customClass,
      ]"
      style="background-image: url('/images/greep-transparent-lg.svg')"
    >
      <div class="relative z-10 p-6">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  /**
   * Title Card Container
   *
   * This component renders a stylized card with a background image of a logo
   * and an optional gradient overlay. It allows custom content through the default slot,
   * making it flexible for different use cases.
   *
   * Features:
   * - Background logo image.
   * - Gradient overlay for styling enhancement.
   * - Supports dynamic content via slot.
   * - Customizable through props.
   *
   * @slot Default slot for header text content.
   */
  export default defineComponent({
    name: "AppTitleCardContainer",
    props: {
      /**
       *  Allows to add custom classes the container.
       *  @default ""
       */
      customClass: {
        type: String,
        default: "",
      },
    },
  })
</script>
