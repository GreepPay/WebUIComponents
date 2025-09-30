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
        <tr
          v-if="verifications && verifications.length"
          v-for="(verificiation, index) in verifications"
          :key="verificiation.id"
          :class="
            index % 2 !== 0 ? 'bg-light-gray-one bg-opacity-[25%]' : 'bg-white'
          "
        >
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center space-x-3">
              <app-avatar
                :name="`${verificiation?.user?.first_name} ${verificiation?.user?.last_name}`"
                :src="verificiation?.user?.profile?.profile_picture || ''"
                class="w-10 h-10 rounded-full"
                alt="Admin avatar"
              />
              <div class="font-medium text-black">
                {{
                  `${verificiation?.user?.first_name} ${verificiation?.user?.last_name}`
                }}
              </div>
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center space-x-3">
              <div
                class="flex items-center space-x-2 cusor-pointer"
                @click="showPDF = true"
              >
                <app-icon name="document-text" />
                <span class="text-blue">Passport</span>
              </div>

              <div
                class="flex items-center space-x-2 cusor-pointer"
                @click="showPDF = true"
              >
                <app-icon name="document-text" custom-class="h-5" />
                <span class="text-blue">Business</span>
              </div>
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
            <div class="flex justify-end space-x-3">
              <span
                role="button"
                @click="$emit('approve', verificiation)"
                class="text-green hover:opacity-80 cursor-pointer"
              >
                Approve
              </span>

              <!-- <span
                role="button"
                @click="$emit('Reject', verificiation.id)"
                class="text-red hover:opacity-80 cursor-pointer"
              >
                Reject
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
              title="No verifications"
              description="No verifications available "
            />
          </td>
        </tr>
      </tbody>
    </table>

    <!-- PDF Viewer -->
    <app-modal
      :isOpen="showPDF"
      title="File Details"
      :showTitle="true"
      :showFooter="false"
      @close="showPDF = false"
    >
      <AppPDFViewer />
    </app-modal>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue"
  import type { PropType } from "vue"
  import AppAvatar from "../AppAvatar"
  import AppIcon from "../AppIcon"
  import AppEmptyState from "../AppEmptyState"
  import AppPDFViewer from "../AppPdfViewer"
  import { Verification } from "@greep/logic/src/gql/graphql"
  import AppModal from "../AppModal"

  export default defineComponent({
    name: "AppVerificationTable",
    components: { AppIcon, AppAvatar, AppEmptyState, AppPDFViewer, AppModal },
    props: {
      verifications: {
        type: Array as PropType<Verification[]>,
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
      const showPDF = ref(false)

      return { showPDF }
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
