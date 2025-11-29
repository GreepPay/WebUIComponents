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
          v-if="merchants && merchants.length"
          v-for="(merchant, index) in merchants"
          :key="merchant.created_at"
          :class="
            index % 2 !== 0 ? 'bg-light-gray-one bg-opacity-[25%]' : 'bg-white' "
        >
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center space-x-3">
              <app-avatar
                :name="merchant?.business?.business_name || 'Business'"
                :src="merchant?.business?.logo || ''"
                class="w-10 h-10 rounded-full"
              />
              <div class="font-medium text-black">
                {{ merchant?.business?.business_name || 'No business name' }}
              </div>
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center space-x-3">
              <div
                class="flex items-center space-x-2 cusor-pointer"
                @click="handleView(merchant)"
              >
                <app-icon name="document-text" />
                <span class="text-blue">Documents</span>
              </div>
            </div>
          </td>

          <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
            <div class="flex justify-end space-x-3">
              <!-- Approve Button -->
              <span
                role="button"
                @click="$emit('approve', merchant)"
                :class="{
                  'text-green-600 font-semibold': merchantStatus[merchant.business?.id] === 'approved',
                  'text-gray-400': merchantStatus[merchant.business?.id] === 'rejected',
                  'text-green hover:opacity-80': !merchantStatus[merchant.business?.id]
                }"
                class="cursor-pointer transition-colors duration-200"
              >
                Approve
              </span>
          
              <!-- Reject Button -->
              <span
                role="button"
                @click="$emit('reject', merchant)"
                :class="{
                  'text-red-600 font-semibold': merchantStatus[merchant.business?.id] === 'rejected',
                  'text-gray-400': merchantStatus[merchant.business?.id] === 'approved',
                  'text-red hover:opacity-80': !merchantStatus[merchant.business?.id]
                }"
                class="cursor-pointer transition-colors duration-200"
              >
                Reject
              </span>
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
    
    <app-modal
        :isOpen="showDetails"
        title="Merchant Documents"
        :showTitle="true"
        :showFooter="false"
        @close="showDetails = false"
    >
        <div class="space-y-5">
            <app-document-details
                :details="mapVerificationToDetails(selectedDocuments)"
                @view="handleView"
            />
        </div>
    </app-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import type { PropType } from "vue"
import AppAvatar from "../AppAvatar"
import AppIcon from "../AppIcon"
import AppEmptyState from "../AppEmptyState"
import { AppDocumentDetails } from "../AppTransactionDetails"
import AppPDFViewer from "../AppPdfViewer"
import { Verification, Profile } from "@greep/logic/src/gql/graphql"
import AppModal from "../AppModal"

export default defineComponent({
  name: "AppVerificationTable",
  components: { 
    AppIcon, 
    AppAvatar, 
    AppEmptyState, 
    AppPDFViewer, 
    AppModal, 
    AppDocumentDetails 
  },
  props: {
    verifications: {
      type: Array as PropType<Verification[]>,
      required: true,
    },
    merchants: {
      type: Array as PropType<Profile[]>,
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
    merchantStatus: {
      type: Object as PropType<Record<string, 'approved' | 'rejected' | null>>,
      default: () => ({})
    },
  },
  // Update emits to include both approve and reject
  emits: ["view", "approve", "reject"],
  setup(props, { emit }) {
    const showDetails = ref(false);
    const selectedDocuments = ref<Profile | null>(null);
    
    type VerificationDetail = {
      title: string
      content: string
      displayText?: string
    }
    
    const mapVerificationToDetails = (
      doc: Profile 
    ): VerificationDetail[] => {
      if (doc.business?.documents && Array.isArray(doc.business.documents)) {
        const validDocuments = doc.business.documents.filter((docUrl): docUrl is string => 
          docUrl !== null && docUrl !== undefined && docUrl.trim() !== ''
        );
    
        if (validDocuments.length > 0) {
          const businessDetails: VerificationDetail[] = validDocuments.map((documentUrl: string, index: number) => {
            return {
              title: `Business Document ${index + 1}`,
              content: documentUrl,
              displayText: `View Document ${index + 1}`,
            }
          });
    
          return businessDetails;
        }
      }
    
      return [
        {
          title: "Documents", 
          content: "No documents available",
        },
      ]
    }
    
    const handleView = (merchant: Profile) => {
      selectedDocuments.value = merchant; 
      showDetails.value = true;
      emit('view', merchant);
    };

    return { 
      handleView,
      showDetails,
      selectedDocuments,
      mapVerificationToDetails 
    }
  },
})
</script>