<template>
  <div
    id="user-table"
    :class="`${customClass} blend-in overflow-x-auto bg-white box-shadow`"
    style="
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    "
    :style="customStyle"
  >
    <table class="min-w-full divide-y divide-gray-200">
      <colgroup>
        <col class="w-1/2" />
        <col class="w-2/8" />
        <col class="w-2/8" />
        <col class="w-2/4" />
      </colgroup>

      <thead class="bg-white">
        <tr>
          <th class="px-6 py-3 text-left font-medium text-gray-500">Name</th>
          <th class="px-6 py-3 text-left font-medium text-gray-500">Type</th>
          <th class="px-6 py-3 text-left font-medium text-gray-500">Balance</th>
          <th class="px-6 py-3 text-right font-medium text-gray-500">
            Actions
          </th>
        </tr>
      </thead>

      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="user in users" :key="user.id">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center space-x-3">
              <img
                :src="user.avatar"
                class="w-10 h-10 rounded-full"
                alt="User avatar"
              />
              <h3 class="font-medium text-black">{{ user.name }}</h3>
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-very-light-gray">
            {{ user.type }}
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-black font-semibold">
            {{ user.balance }}
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
            <div class="flex justify-end space-x-3">
              <span
                role="button"
                @click="$emit('see-history', user.id)"
                class="text-green hover:opacity-80 cursor-pointer"
              >
                See History
              </span>

              <p class="inline-block w-[1px] h-5 bg-light-gray-two"></p>

              <span
                role="button"
                @click="$emit('freeze', user.id)"
                class="text-red hover:opacity-80 cursor-pointer"
              >
                Freeze Account
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue"
  import type { PropType } from "vue"

  type UserType = "Merchant" | "Customer"

  interface WalletUser {
    id: string
    name: string
    type: UserType
    avatar?: string
    balance: number
  }

  export default defineComponent({
    name: "AppMerchantTable",
    props: {
      users: {
        type: Array as PropType<WalletUser[]>,
        required: true,
      },
      customClass: {
        type: String,
        default: "",
      },
      customStyle: {
        type: String,
        default: "",
      },
    },
    emits: ["see-history", "freeze"],
    setup() {
      return {}
    },
  })
</script>

<style scoped>
  .blend-in {
    animation: fadein 0.15s;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
