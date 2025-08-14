<template>
  <div
    :class="[
      ' grid grid-cols-8  items-center gap-3 py-2 pb-3 truncate ',
      !isLastItem && 'border-b-[1px] border-[#F0F3F6]',
      customClass,
    ]"
  >
    <div class="col-span-6 flex items-center space-x-2 flex-1">
      <div class="h-12 w-12 flex justify-center items-center !rounded-full">
        <app-avatar :src="data?.photo_url" customClass="h-full w-full  " />
      </div>

      <app-normal-text
        class="!text-right !line-clamp-1 !text-black !font-medium !text-sm"
      >
        {{ data?.name }}
      </app-normal-text>
    </div>

    <app-normal-text
      class="!text-center !text-sm font-semibold !whitespace-nowrap"
    >
      {{ data?.ticket_type }}
    </app-normal-text>
    <app-normal-text
      class="!text-right !text-sm font-semibold !whitespace-nowrap pr-3"
    >
      {{ data?.checked_in ? "yes" : "no" }}
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
        type: Object as () => any,
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
