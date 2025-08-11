<template>
  <div
    :class="[
      ' grid grid-cols-4  items-center gap-3 py-2 pb-3 truncate ',
      !isLastItem && 'border-b-[1px] border-[#F0F3F6]',
      customClass,
    ]"
  >
    <div class="col-span-2 flex items-center flex-1">
      <div class="h-12 w-12 flex justify-center items-center rounded-full">
        <app-avatar custom-class="rounded-full h-full w-full" />
      </div>

      <div class="flex-1 flex flex-col space-y-[1px] !line-clamp-1 pl-2">
        <app-normal-text
          class="!text-left !line-clamp-1 !text-black !font-medium !text-sm"
        >
          Ralph Edwards
        </app-normal-text>

        <app-normal-text class="!text-[12px] capitalize text-gray-500">
          Seen at last event
        </app-normal-text>
      </div>
    </div>

    <app-normal-text
      class="!text-center !text-sm font-semibold !whitespace-nowrap"
    >
      x5
    </app-normal-text>
    <app-header-text class="!text-right !text-base !whitespace-nowrap">
      ₺30,000.00
    </app-header-text>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import AppIcon from "../AppIcon"
  import { AppNormalText } from "../AppTypography"
  import { Logic } from "../../composable"
  import AppImageLoader from "../AppImageLoader"
  import AppAvatar from "../AppAvatar"

  export default defineComponent({
    components: {
      AppIcon,
      AppNormalText,
      AppImageLoader,
      AppAvatar,
    },
    name: "AppEvent",
    props: {
      data: {
        type: Object as () => {
          id: string | number
          title: string
          amount: number
          transactionType: "credit" | "debit"
          date: string
          currencySymbol?: string
          subAmount?: string
        },
        required: true,
      },

      customClass: {
        type: String,
        default: "",
      },

      isLastItem: {
        type: Boolean,
        default: false,
      },
    },

    setup() {
      return {
        Logic,
      }
    },
  })
</script>
