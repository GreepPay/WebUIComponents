<template>
  <div>
    <!-- <img :src="`/images/icons/${name}.svg`" :class="`${customClass}`" /> -->
  </div>
</template>

<script setup>
import { defineComponent } from "vue";

/**
 *  Reusable Icon component.  Loads icons from the `/images/icons` directory based on the `name` prop.
 */
defineComponent({
  name: "AppIcon",
  defineProps({
    /**
     * The name of the icon file (without the `.svg` extension).  The component will attempt to load `/images/icons/{name}.svg`.
     * @requires
     */
    name: {
      type: String,
      required: 'icon',
    },
    /**
     *  Custom CSS classes to apply to the `<img>` element.  Useful for styling the icon's size, color, etc.
     * @requires
     */
    customClass: {
      type: String,
      default: "w-5 h-5",
    },
  })
});
</script>
