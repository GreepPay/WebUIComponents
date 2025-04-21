<template>
  <app-image-loader
    class="w-full h-fit !rounded-[28px] relative overflow-hidden p-4 bg-[linear-gradient(359.13deg,#10BB76_25.37%,#008651_99.25%)]"
    :photo-url="''"
  >
    <!-- Background image -->
    <app-image-loader
      photo-url="/images/logo/transparent.svg"
      custom-class="absolute inset-0 w-full h-full object-cover !rounded-[28px] z-[1]"
    />

    <!-- Slot content -->
    <div class="relative z-[2] w-full h-full">
      <slot />
    </div>
  </app-image-loader>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import AppImageLoader from "../AppImageLoader"

  export default defineComponent({
    name: "AppImageCardContainer",
    components: {
      AppImageLoader,
    },
  })
</script>
