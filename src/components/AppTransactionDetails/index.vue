<template>
  <div class="w-full flex flex-col px-4 rounded-[16px] border-[1.5px]">
    <template v-for="(item, index) in details" :key="index">
      <div
        :class="`flex py-4 px-1 w-full  ${
          isVertical
            ? 'flex-col space-y-1'
            : 'items-center justify-between space-x-3'
        } ${index !== 0 && 'border-t'}`"
      >
        <span class="!text-very-light-gray font-normal text-sm capitalize">
          {{ item.title }}
        </span>
        <span class="!text-black !font-medium !text-base">
          {{ item.content }}
        </span>
      </div>
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
        type: Array as () => {
          title: string
          content: string
        }[],
        required: true,
      },
      isVertical: {
        type: Boolean,
        default: false,
      },
    },
  })
</script>
