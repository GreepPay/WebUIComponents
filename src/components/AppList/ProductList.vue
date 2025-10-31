<template>
  <div
    :class="[
      'grid grid-cols-8 items-center gap-3 py-2 pb-3 truncate cursor-pointer',
      !isLastItem && 'border-b-[1px] border-[#F0F3F6]',
      customClass,
    ]"
  >
    <!-- Product Details Column (spans 4 columns) -->
    <div class="col-span-4 flex items-center space-x-2 flex-1">
      <div class="size-[72px] !rounded-lg">
        <app-image-loader
          class="size-full !rounded-lg relative bg-gray-100"
          :photo-url="data.product_image"
        />
      </div>

      <div class="flex-1 flex flex-col space-y-[1px] !h-full !w-full">
        <app-normal-text
          class="!text-left !line-clamp-1 block !text-black !font-semibold !text-base"
        >
          {{ data.product_title || 'Untitled Product' }}
        </app-normal-text>

        <app-normal-text 
        customClass="leading-6 !text-xxs !text-black !w-full">
          <span>{{ data.product_category || 'Category' }}</span>
          <span class="!text-green-600 px-2 text-[8px]">●</span>
          <span class="!text-green-600">
            {{ data.product_left ? `${data.product_left} pieces left` : 'Out of stock' }}
          </span>
        </app-normal-text>


        <app-normal-text class="!text-xxs !text-black !font-semibold">
          {{ data.product_price }}
        </app-normal-text>
      </div>
    </div>

    <!-- Variants Column -->
    <app-normal-text class="!text-center !text-sm !whitespace-nowrap">
      {{ data.variants || 1 }}
    </app-normal-text>

    <!-- No. Sold Column -->
    <app-normal-text class="!text-center !text-sm !whitespace-nowrap">
      {{ data.number_sold || 0 }}
    </app-normal-text>
    
    <!-- Cost Column -->
    <app-normal-text
      class="!text-right !text-base !font-semibold !whitespace-nowrap"
    >
      {{ data.product_price  }}
    </app-normal-text>
    
    <!-- Actions -->
    <app-normal-text
      class="!text-right !text-base !font-semibold !whitespace-nowrap"
    >
      NA  
    </app-normal-text>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import AppImageLoader from "../AppImageLoader"
import { AppNormalText } from "../AppTypography"

export default defineComponent({
  name: "AppProductList",
  components: {
    AppImageLoader,
    AppNormalText,
  },
  props: {
    data: {
      type: Object as () => {
        product_image: string
        product_title: string
        product_category: string
        product_left: number
        product_price: number | string
        variants?: string
        number_sold?: string
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
})
</script>