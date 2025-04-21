<template>
  <div>
    <div class="controls" v-if="filePath">
      <button @click="prevPage">Previous</button>
      <button @click="nextPage">Next</button>
      <span>Page: {{ pageNum }} / {{ pageCount }}</span>
      <a :href="filePath" download class="download-btn">Download PDF</a>
    </div>

    <div id="pdf-container" v-if="filePath">
      <canvas ref="canvasRef"></canvas>
    </div>

    <div v-else class="no-file">No file selected</div>

    {{ filePath }}
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch } from "vue"
  import * as pdfjsLib from "pdfjs-dist"
  import pdfWorker from "pdfjs-dist/build/pdf.worker.js?worker"

  pdfjsLib.GlobalWorkerOptions.workerPort = new pdfWorker()

  const props = defineProps<{
    filePath: string | null
  }>()

  const canvasRef = ref<HTMLCanvasElement | null>(null)
  const pdfDoc = ref<any>(null)
  const pageNum = ref(1)
  const pageCount = ref(1)
  const pageRendering = ref(false)
  const pageNumPending = ref<number | null>(null)
  const scale = 1.5

  function renderPage(num: number) {
    if (!pdfDoc.value || !canvasRef.value) return
    pageRendering.value = true

    pdfDoc.value.getPage(num).then((page: any) => {
      const viewport = page.getViewport({ scale })
      const canvas = canvasRef.value!
      const ctx = canvas.getContext("2d")!

      canvas.height = viewport.height
      canvas.width = viewport.width

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport,
      }

      const renderTask = page.render(renderContext)

      renderTask.promise.then(() => {
        pageRendering.value = false
        if (pageNumPending.value !== null) {
          renderPage(pageNumPending.value)
          pageNumPending.value = null
        }
      })
    })
  }

  function queueRenderPage(num: number) {
    if (pageRendering.value) {
      pageNumPending.value = num
    } else {
      renderPage(num)
    }
  }

  function nextPage() {
    if (pageNum.value >= pageCount.value) return
    pageNum.value++
    queueRenderPage(pageNum.value)
  }

  function prevPage() {
    if (pageNum.value <= 1) return
    pageNum.value--
    queueRenderPage(pageNum.value)
  }

  watch(
    () => props.filePath,
    (newPath) => {
      if (newPath) {
        loadPdf(newPath)
      }
    }
  )

  function loadPdf(path: string) {
    pdfjsLib
      .getDocument(path)
      .promise.then((pdf: any) => {
        pdfDoc.value = pdf
        pageCount.value = pdf.numPages
        pageNum.value = 1
        renderPage(pageNum.value)
      })
      .catch(console.error)
  }

  onMounted(() => {
    if (props.filePath) loadPdf(props.filePath)
  })
</script>

<style scoped>
  #pdf-container {
    width: 100%;
    height: 90vh;
    overflow: auto;
    border: 1px solid #ddd;
  }

  canvas {
    display: block;
    margin: 0 auto;
  }

  .controls {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
  }

  .download-btn {
    text-decoration: none;
    color: white;
    background: #007bff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }

  .no-file {
    text-align: center;
    padding: 2rem;
    font-size: 1.2rem;
    color: #888;
  }
</style>
