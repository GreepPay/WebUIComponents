<template>
  <div class="w-full flex space-x-3 py-4 px-6">
    <div class="flex flex-1 items-center space-x-2">
      <app-icon :name="getIcon(data.type)" customClass="size-12" />

      <div class="flex-1 flex flex-col space-y-[1px]">
        <app-header-text class="!text-left !text-lg !text-black">
          {{ data.title }}
        </app-header-text>

        <app-normal-text class="!text-sm capitalize !text-gray-2">
          {{ data.description }}
        </app-normal-text>
      </div>
    </div>

    <app-normal-text class="!text-sm !text-gray-2">
      {{ data.date }}
    </app-normal-text>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import AppIcon from "../AppIcon"
  import { AppNormalText, AppHeaderText } from "../AppTypography"

  enum TransactionType {
    Success = "success",
    Failed = "failed",
    Info = "info",
  }

  /**
   *  Displays a transaction item with its icon, description, date, time, and amount.
   */
  export default defineComponent({
    components: {
      AppIcon,
      AppNormalText,
      AppHeaderText,
    },
    name: "AppNotifications",
    props: {
      /**
       * The transaction data.
       */
      data: {
        type: Object as () => {
          id: string | number
          title: string
          description: string
          type: TransactionType
          date: string
        },
        required: true,
      },

      showType: {
        type: Boolean,
        default: true,
      },
    },

    setup() {
      const getIcon = (type: TransactionType) => {
        if (type === "success") return "success-check"
        if (type === "failed") return "close-red-bg"
        else return "info"
      }

      return {
        getIcon,
      }
    },
  })
</script>
