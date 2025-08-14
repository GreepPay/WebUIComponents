<template>
  <div
    class="w-full flex flex-col bg-white border rounded-lg px-4"
    :class="customClass"
  >
    <div
      class="w-full flex justify-between items-center px-4 py-4"
      :class="headerClass"
    >
      <slot name="header-title">
      <app-header-text class="!font-semibold !text-black !text-lg">
        {{ title }}
      </app-header-text>
      </slot> 

      <slot name="header-action">
        <app-normal-text
          class="text-primary cursor-pointer"
          role="button"
          @click="emit('view-more')"
        >
          {{ actionText }}
        </app-normal-text>
      </slot>
    </div>

    <div :class="subHeaderClass">
      <slot name="sub-header" />
    </div>

    <div>
      <template v-if="hasItems">
        <div
          class="flex flex-col gap-4 py-4 pt-1 scrollbar-hide max-h-80 overflow-y-auto"
          :class="contentClass"
        >
          <slot />
        </div>
      </template>

      <div v-else class="pb-4 pt-2">
        <app-empty-state
          :title="emptyTitle"
          :description="emptyDescription"
          :useIcon="useEmptyStateIcon"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue"
  import { AppNormalText, AppHeaderText } from "../AppTypography"
  import AppEmptyState from "../AppEmptyState"

  export default defineComponent({
    name: "AppListWrapper",
    components: {
      AppNormalText,
      AppEmptyState,
      AppHeaderText,
    },
    props: {
      title: {
        type: String,
        default: "Title",
      },
      actionText: {
        type: String,
        default: "See all",
      },
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
        default: "",
      },
      useEmptyStateIcon: {
        type: Boolean,
        default: false,
      },
      customClass: {
        type: String,
        default: "",
      },
      headerClass: {
        type: String,
        default: "",
      },
      subHeaderClass: {
        type: String,
        default: "",
      },
      contentClass: {
        type: String,
        default: "",
      },
    },
    emits: ["view-more"],
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
