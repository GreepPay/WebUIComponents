<template>
  <div class="relative flex items-center border-b h-fit">
    <div
      :class="`text-lg py-4 px-6 font-medium flex items-center justify-between ${
        showRightSide && 'border-r'
      }  ${titleClass}`"
    >
      <slot name="title"> {{ title }}</slot>

      <!-- <span @click="toggleValueVisibility">
        <app-icon name="eye" />
      </span> -->
    </div>

    <!-- Right-side slot -->
    <div class="h-full" v-if="showRightSide" :class="rightSideClass">
      <slot class="h-full" />
    </div>
  </div>
</template>

<script lang="ts"> 
  import { defineComponent } from "vue"

  export default defineComponent({
    name: "AppHeaderRow",
    props: {
      title: {
        type: String,
        default: "",
      },
      titleClass: {
        type: String,
        default: "",
      },
      rightSideClass: {
        type: String,
        default: "",
      },
      showRightSide: {
        type: Boolean,
        default: true,
      },
    },
    setup() {
      return {}
    },
  })
</script>
