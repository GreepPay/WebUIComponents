<template>
  <div
    v-if="setup?.show"
    :class="[
      'w-full flex flex-col fixed top-0 left-0 z-[999999999999999]',
      setup?.isInteractive
        ? 'bg-black !bg-opacity-60'
        : 'bg-black !bg-opacity-30 dark:!bg-opacity-50',
      customClass
    ]"
    id="innerModal"
  >

  
    <template v-if="setup?.loading">
      <!-- <div :class="`loader-container w-full absolute top-0 left-0`">
        <div class="loader"></div>
      </div> --> 

      <div
        class="w-full flex flex-col space-y-5 xs:space-y-4 h-full absolute top-0 left-0 flex-grow pt-4 items-center justify-center z-50 css-gradient"
      >
         <Vue3Lottie :animation-link="'/loader.json'" :height="90" :width="90" />
      </div>

      
 
    <div
      v-if="setup?.isInteractive && messages[currentMessageIndex]"
      class="text-white text-sm text-center mt-8"
    >
      {{ messages[currentMessageIndex] }}
    </div>
    </template> 


     
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue"
import AppIcon from "../AppIcon"
import { Logic } from "../../composable" 
import { Vue3Lottie } from 'vue3-lottie'

export default defineComponent({
  name: "AppLoader",
  components: {
    AppIcon,Vue3Lottie
  },
  props: {
    customClass: {
      type: String,
      required: false,
      default: "",
    },
    setup: {
      type: Object as () => {
        show?: boolean
        loading?: boolean
        message?: string
        isInteractive?: boolean
      },
      required: true,
    },
  },
  setup(props) {
    const currentMessageIndex = ref(0)
    const timeoutTime = ref(120)
    const timeOutInstance = ref<number>()
    const messageInterval = ref<number>()
    const messages = ref([
      "Fetching your data...",
      "Please wait while we load...",
      "Almost there...",
      "Just a moment...",
    ])

    const startTimeoutCounter = () => {
      timeOutInstance.value = window.setInterval(() => {
        if (timeoutTime.value <= 0) {
          clearInterval(timeOutInstance.value)
          clearInterval(messageInterval.value)
          Logic.Common.hideLoader()
          Logic.Common.showAlert({
            show: true,
            message: "Network Timeout. Please try again",
            type: "error",
          })
        } else {
          timeoutTime.value--
        }
      }, 1000)
    }

    const rotateMessage = () => {
      messageInterval.value = window.setInterval(() => {
        currentMessageIndex.value = Math.floor(
          Math.random() * messages.value.length
        )
      }, 5000)
    }

    onMounted(() => {
      if (props.setup?.isInteractive) {
        rotateMessage()
      }
      startTimeoutCounter()
    })

    onUnmounted(() => {
      clearInterval(messageInterval.value)
      clearInterval(timeOutInstance.value)
    })

    return {
      messages,
      currentMessageIndex,
    }
  },
})
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 4px;
  background-color: transparent;
  overflow: hidden;
  border-radius: 4px;
}

.loader {
  height: 100%;
  width: 100%;
  animation: loaderAnimation 1.5s infinite linear;
}

@keyframes loaderAnimation {
  0% {
    transform: translateX(-100%);
    background-color: #53c1ff;
  }
  25% {
    background-color: #ffaa00;
  }
  50% {
    background-color: #80d89b;
  }
  75% {
    background-color: #ea5959;
  }
  100% {
    transform: translateX(100%);
    background-color: #6a76e5;
  }
}

#innerModal {
  margin-top: env(safe-area-inset-top) !important;
  margin-bottom: env(safe-area-inset-bottom) !important;
  height: calc(
    100% - env(safe-area-inset-top) - env(safe-area-inset-bottom)
  ) !important;
}
</style>
