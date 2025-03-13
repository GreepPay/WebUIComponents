<template>
  <div
    class="w-full flex flex-col px-4 rounded-xl border-[1.5px] border-[#F0F3F6]"
  >
    <template v-for="(value, key, index) in details" :key="key">
      <div class="space-y-1 py-4">
        <app-normal-text class="!text-[#616161] capitalize">
          {{ formatKey(key) }}
        </app-normal-text>
        <app-header-text class="!text-[#0A141E] !font-medium">
          {{ value }}
        </app-header-text>
      </div>

      <p
        v-if="index !== Object.keys(details).length - 1"
        class="h-[1px] bg-[#F0F3F6]"
      />
    </template>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import { AppNormalText, AppHeaderText } from "../AppTypography"

  /**
   * AppDetails Component
   *
   * This component dynamically renders a list of details from an object.
   * Each entry is displayed with a label (formatted key) and value.
   *
   * Props:
   * @prop {Record<string, string>} details - The object containing key-value pairs.
   */
  export default defineComponent({
    name: "AppDetails",
    components: { AppNormalText, AppHeaderText },
    props: {
      /**
       * Object containing key-value pairs to display.
       * @required
       */
      details: {
        type: Object as () => Record<string, string>,
        required: true,
      },
    },
    methods: {
      formatKey(key: string): string {
        // Convert camelCase or snake_case to readable format
        return key
          .replace(/_/g, " ")
          .replace(/([A-Z])/g, " $1")
          .trim()
      },
    },
  })
</script>
