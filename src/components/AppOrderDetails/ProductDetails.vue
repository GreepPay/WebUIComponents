<template>
  <div class="w-full flex flex-col rounded-[16px] border-[1.5px] border-[#F0F3F6]">
    <!-- Header -->
    <div class="flex items-center justify-between p-4 border-b-[1.5px] border-[#F0F3F6]">
      <div class="w-2/5">
        <app-normal-text class="!text-light-black !font-medium">Product</app-normal-text>
      </div>
      <div class="w-1/5 text-center">
        <app-normal-text class="!text-light-black !font-medium">Quantity</app-normal-text>
      </div>
      <div class="w-1/5 text-right">
        <app-normal-text class="!text-light-black !font-medium">Price</app-normal-text>
      </div>
    </div>

    <!-- Loop through products -->
    <div
      v-for="product in products"
      :key="product.product_id"
      class="flex items-center justify-between p-4 border-b-[1.5px] border-[#F0F3F6]"
    >
      <div class="flex items-center gap-3 w-2/5">
        <img 
          v-if="product.product_image" 
          :src="product.product_image" 
          class="w-10 h-10 rounded object-cover"
          alt="Product image"
        >
        <app-normal-text class="!text-light-black !font-medium truncate">
          {{ product.product_title || '—' }}
        </app-normal-text>
      </div>
      <div class="w-1/5 text-center">
        <app-normal-text class="!text-light-black !font-medium">
          {{ product.quantity || '—' }}
        </app-normal-text>
      </div>
      <div class="w-1/5 text-right">
        <app-normal-text class="!text-light-black !font-medium">
         {{ currency }} {{ product.unit_price }} 
        </app-normal-text>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "AppProductDetails",
  props: {
    products: {
      type: Array as () => any[],
      required: true,
      default: () => []
    },
    currency: {
      type: String,
      required: false,
      default: 'USD'
    },
  },
})
</script>