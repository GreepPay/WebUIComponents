<template>
  <div class="flex items-center w-full">
    <template v-for="(step, index) in steps" :key="step.value">
      <!-- Step Item -->
      <div
        class="flex items-center"
        :class="allowStepClick ? 'cursor-pointer' : 'cursor-not-allowed'"
        @click="handleStepClick(step.value)"
      >
        <div>
          <!-- Checked Step -->
          <template v-if="isStepCompleted(step.value)">
            <app-icon
              v-if="step.checkedIcon || checkedIcon"
              :name="step.checkedIcon || checkedIcon"
              custom-class="h-8 w-8"
            />
            <div
              v-else
              class="flex items-center justify-center w-8 h-8 rounded-full border !bg-green-500 !border-green-500"
            >
              {{ index + 1 }}
            </div>
          </template>

          <!-- Current Step -->
          <template v-else-if="currentStep === step.value">
            <div
              class="flex items-center justify-center w-8 h-8 rounded-full border bg-black text-white border-black"
            >
              {{ index + 1 }}
            </div>
          </template>

          <!-- Unchecked Step -->
          <template v-else>
            <app-icon
              v-if="step.uncheckedIcon || uncheckedIcon"
              :name="step.uncheckedIcon || uncheckedIcon"
              custom-class="h-8 w-8"
            />
            <div
              v-else
              class="flex items-center justify-center w-8 h-8 rounded-full border bg-transparent text-gray-400 border-gray-300"
            >
              {{ index + 1 }}
            </div>
          </template>
        </div>

        <!-- Step Title -->
        <span
          class="!ml-2 text-sm font-medium"
          :class="{
            'text-black': !isStepUpcoming(step.value),
            'text-gray-400': isStepUpcoming(step.value),
          }"
        >
          {{ step.title }}
        </span>
      </div>

      <!-- Divider -->
      <div
        v-if="index < steps.length - 1"
        class="flex-1 h-px mx-4"
        :class="{
          'bg-black': isStepCompleted(steps[index + 1].value),
          'bg-gray-300': !isStepCompleted(steps[index + 1].value),
        }"
      ></div>
    </template>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue"
  import AppIcon from "../AppIcon"

  interface Step {
    title: string
    value: string
    checkedIcon?: string
    uncheckedIcon?: string
  }

  export default defineComponent({
    name: "EventStepper",
    components: { AppIcon },
    props: {
      steps: {
        type: Array as PropType<Step[]>,
        required: true,
        default: () => [],
      },
      currentStep: {
        type: String,
        default: "",
      },
      checkedIcon: {
        type: String,
        default: "tick-outlined-checked",
      },
      uncheckedIcon: {
        type: String,
        default: "",
      },
      activeIcon: {
        type: String,
        default: "",
      },
      allowStepClick: {
        type: Boolean,
        default: true,
      },
    },
    emits: ["update:currentStep", "change"],
    setup(props, { emit }) {
      const stepIndex = (value: string) =>
        props.steps.findIndex((s) => s.value === value)

      const isStepCompleted = (value: string) =>
        stepIndex(value) < stepIndex(props.currentStep)

      const isStepUpcoming = (value: string) =>
        stepIndex(value) > stepIndex(props.currentStep)

      const handleStepClick = (value: string) => {
        if (!props.allowStepClick) return
        emit("update:currentStep", value)
        emit("change", value)
      }

      return {
        isStepCompleted,
        isStepUpcoming,
        handleStepClick,
      }
    },
  })
</script>

<style scoped>
  button:focus {
    outline: none;
    box-shadow: none;
  }
</style>
