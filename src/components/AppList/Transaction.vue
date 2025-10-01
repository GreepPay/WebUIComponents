<template>
  <div
    :class="[
      ' flex items-center gap-2 py-2 pb-3 truncate cursor-pointer',
      !isLastItem && 'border-b-[1px] border-[#F0F3F6]',
      customClass,
    ]"
  >
    <div class="h-12 w-12 flex justify-center items-center">
      <app-icon :name="`txn/${data.type}`" customClass="!h-10" />
    </div>

    <div class="flex flex-col space-y-[1px] flex-1 !line-clamp-1 mr-4">
      <app-normal-text
        class="!text-left w-fit !line-clamp-1 !text-black !font-[500] !text-sm"
      >
        {{ data.title }}
      </app-normal-text>

      <span class="flex flex-row space-x-1 items-center">
        <app-normal-text class="!text-[12px] capitalize text-gray-500">
          {{ data.type }}
        </app-normal-text>

        <span class="text-gray-400">• </span>

        <app-normal-text class="!text-[12px] text-gray-500">
          {{ data.date }}
        </app-normal-text>
      </span>
    </div>

    <div class="flex flex-col justify-end pl-1">
      <app-normal-text
        class="text-right !text-sm font-semibold pb-[3px] !whitespace-nowrap"
      >
        {{ data.transactionType == "credit" ? "+" : "-" }}
        {{ data.currencySymbol }}
        {{ Logic.Common.convertToMoney(data.amount, true, "") }}
      </app-normal-text>

      <app-normal-text
        class="!text-[12px] text-gray-500 text-right !whitespace-nowrap"
      >
        {{ data.subAmount }}
      </app-normal-text>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import AppIcon from "../AppIcon"
  import { AppNormalText } from "../AppTypography"
  import { Logic } from "../../composable"

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
