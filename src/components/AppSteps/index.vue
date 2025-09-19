<template>
  <template v-if="type === 'horizontal'">
    <div class="flex items-center w-full">
      <template v-for="(step, index) in steps" :key="step.value">
        <div
          class="flex items-center"
          :class="allowStepClick ? 'cursor-pointer' : 'cursor-not-allowed'"
          @click="handleStepClick(step.value)"
        >
          <div>
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

            <template v-else-if="currentStep === step.value">
              <app-icon
                v-if="step.currentStepIcon || currentStepIcon"
                :name="step.currentStepIcon || currentStepIcon"
                custom-class="h-8 w-8"
              />
              <div
                v-else
                class="flex items-center justify-center h-8 w-8 rounded-full border bg-black text-white border-black"
              >
                {{ index + 1 }}
              </div>
            </template>

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

  <template v-else>
    <template v-for="(step, index) in steps" :key="step.value">
      <!-- <div> -->
      <div
        v-if="index < steps.length"
        class="ml-2.5 !h-[30px] !w-[1.5px] rounded-full bg-web-gray-2"
        :class="{
          '!text-dark-green-2': isStepCompleted(step.value),
          '!text-black': currentStep === step.value,
        }"
      ></div>
      <!-- <div
        v-if="index < steps.length"
        class="ml-2.5 !h-[30px] !w-[1.5px] rounded-full bg-web-gray-2"
        :class="{
          'text-dark-green-2': isStepCompleted(step.value),
          'text-black': currentStep === step.value,
          'web-gray-2':
            !isStepUpcoming(step.value) && currentStep !== step.value,
        }"
      ></div> -->

      <div
        class="flex flex-col gap-4 py-2"
        :class="allowStepClick ? 'cursor-pointer' : 'cursor-not-allowed'"
        @click="handleStepClick(step.value)"
      >
        <div class="flex item-center gap-2">
          <template v-if="isStepCompleted(step.value)">
            <app-icon
              v-if="step.checkedIcon || checkedIcon"
              :name="step.checkedIcon || checkedIcon"
              custom-class="h-5 w-5"
            />
            <div
              v-else
              class="flex items-center justify-center h-5 w-5 rounded-full border !bg-green-500 !border-green-500"
            >
              {{ index + 1 }}
            </div>
          </template>

          <template v-else-if="currentStep === step.value">
            <app-icon
              v-if="step.currentStepIcon || currentStepIcon"
              :name="step.currentStepIcon || currentStepIcon"
              custom-class="h-5 w-5"
            />
            <div
              v-else
              class="flex items-center justify-center h-5 w-5 rounded-full border bg-black text-white border-black"
            >
              {{ index + 1 }}
            </div>
          </template>

          <template v-else>
            <app-icon
              v-if="step.uncheckedIcon || uncheckedIcon"
              :name="step.uncheckedIcon || uncheckedIcon"
              custom-class="h-5 w-5"
            />
            <div
              v-else
              class="flex items-center justify-center h-5 w-5 rounded-full border bg-transparent text-gray-400 border-gray-300"
            >
              {{ index + 1 }}
            </div>
          </template>

          <span
            class="text-sm !font-medium"
            :class="currentStep === step.value ? 'text-black' : 'text-gray-400'"
          >
            {{ step.title }}
          </span>
        </div>
      </div>

      <div
        v-if="index === steps.length - 1"
        class="ml-2.5 !h-[60px] !w-[1.5px] rounded-full bg-web-gray-2"
      ></div>
    </template>
  </template>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue"
  import AppIcon from "../AppIcon"

  interface Step {
    title: string
    value: string
    checkedIcon?: string
    uncheckedIcon?: string
    currentStepIcon?: string
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
      currentStepIcon: {
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
      type: {
        type: String,
        default: "horizontal",
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

<!--
USAGE EXAMPLES

<Steps
  :steps="[
    { title: 'Enter details', description: 'Fill your name and email', status: 'complete', tag: 'Done', tagColor: 'bg-green-100' },
    { title: 'Upload ID', description: 'Selfie and ID images', status: 'current', tag: 'Required', tagColor: 'bg-yellow-100' },
    { title: 'Review', description: 'We will verify', status: 'pending' }
  ]"
  orientation="vertical"
  :activeIndex="currentStep"
  @update:activeIndex="(i) => currentStep = i"
/>

Default orientation is 'horizontal' — pass orientation="vertical" to switch.

-->

<!-- 
<template>
  <div :class="['w-full  ', orientationClass]">
    <ol
      :class="[
        'flex',
        orientation === 'horizontal' ? 'flex items-center' : 'flex-col',
        'gap-4 w-full',
      ]"
      role="list"
    >
      <li
        v-for="(step, index) in steps"
        :key="index"
        class="flex items-start space-x-3"
        :class="orientation === 'horizontal' && 'flex-1'"
      >
        <div class="flex-shrink-0 bg-green">
          <div
            :class="[
              'w-8 h-8 rounded-full flex items-center justify-center border',
              index === activeIndex ? 'border-2' : 'border',
              indicatorClass(step, index),
            ]"
            @click="setActive(index)"
            role="button"
            :aria-current="index === activeIndex ? 'step' : false"
          >
            <span class="text-xs font-semibold">{{ index + 1 }}</span>
          </div>

          <div
            v-if="orientation === 'vertical' && index !== steps.length - 1"
            class="w-px h-6 mx-auto"
            :class="connectorClass(step, index)"
          />
        </div>

        <div :class="['min-w-0', contentClass]">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <h4 class="text-sm font-medium">{{ step.title }}</h4>
              <span
                v-if="step.tag"
                class="text-xxs px-2 py-0.5 rounded-md"
                :class="tagClass(step)"
                >{{ step.tag }}</span
              >
            </div>
            <div v-if="showStatus" class="text-xxs">
              {{ step.status || "" }}
            </div>
          </div>

          <p v-if="step.description" class="text-xs text-gray-500 mt-1">
            {{ step.description }}
          </p>
        </div>
      </li>
    </ol>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed, PropType } from "vue"

  interface StepItem {
    title: string
    description?: string
    status?: string
    tag?: string
    tagColor?: string
  }

  export default defineComponent({
    name: "Steps",
    props: {
      steps: {
        type: Array as PropType<StepItem[]>,
        required: true,
        default: () => [],
      },
      orientation: {
        type: String as PropType<"horizontal" | "vertical">,
        default: "horizontal",
      },
      activeIndex: {
        type: Number,
        default: 0,
      },
      showStatus: {
        type: Boolean,
        default: false,
      },
      compact: {
        type: Boolean,
        default: false,
      },
    },
    emits: ["update:activeIndex", "change"],
    setup(props, { emit }) {
      const orientation = computed(() => props.orientation || "horizontal")
      const activeIndex = computed(() => props.activeIndex ?? 0)
      const showStatus = computed(() => props.showStatus ?? false)
      const compact = computed(() => props.compact ?? false)

      const orientationClass = computed(() =>
        orientation.value === "horizontal" ? "px-2" : "px-0"
      )

      const contentClass = computed(() =>
        orientation.value === "horizontal" && !compact.value ? "w-60" : "flex-1"
      )

      const setActive = (i: number): void => {
        emit("update:activeIndex", i)
        emit("change", i)
      }

      const indicatorClass = (step: StepItem, index: number): string => {
        const base: string[] = []
        if (index === activeIndex.value) base.push("bg-white shadow")
        const color =
          step.tagColor ||
          (step.status === "complete"
            ? "bg-green-100"
            : step.status === "error"
            ? "bg-red-100"
            : "bg-gray-100")
        base.push(color)
        return base.join(" ")
      }

      const connectorClass = (step: StepItem, index: number): string =>
        index < activeIndex.value ? "bg-green-200" : "bg-gray-200"

      const tagClass = (step: StepItem): string => {
        const color = step.tagColor || "bg-gray-100 text-gray-700"
        return color.includes(" ")
          ? color
          : `${color} text-xxs px-2 py-0.5 rounded-md`
      }

      return {
        orientation,
        activeIndex,
        showStatus,
        compact,
        orientationClass,
        contentClass,
        setActive,
        indicatorClass,
        connectorClass,
        tagClass,
      }
    },
  })
</script>

<style scoped>
  .text-xxs {
    font-size: 0.625rem;
  }
</style>

 -->
