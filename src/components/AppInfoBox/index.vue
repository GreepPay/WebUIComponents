<template>
  <div
    class="w-full flex flex-col space-y-2 px-4 py-4 rounded-[16px] bg-[#F0F3F6] justify-start items-start"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

/**
 * Avatar Component
 *
 * Displays a user avatar with image support and fallback to initials
 */
export default defineComponent({
  name: "AppInfoBox",
  props: {},
  setup(props) {
    return {};
  },
});
</script>
