<template> 
  <div 
    class="rounded-xl border  border-gray-2 flex flex-col justify-between bg-white" 
  >   
      <div 
          v-if="view ==='grid' "
        class="rounded-xl border  border-gray-2 flex flex-col justify-between bg-white" 
      >  
            <!-- Header with switch -->
            <div class="flex items-center justify-between border-b p-5">
              <app-checkbox
                v-model="data.active"
                variant="switch"
                custom-class="!w-fit " 
                :label="data.active ? 'Active' : 'Inactive'" 
              />
            </div> 

            <!-- Today’s sales -->
            <div
              class=" !border-l-4 "
              :class="data.active ? '!border-[#00683F]' : '!border-gray'"
            > 
              <div
              class="flex items-center   border-b-[1px] border-b-[#F0F3F6] " 
              > 
              
                <div class="flex-1 flex flex-col p-3">
                  <app-header-text>
                    {{ data.currency.symbol
                    }} {{ Logic.Common.convertToMoney(data.rate_per_usd, true, "") }}
                  </app-header-text>
                  <app-normal-text class="!text-light-black"> For 1 USDC </app-normal-text> 
                </div> 
              </div> 
            </div>

            
             
              <div class=" p-4 flex flex-col " >  
                  <app-normal-text class="!text-light-black pb-2">    Exchange <span  class="!text-black font-medium"> USDC to {{ data.currency.name }} </span> </app-normal-text> 
                  <app-normal-text class="!text-light-black pb-2"> Cash Limit <span  class="!text-black font-medium">  {{ data.currency.symbol
          }}{{ Logic.Common.convertToMoney(data.limit.min, true, "") }} -
          {{ data.currency.symbol
          }}{{ Logic.Common.convertToMoney(data.limit.max, true, "") }} </span> </app-normal-text> 
                  <app-normal-text class="!text-light-black pb-2"> Payout <span  class="!text-black font-medium">{{ data.payout_options.join(", ") }}</span> </app-normal-text> 
              </div>   
          </div> 
          
          <div 
            v-else
            class="grid grid-cols-12  w-full items-center gap-3  p-4 !border-l-4 rounded-xl  truncate cursor-pointer"  
            :class="data.active ? '!border-[#00683F]' : '!border-gray'" 
          >    
            <div class="flex flex-col col-span-5">
              <app-header-text>
                {{ data.currency.symbol
                }}{{ Logic.Common.convertToMoney(data.rate_per_usd, true, "") }}
              </app-header-text>
              <app-normal-text class="!text-light-black"> For 1 USDC </app-normal-text>
            </div> 
            
            <div class="flex flex-col  col-span-3">
              <app-header-text>
                USDC to {{ data.currency.name }}
              </app-header-text>
              <app-normal-text class="!text-light-black"> Exchange </app-normal-text>
            </div> 
            
            <div class="flex flex-col  col-span-3">
              <app-normal-text class="!text-light-black pb-2"> Cash Limit <span  class="!text-black font-medium">  {{ data.currency.symbol
          }}{{ Logic.Common.convertToMoney(data.limit.min, true, "") }} -
          {{ data.currency.symbol
          }}{{ Logic.Common.convertToMoney(data.limit.max, true, "") }} </span> </app-normal-text> 
                                <app-normal-text class="!text-light-black pb-2"> Payout <span  class="!text-black font-medium">{{ data.payout_options.join(", ") }}</span> </app-normal-text> 

            </div> 

            <div class="flex  w-full  items-end  justify-end">
              <app-checkbox
                v-model="data.active"
                variant="switch"
                custom-class="!w-fit  " 
                label="" 
              />
            </div>  
        </div> 
      </div>  
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import AppIcon from "../AppIcon"
  import { AppNormalText, AppHeaderText } from "../AppTypography"
  import { Logic } from "../../composable" 
  import AppAvatar from "../AppAvatar" 
  import AppCheckbox from "../AppCheckbox" 

  export default defineComponent({
    components: {
      AppIcon,
      AppNormalText, AppHeaderText,
      AppAvatar,
      AppCheckbox
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
 
      view: {
        type: String as () => "list" | "grid",
        default: "grid",
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
