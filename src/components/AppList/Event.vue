<template>
  <div
    :class="[
      ' grid grid-cols-8  items-center gap-3 py-2 pb-3 truncate cursor-pointer',
      !isLastItem && 'border-b-[1px] border-[#F0F3F6]',
      customClass,
    ]"
  >
    <div class="col-span-4 flex items-center space-x-2 flex-1">
      <div class="size-[72px] !rounded-lg">
        <app-image-loader
          class="size-full !rounded-lg relative bg-black"
          photo-url="images/auth-image.jpg"
        >
        </app-image-loader>
      </div>

      <div class="flex-1 flex flex-col space-y-[1px] !line-clamp-1">
        <app-normal-text
          class="!text-left !line-clamp-1 block !text-black !font-semibold !text-base"
        >
          {{ data.title }}
        </app-normal-text>

        <app-normal-text
          v-for="(text, index) in sub_titles"
          :key="index"
          customClass="leading-6 !text-xxs !text-black"
        >
          {{ text }}
          <span v-if="index < sub_titles.length - 1" class="!text-black px-2">
            ●
          </span>
        </app-normal-text>

        <app-normal-text
          customClass="leading-6 !text-xxs !text-black truncate pr-4"
        >
          Kyrenia, Cyprus
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

    <app-normal-text
      class="!text-center !text-sm !whitespace-nowrap"
      :class="
        data.transactionType == 'credit' ? '!text-green' : '!text-hot-orange'
      "
    >
      {{ data.transactionType == "credit" ? "Ongoing" : "Upcoming" }}
    </app-normal-text>

    <app-normal-text class="!text-center !text-sm !whitespace-nowrap">
      From ₺400
    </app-normal-text>
    <app-normal-text class="!text-center !text-sm !whitespace-nowrap">
      From ₺400
    </app-normal-text>

    <app-normal-text
      class="!text-right !text-base !font-semibold !whitespace-nowrap"
    >
      ₺98,400.00
    </app-normal-text>
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
    name: "AppEvent",
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
      const sub_titles = ["Sun, 27 Apr", "8AM"]
      return {
        Logic,
        sub_titles,
      }
    },
  })
</script>
