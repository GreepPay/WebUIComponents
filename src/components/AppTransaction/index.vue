<template>
  <div class="w-full flex flex-row justify-between items-center py-2">
    <div class="flex flex-row space-x-2 items-center">
      <app-icon :name="data.icon" :customClass="'!h-[38px]'" />
      <div class="flex flex-col space-y-[1px]">
        <app-normal-text class="!text-left !line-clamp-1">
          {{ data.description }}
        </app-normal-text>
        <span class="flex flex-row space-x-1 items-center">
          <app-normal-text class="!text-[11px] text-gray-500">
            {{ data.day }}
          </app-normal-text>
          <span class="h-[3px] w-[3px] bg-gray-400 rounded-full"> </span>
          <app-normal-text class="!text-[11px] text-gray-500">
            {{ data.time }}
          </app-normal-text>
        </span>
      </div>
    </div>

    <app-normal-text class="text-right !text-sm">
      {{ data.type == "credit" ? "+" : "-" }} {{ data.amount }} ₺
    </app-normal-text>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppIcon from "../AppIcon";
import { AppNormalText } from "../AppTypography";

/**
 *  Displays a transaction item with its icon, description, date, time, and amount.
 */
export default defineComponent({
  components: {
    AppIcon,
    AppNormalText,
  },
  name: "AppTransaction",
  props: {
    /**
     * The transaction data.
     */
    data: {
      type: Object as () => {
        type: "credit" | "debit";
        description: string;
        icon: string;
        amount: number;
        day: string;
        time: string;
      },
      required: true,
    },
  },
});
</script>
