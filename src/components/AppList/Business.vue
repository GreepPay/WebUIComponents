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
          :src="`images/logo/merchant/1.png`"
          custom-class="rounded-full h-full w-full"
        />
      </div>

      <div class="flex-1 flex flex-col space-y-[1px] !line-clamp-1">
        <app-normal-text
          class="!text-left !line-clamp-1 !text-black !font-medium !text-sm"
        >
          {{ data.title }}
        </app-normal-text>

        <span class="flex flex-row space-x-1 items-center">
          <app-normal-text class="!text-[12px] capitalize text-gray-500">
            {{ data.type }}
          </app-normal-text>

          <span class="text-very-light-gray">• </span>

          <app-normal-text class="!text-[12px] text-gray-500">
            {{ data.date }}
          </app-normal-text>
        </span>
      </div>
    </div>

    <div class="flex items-center justify-center">
      <app-normal-text
        class="!text-right !text-sm font-semibold !whitespace-nowrap"
      >
        {{ data.transactionType == "credit" ? "+" : "-" }}
        {{ data.currencySymbol }}
        {{ Logic.Common.convertToMoney(data.amount, true, "") }}
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

  enum TransactionType {
    Sent = "sent",
    Received = "received",
    Added = "added",
    Redeemed = "redeemed",
  }

  export default defineComponent({
    components: {
      AppIcon,
      AppNormalText,
      AppImageLoader,
      AppAvatar,
    },
    name: "AppTransaction",
    props: {
      data: {
        type: Object as () => {
          id: string | number
          title: string
          amount: number
          type: TransactionType
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
