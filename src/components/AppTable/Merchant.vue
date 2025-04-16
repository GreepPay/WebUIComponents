<template>
  <div
    id="merchant-table"
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
          <th class="px-6 py-3 text-left font-medium text-gray-500">Joined</th>
          <th class="px-6 py-3 text-right font-medium text-gray-500">
            Actions
          </th>
        </tr>
      </thead>

      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="merchant in merchants" :key="merchant.id" >
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center space-x-3">
              <img
                :src="merchant.avatar"
                class="w-10 h-10 rounded-full"
                alt="Merchant avatar"
              />
              <div class="flex items-center space-x-2">
                <div class="font-medium text-black">{{ merchant.name }}</div>
                <div
                  v-if="merchant.status === 'suspended'"
                  class="text-very-light-gray"
                >
                  (Suspended)
                </div>
              </div>
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-very-light-gray">
            {{ merchant.joinedDate }} • {{ merchant.joinedTime }}
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
            <div class="flex justify-end space-x-3">
              <span
                role="button"
                v-if="merchant.status === 'active'"
                @click="$emit('suspend', merchant.id)"
                class="text-orange hover:opacity-80 cursor-pointer"
              >
                Suspend
              </span>
              <span
                role="button"
                v-else
                @click="$emit('restore', merchant.id)"
                class="text-green hover:opacity-80 cursor-pointer"
              >
                Restore
              </span>
              <span
                role="button"
                @click="$emit('delete', merchant.id)"
                class="text-red hover:opacity-80 cursor-pointer"
              >
                Delete
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

  interface Merchant {
    id: number
    name: string
    avatar: string
    joinedDate: string
    joinedTime: string
    status: "active" | "suspended"
  }

  export default defineComponent({
    name: "AppMerchantTable",
    props: {
      merchants: {
        type: Array as PropType<Merchant[]>,
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
    emits: ["suspend", "restore", "delete"],
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
