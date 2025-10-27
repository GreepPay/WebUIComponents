<template>
  <div
    :class="[
      'grid grid-cols-8 items-center gap-3 py-2 pb-3 truncate cursor-pointer',
      !isLastItem && 'border-b-[1px] border-[#F0F3F6]',
      customClass,
    ]"
  >
    <div class="col-span-4 flex items-center space-x-2 flex-1">
      <div class="size-[72px] !rounded-lg">
        <app-image-loader
          class="size-full !rounded-lg relative bg-black"
          :photo-url="data.image_url"
        />
      </div>

      <div class="flex-1 flex flex-col space-y-[1px] !h-full !w-full">
        <app-normal-text
          class="!text-left !line-clamp-1 block !text-black !font-semibold !text-base"
        >
          {{ data.event_title || 'Untitled Event' }}
        </app-normal-text>

        <app-normal-text
          customClass="leading-6 !text-xxs !text-black !w-full"
        >
          <span v-for="(text, index) in data.sub_titles" :key="index">
            {{ text }}
            <span
              v-if="index < data.sub_titles.length - 1"
              class="!text-black px-2"
            >
              ●
            </span>
          </span>
        </app-normal-text>

        <app-normal-text customClass="!text-xxs !text-black">
          {{ data.location || 'Location not specified' }}
        </app-normal-text>
      </div>
    </div>

    <app-normal-text
      class="!text-center !text-sm !whitespace-nowrap"
      :class="data.status == 'active' ? '!text-green' : '!text-hot-orange'"
    >
      {{ data.status == 'active' ? 'Ongoing' : (data.status == 'archived' ? 'Ended' : 'Upcoming') }}
    </app-normal-text>

    <app-normal-text class="!text-center !text-sm !whitespace-nowrap">
      {{ data.ticket_price }}
    </app-normal-text>
    
    <app-normal-text class="!text-center !text-sm !whitespace-nowrap">
      {{ data.no_of_tickets_sold || 0 }}
    </app-normal-text>
    
    <app-normal-text
      class="!text-right !text-base !font-semibold !whitespace-nowrap"
    >
      {{ data.ticket_revenue }}
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
      const sub_titles = ["Sun, 27 Apr", "8AM"]
      return {
        Logic,
        sub_titles,
      }
    },
  })
</script>