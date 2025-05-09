<template>
  <div class="border">
    <div
      :style="{ width: '600px !important', height: '700px' }"
      class="overflow-x-auto"
    >
      <VPdfViewer :src="src" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import { VPdfViewer } from "@vue-pdf-viewer/viewer"

  export default defineComponent({
    name: "AppPDFViewer",
    components: { VPdfViewer },
    props: {
      src: {
        type: String,
        default:
          "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
      },
      customClass: {
        type: String,
        default: "",
      },
    },
    emits: [],
    setup() {
      return {}
    },
  })
</script>

<style scoped></style>
