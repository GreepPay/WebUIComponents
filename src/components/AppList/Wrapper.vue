<template>
  <div
    class="w-full flex flex-col px-4 py-3 mb-2 bg-white block"
    :class="customClass"
  >
    <template v-if="hasItems">
      <div class="flex items-center gap-4 overflow-x-auto h-fit scrollbar-hide">
        <slot />
      </div>
    </template>
    <div v-else class="py-4 !pt-2">
      <app-empty-state :title="emptyTitle" :description="emptyDescription" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue"
  import { AppNormalText } from "../AppTypography"
  import AppEmptyState from "../AppEmptyState"

  export default defineComponent({
    name: "AppListWrapper",
    components: {
      AppNormalText,
      AppEmptyState,
    },
    props: {
      items: {
        type: Array as () => any[],
        default: () => [],
      },
      emptyTitle: {
        type: String,
        default: "No data available",
      },
      emptyDescription: {
        type: String,
        default: "Search for data ",
      },
      customClass: {
        type: String,
        default: "",
      },
    },
    setup(props, { emit }) {
      const hasItems = computed(() => props.items.length > 0)

      return { hasItems, emit }
    },
  })
</script>

<style scoped>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
