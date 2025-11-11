<!-- AppTicketList1.vue -->
<template>
  <div
    :class="[
      'grid grid-cols-12 items-center py-3 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer',
      !isLastItem && 'border-b-[1px] border-[#F0F3F6]',
      customClass,
    ]"
    @click="handleClick"
  >
    <!-- Ticket / Event - col-span-3 -->
    <div class="col-span-3 flex items-center">
      <div class="size-12 rounded-lg bg-gray-200 flex-shrink-0">
        <app-image-loader
          class="size-full rounded-lg"
          :photo-url="data.image_url"
        />
      </div>
      <div class="flex flex-col ml-3">
        <app-normal-text class="!text-left !text-black !font-semibold !text-sm">
          {{ data.ticketType || 'Regular Ticket' }}
        </app-normal-text>
        <app-normal-text class="!text-left !text-gray-600 !text-xs">
          {{ data.name }}
        </app-normal-text>
      </div>
    </div>

    <!-- Event Date / Location - col-span-2 -->
    <div class="col-span-2">
      <app-normal-text class="!text-left !text-black !text-sm">
        {{ data.date }}
      </app-normal-text>
      <app-normal-text class="!text-left !text-gray-600 !text-xs">
        {{ data.location }}
      </app-normal-text>
    </div>

    <!-- Event Status - col-span-1 -->
    <div class="col-span-1 flex justify-center">
      <span 
        :class="[
          'px-2 py-1 rounded-full text-xs font-medium',
          data.status === 'ongoing' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
        ]"
      >
        {{ data.status === 'ongoing' ? 'Ongoing' : 'Upcoming' }}
      </span>
    </div>

    <!-- Cost - col-span-1 -->
    <div class="col-span-1 text-center">
      <app-normal-text class="!text-black !font-medium !text-sm">
        {{ data.cost }}
      </app-normal-text>
    </div>

    <!-- No. Sold - col-span-1 -->
    <div class="col-span-1 text-center">
      <app-normal-text class="!text-black !font-medium !text-sm">
        {{ data.sold }}
      </app-normal-text>
    </div>

    <!-- Total Sales - col-span-2 -->
    <div class="col-span-2 text-center">
      <app-normal-text class="!text-black !font-semibold !text-sm">
        {{ data.totalSales }}
      </app-normal-text>
    </div>

    <!-- Action - col-span-2 -->
    <div class="col-span-2 flex justify-center">
      <app-normal-text class="!text-gray-400 !text-sm">
        N/A
      </app-normal-text>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import { AppNormalText } from "../AppTypography"
  import { Logic,  } from "../../composable"
  import AppImageLoader from "../AppImageLoader"

  export interface TicketData {
    uuid: string
    id: string
    name: string
    description: string
    date: string
    location: string
    status: string
    cost: string
    sold: string
    totalSales: string
    image_url: string
    ticketType: string
    type: string
    sub_titles: string[]
    isOnline: boolean
    locationUrl: string
  }

  export default defineComponent({
    components: {
      AppNormalText,
      AppImageLoader,
    },
    name: "AppTicketList1",
    props: {
      data: {
        type: Object as () => TicketData,
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
    setup(props) {
      const handleClick = () => {
        Logic.Common.GoToRoute(`/tickets/${props.data.uuid}`)
      }

      return {
        Logic,
        handleClick,
      }
    },
  })
</script>