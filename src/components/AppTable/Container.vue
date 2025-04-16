<template>
  <div class="border rounded-lg">
    <slot />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

  export default defineComponent({
    name: "AppContainer",
  })
</script>
