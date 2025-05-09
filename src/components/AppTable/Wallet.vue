<template>
  <div
    id="wallet-table"
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
        <tr
          v-if="wallets && wallets.length"
          v-for="(wallet, index) in wallets"
          :key="wallet.id"
          :class="
            index % 2 !== 0 ? 'bg-light-gray-one bg-opacity-[25%]' : 'bg-white'
          "
        >
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center space-x-2">
              <app-avatar
                :name="`${wallet?.user?.first_name} ${wallet?.user?.last_name}`"
                :src="wallet?.user?.profile?.profile_picture || ''"
                class="w-10 h-10 rounded-full"
                alt="Wallet avatar"
              />
              <h3 class="font-medium text-black">
                {{ `${wallet?.user?.first_name} ${wallet?.user?.last_name}` }}
              </h3>
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-very-light-gray">
            {{ wallet?.user?.role?.name }}
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-black font-semibold">
            {{ `${wallet?.total_balance} ${wallet?.currency}` }}
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
            <div class="flex justify-end space-x-3">
              <span
                role="button"
                @click="$emit('see-history', wallet)"
                class="text-green hover:opacity-80 cursor-pointer"
              >
                See History
              </span>

              <!-- <p class="inline-block w-[1px] h-5 bg-light-gray-two"></p> -->

              <!-- <span
                role="button"
                @click="$emit('freeze', wallet.id)"
                class="text-red hover:opacity-80 cursor-pointer"
              >
                Freeze Account
              </span> -->
            </div>
          </td>
        </tr>

        <tr v-else>
          <td
            colspan="3"
            class="px-6 py-4 text-black text-center font-semibold"
          >
            <app-empty-state
              title="No wallets"
              description="No  wallets available "
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import AppAvatar from "../AppAvatar"
  import AppEmptyState from "../AppEmptyState"
  import type { PropType } from "vue"
  import { Wallet } from "@greep/logic/src/gql/graphql"

  export default defineComponent({
    name: "AppWalletTable",
    components: { AppAvatar, AppEmptyState },
    props: {
      wallets: {
        type: Array as PropType<Wallet[]>,
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
