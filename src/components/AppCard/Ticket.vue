<template>
  <div class="flex w-full min-h-36 relative" :class="customClass">
    <div class="!w-3/4 bg-[#D9D9D9] flex flex-col justify-between p-4">
      <div class="w-full flex flex-col">
        <app-header-text customClass="!text-black !text-base">
          Make It! Pottery Class
        </app-header-text>
        <app-normal-text customClass="!text-gray-two !font-medium !text-sm">
          Sunday, July 27
        </app-normal-text>
        <app-normal-text customClass="!text-gray-two !font-medium !text-sm">
          10AM - 4PM
        </app-normal-text>
      </div>

      <app-header-text customClass="!text-black !text-base">
        ₺450
      </app-header-text>
    </div>

    <!-- Ticket Type -->
    <div
      class="w-1/4 flex justify-center items-center"
      :style="color ? `background: ${color};` : `background: #009DE3;`"
    >
      <app-header-text customClass="!text-white !text-xl !vertical-rl">
        Regular
      </app-header-text>
    </div>

    <!-- Dotted Cutout -->
    <div
      class="absolute h-full -mr-2.5 right-1/4 rounded-full size-5 flex flex-col justify-between"
    >
      <span class="block size-5 bg-white rounded-full -mt-2.5"></span>
      <span class="block size-5 bg-white rounded-full -mb-2.5"></span>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import { AppHeaderText, AppNormalText } from "../AppTypography"

  export default defineComponent({
    name: "AppVariantCard",
    components: {
      AppHeaderText,
      AppNormalText,
    },
    props: {
      ticket: {
        type: Object as () => any,
        required: true,
      },
      color: {
        type: String,
        default: "",
      },
      customClass: {
        type: String,
        default: "",
      },
    },

    setup() {
      return {}
    },
  })
</script>
