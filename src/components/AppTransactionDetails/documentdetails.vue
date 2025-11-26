<template>
  <div class="w-full"> <!-- Remove cursor-pointer and @click here -->
    <div class="w-full flex flex-col px-4 rounded-[16px] border-[1.5px]">
      <template v-for="(item, index) in details" :key="index">
        <div
          :class="`flex py-4 px-1 w-full  ${
            isVertical
              ? 'flex-col space-y-1'
              : 'items-center justify-between space-x-3'
          } ${index !== 0 && 'border-t'}`"
          @click="handleDocumentClick(item)"
        >
          <span class="!text-very-light-gray font-normal text-sm capitalize">
            {{ item.title }}
          </span>
          <span class="!text-black !font-medium !text-base cursor-pointer"> 
            {{ item.content }}
          </span>
        </div>
      </template>
    </div>
  </div>
  
  <!-- PDF Viewer -->
  <app-modal
    :isOpen="showPDF"
    title="File Details"
    :showTitle="true"
    :showFooter="false"
    @close="showPDF = false"
  >
    <!-- <AppPDFViewer :documentUrl="selectedDocumentUrl" /> -->
  </app-modal>
</template>

<script lang="ts">
  import AppPDFViewer from "../AppPdfViewer"
  import AppIcon from "../AppIcon"
  import { defineComponent, ref} from "vue"
  import { AppNormalText, AppHeaderText } from "../AppTypography"

  export default defineComponent({
    name: "AppDetails",
    components: { AppNormalText, AppHeaderText, AppPDFViewer }, 
    props: {
      details: {
        type: Array as () => {
          title: string
          content: string
        }[],
        required: true,
      },
      isVertical: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      const showPDF = ref(false)
      const selectedDocumentUrl = ref("")
      
      const handleDocumentClick = (item: { title: string; content: string }) => {
        selectedDocumentUrl.value = item.content
        showPDF.value = true
      }
      
      return { 
        showPDF,
        selectedDocumentUrl,
        handleDocumentClick
      }
    },
  })
</script>