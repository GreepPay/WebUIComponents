<template>
  <div
    class="!w-full flex flex-col min-h-40 h-fit p-6 justify-center items-center max-w-[420px]"
  >
    <app-icon :name="icon" :custom-class="iconClass" />

    <div class="flex flex-col items-center justify-center p-4">
      <app-normal-text class="!text-black !font-semibold !text-lg mb-1">
        {{ title }}
      </app-normal-text>
      <app-normal-text
        class="!text-very-light-gray!text-base !text-center leading-5"
      >
        {{ description }}
      </app-normal-text>
    </div>

    <div v-if="action.label">
      <slot name="action">
        <app-button
          variant="primary"
          :text="action.label"
          class="py-3 px-6 rounded-full"
          :class="action?.customClass"
          @click="action?.handler"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  import AppIcon from "../AppIcon"
  import AppButton from "../AppButton"
  import { AppNormalText } from "../AppTypography"

  export default defineComponent({
    name: "AppEmptyState",
    components: {
      AppIcon,
      AppNormalText,
      AppButton,
    },
    props: {
      icon: {
        type: String,
        default: "empty/transaction",
      },
      iconClass: {
        type: String,
        default: "",
      },
      title: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
      action: {
        type: Object as () => {
          label?: string
          customClass?: string
          handler?: () => void
        },
        default: () => ({
          label: "",
          customClass: "",
        }),
      },
    },
    setup(props) {
      return {}
    },
  })
</script>
