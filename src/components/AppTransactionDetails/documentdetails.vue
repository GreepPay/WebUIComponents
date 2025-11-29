<template>
  <div class="w-full">
    <div class="w-full flex flex-col px-4 rounded-[16px] border-[1.5px]">
      <template v-for="(item, index) in details" :key="index">
        <div
          :class="`flex py-4 px-1 w-full cursor-pointer ${
            isVertical
              ? 'flex-col space-y-1'
              : 'items-center justify-between space-x-3'
          } ${index !== 0 && 'border-t'}`"
          @click="openDocument(item)"
        >
          <span class="!text-very-light-gray font-normal text-sm capitalize">
            {{ item.title }}
          </span>
          <span class="!text-black !font-medium !text-base"> 
            {{ item.displayText || item.content }}
          </span>
        </div>
      </template>
    </div>
  
    <!-- Document Viewer Modal -->
    <app-modal
      v-if="showDocumentViewer"
      :isOpen="showDocumentViewer"
      :title="selectedDocumentTitle"
      :showTitle="true"
      :showFooter="false"
      @close="closeDocumentViewer"
      customClass="nested-modal"
    >
      <!-- PDF Viewer for PDF files -->
      <div v-if="isPdfFile(selectedDocumentUrl)" class="document-viewer">
        <AppPDFViewer :src="selectedDocumentUrl" />
      </div>

      <!-- Image Viewer for image files -->
      <div v-else-if="isImageFile(selectedDocumentUrl)" class="document-viewer">
        <div class="flex justify-center items-center min-h-96 max-h-[70vh] overflow-auto">
          <img 
            :src="selectedDocumentUrl" 
            :alt="selectedDocumentTitle" 
            class="max-w-full max-h-full object-contain rounded-lg"
            @error="handleImageError"
          />
          <p v-if="imageLoadError" class="text-red-500 mt-2">Failed to load image</p>
        </div>
      </div>

      <!-- Download link for other file types -->
      <div v-else class="document-viewer">
        <div class="p-4 text-center">
          <p class="mb-4">This file type cannot be previewed.</p>
          <a 
            :href="selectedDocumentUrl" 
            download 
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Download File
          </a>
        </div>
      </div>

      <!-- Close Document Button -->
      <div class="mt-4 flex justify-end border-t pt-4">
        <button
          @click="closeDocumentViewer"
          class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
        >
          Close Document
        </button>
      </div>
    </app-modal>
  </div>
</template>

<script lang="ts">
  import AppPDFViewer from "../AppPdfViewer"
  import { defineComponent, ref } from "vue"

  interface DocumentItem {
    title: string
    content: string
    displayText?: string
    documentUrl?: string
  }

  export default defineComponent({
    name: "AppDetails",
    components: { AppPDFViewer }, 
    props: {
      details: {
        type: Array as () => DocumentItem[],
        required: true,
      },
      isVertical: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      const showDocumentViewer = ref(false)
      const selectedDocumentUrl = ref("")
      const selectedDocumentTitle = ref("")
      const imageLoadError = ref(false)
      
      const openDocument = (item: DocumentItem) => {
        selectedDocumentUrl.value = item.documentUrl || item.content
        selectedDocumentTitle.value = item.title
        imageLoadError.value = false
        showDocumentViewer.value = true
      }

      const closeDocumentViewer = () => {
        showDocumentViewer.value = false
        setTimeout(() => {
          selectedDocumentUrl.value = ""
          selectedDocumentTitle.value = ""
        }, 300)
      }

      const handleImageError = () => {
        imageLoadError.value = true
        console.error('Failed to load image:', selectedDocumentUrl.value)
      }

      const isPdfFile = (url: string): boolean => {
        return url.toLowerCase().endsWith('.pdf')
      }

      const isImageFile = (url: string): boolean => {
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg']
        return imageExtensions.some(ext => url.toLowerCase().endsWith(ext))
      }
      
      return { 
        showDocumentViewer,
        selectedDocumentUrl,
        selectedDocumentTitle,
        imageLoadError,
        openDocument,
        closeDocumentViewer,
        handleImageError,
        isPdfFile,
        isImageFile
      }
    },
  })
</script>

<style scoped>
.document-viewer {
  min-height: 400px;
  display: flex;
  flex-direction: column;
}

/* Ensure nested modals have proper z-index */
.nested-modal {
  z-index: 60;
}
</style>