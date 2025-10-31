<template>
  <div
    class="w-full flex flex-col rounded-[16px] border-[1.5px] border-[#F0F3F6]"
  >
    <!-- Header -->
    <div
      class="flex items-center justify-between p-4 border-b-[1.5px] border-[#F0F3F6]"
    >
      <app-normal-text class="!text-light-black !font-medium">
        Product
      </app-normal-text>
      <app-normal-text class="!text-light-black !font-medium">
        Quantity
      </app-normal-text>
      <app-normal-text class="!text-light-black !font-medium">
        Price
      </app-normal-text>
    </div>

    <!-- Order Details -->
    <div
      class="flex items-center justify-between p-4 border-b-[1.5px] border-[#F0F3F6]"
    >
      <app-normal-text class="!text-light-black !font-medium">
        {{ date_time || '—' }}
      </app-normal-text>
      <app-normal-text class="!text-light-black !font-medium">
        {{ order || '—' }}
      </app-normal-text>
      <app-normal-text class="!text-light-black !font-medium">
        {{ currency || '—' }}
      </app-normal-text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "AppProductDetails",
  props: {
    date_time: {
      type: String,
      required: false,
    },
    order: {
      type: [String, Number],
      required: false,
    },
    currency: {
      type: String,
      required: false,
    },
  },
})
</script>
