<template>
  <div
    class="w-full flex flex-row space-x-3 justify-between py-3 !pt-2 border-b-[1.5px] border-[#E0E2E4] mb-3"
  >
    <div class="flex flex-row items-start space-x-2">
      <div class="w-[50px]">
        <app-icon :name="notification.logo" customClass="!h-[48px]" />
      </div>
      <div class="w-full flex flex-col space-y-[2px] justify-start">
        <app-normal-text class="!text-black !font-[500] text-left !text-sm">
          {{ notification.title }}
        </app-normal-text>
        <div class="flex flex-row items-center">
          <template
            v-for="(content, index) in notification.contents"
            :key="index"
          >
            <app-normal-text class="!text-gray-two !text-left !text-sm">
              {{ content }}
            </app-normal-text>
            <template v-if="index < notification.contents.length - 1">
              <span class="h-[4px] w-[4px] rounded-full bg-gray-two mx-2">
              </span>
            </template>
          </template>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-end">
      <app-normal-text class="!text-gray-two !text-right !whitespace-nowrap">
        {{ notification.date }}
      </app-normal-text>
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
  name: "AppNotification",
  props: {
    /**
     * The notification data.
     */
    notification: {
      type: Object as () => {
        logo: string;
        title: string;
        contents: string[];
        date: string;
      },
      required: true,
    },
  },

  setup() {
    return {};
  },
});
</script>
