<template>
  <div
    :class="[
      ' grid grid-cols-6  items-center gap-3 py-2 pb-3 truncate ',
      !isLastItem && 'border-b-[1px] border-[#F0F3F6]',
      customClass,
    ]"
  >
    <div class="col-span-4 flex items-center space-x-2 flex-1">
      <div class="h-12 w-12 flex justify-center items-center rounded-full">
        <app-avatar
          :src="data.logo"
          custom-class="rounded-full h-full w-full"
        />
      </div>

      <div class="flex-1 flex flex-col space-y-[1px] !line-clamp-1">
        <app-normal-text
          class="!text-left !line-clamp-1 !text-black !font-medium !text-sm"
        >
          {{ data.name }}
        </app-normal-text>

        <app-normal-text class="!text-[12px] capitalize text-gray-500">
          {{ data.category }}
        </app-normal-text>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <app-normal-text
        class="!text-right !text-sm font-semibold !whitespace-nowrap"
      >
        {{ `${data.currencySymbol}  ${data.balance}` }}
      </app-normal-text>
    </div>

    <div class="flex items-center justify-end">
      <app-icon
        name="arrow-right-outlined"
        customClass="!h-[34px] text-center"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import AppIcon from "../AppIcon"
  import { AppNormalText } from "../AppTypography"
  import { Logic } from "../../composable"
  import AppImageLoader from "../AppImageLoader"
  import AppAvatar from "../AppAvatar"

  interface BusinessData {
    name: string | null
    uuid: string
    logo: string | null
    id: number | string
    description: string | null
    date: string
    category: string | null
    balance: number
    currencySymbol: string
  }

  export default defineComponent({
    components: {
      AppIcon,
      AppNormalText,
      AppImageLoader,
      AppAvatar,
    },
    name: "AppBusiness",
    props: {
      data: {
        type: Object as () => BusinessData,
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
