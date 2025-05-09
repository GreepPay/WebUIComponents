<template>
  <div
    id="transaction-table"
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
        <col class="w-1/6" />
        <col class="w-1/6" />
      </colgroup>

      <thead class="bg-white">
        <tr>
          <th class="px-6 py-3 text-left font-medium text-gray-500">Name</th>
          <th class="px-6 py-3 text-left font-medium text-gray-500">Amount</th>
          <th class="px-6 py-3 text-right font-medium text-gray-500">
            Actions
          </th>
        </tr>
      </thead>

      <tbody class="bg-white divide-y divide-gray-200">
        <tr
          v-if="transactions && transactions.length"
          v-for="(transaction, index) in transactions"
          :key="transaction.wallet_id"
          :class="
            index % 2 !== 0 ? 'bg-light-gray-one bg-opacity-[25%]' : 'bg-white'
          "
        >
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center space-x-3">
              <app-avatar
                :name="`${transaction?.user?.first_name} ${transaction?.user?.last_name}`"
                :src="transaction?.user?.profile?.profile_picture || ''"
                class="w-10 h-10 rounded-full"
                alt="Admin avatar"
              />
              <div class="font-medium text-black">
                {{
                  `${transaction?.user?.first_name} ${transaction?.user?.last_name}`
                }}
              </div>
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-black font-bold">
            {{ transaction.amount }}
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
            test
            <!-- <div class="flex justify-end space-x-3">
              <span
                role="button"
                @click="$emit('approve', transaction.id)"
                class="text-green hover:opacity-80 cursor-pointer"
              >
                Approve
              </span>

              <p class="inline-block w-[1px] h-5 bg-light-gray-two"></p>

              <span
                role="button"
                @click="$emit('Reject', transaction.id)"
                class="text-red hover:opacity-80 cursor-pointer"
              >
                Reject
              </span>
            </div> -->
          </td>
        </tr>

        <tr v-else>
          <td
            colspan="3"
            class="px-6 py-4 text-black text-center font-semibold"
          >
            <app-empty-state
              title="No transactions"
              description="No transactions available "
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import AppEmptyState from "../AppEmptyState"
  import type { PropType } from "vue"
  import { Transaction } from "@greep/logic/src/gql/graphql"

  export default defineComponent({
    name: "AppwithdrawalTable",
    components: { AppEmptyState },
    props: {
      transactions: {
        type: Array as PropType<Transaction[]>,
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
    emits: ["approve", "Reject"],
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
