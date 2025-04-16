<template>
  <div
    id="verificiation-table"
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
          <th class="px-6 py-3 text-left font-medium text-gray-500">
            Credentials (Click to open)
          </th>
          <th class="px-6 py-3 text-right font-medium text-gray-500">
            Actions
          </th>
        </tr>
      </thead>

      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="verificiation in verifications" :key="verificiation.id">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center space-x-3">
              <img
                :src="verificiation.avatar"
                class="w-10 h-10 rounded-full"
                alt="Withdrawal avatar"
              />
              <div class="font-medium text-black">{{ verificiation.name }}</div>
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center space-x-3">
              <div class="flex items-center space-x-2 cusor-pointer">
                <app-icon name="document-text" />
                <span class="text-blue">Passport</span>
              </div>

              <div class="flex items-center space-x-2 cusor-pointer">
                <app-icon name="document-text" custom-class="h-5" />
                <span class="text-blue">Business</span>
              </div>
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
            <div class="flex justify-end space-x-3">
              <span
                role="button"
                @click="$emit('approve', verificiation.id)"
                class="text-green hover:opacity-80 cursor-pointer"
              >
                Approve
              </span>

              <span
                role="button"
                @click="$emit('Reject', verificiation.id)"
                class="text-red hover:opacity-80 cursor-pointer"
              >
                Reject
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
  import AppIcon from "../AppIcon"

  interface Withdrawal {
    id: number
    name: string
    avatar: string
    amount: string
    status: "active" | "suspended"
  }

  export default defineComponent({
    name: "AppwithdrawalTable",
    components: { AppIcon },
    props: {
      verifications: {
        type: Array as PropType<Withdrawal[]>,
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
