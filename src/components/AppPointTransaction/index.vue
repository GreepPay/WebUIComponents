<template>
  <div
    class="w-full flex flex-row justify-between mb-3 pb-3 border-b-[1px] border-[#E0E2E4]"
  >
    <div class="flex flex-row space-x-2 items-center">
      <app-icon name="grp-black" custom-class="!h-[45px]" />
      <div class="flex flex-col space-y-[2px]">
        <app-normal-text class="font-[500] !text-left !text-sm">{{
          transaction.title
        }}</app-normal-text>
        <app-normal-text
          class="!text-left text-gray-two !font-light !text-[12px]"
          >{{ transaction.date }}</app-normal-text
        >
      </div>
    </div>

    <div class="flex flex-row space-x-2 justify-end">
      <app-normal-text class="font-[500] !text-right !text-sm">
        {{ transaction.type == "debit" ? "-" : "+" }}
        {{ transaction.amount }}</app-normal-text
      >
    </div>
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
  name: "AppPointTransaction",
  props: {
    /**
     * The transaction data.
     */
    transaction: {
      type: Object as () => {
        title: string;
        date: string;
        type: string;
        amount: number;
      },
      required: true,
    },
  },

  setup() {
    return {};
  },
});
</script>
