<template>
  <span>
    <img :src="`/images/icons/${name}.svg`" :class="`${customClass}`" />
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/**
 *  Reusable Icon component.  Loads icons from the `/images/icons` directory based on the `name` prop.
 */
export default defineComponent({
  name: "AppIcon",
  props: {
    /**
     * The name of the icon file (without the `.svg` extension).  The component will attempt to load `/images/icons/{name}.svg`.
     * @requires
     */
    name: {
      type: String,
      required: true,
    },
    /**
     *  Custom CSS classes to apply to the `<img>` element.  Useful for styling the icon's size, color, etc.
     * @requires
     */
    customClass: {
      type: String,
      required: true,
    },
  },
});
</script>
