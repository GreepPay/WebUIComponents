<template>
  <div
    @click="toggleSelect"
    class="flex w-full flex-row space-x-2 items-center cursor-pointer"
  >
    <app-icon
      v-if="variant === 'normal'"
      :name="selected ? 'checkbox-active' : 'checkbox'"
      :customClass="iconClass"
    />
    <app-icon
      v-if="variant === 'tick'"
      :name="selected ? 'tick-circle-active' : 'checkbox'"
      :customClass="iconClass"
    />
    <app-icon
      v-if="variant === 'switch'"
      :name="selected ? 'switch-on' : 'switch-off'"
      :customClass="iconClass"
    />

    <div class="flex flex-row space-x-2 items-center select-none">
      <!-- Label slot -->
      <slot name="label">
        <app-normal-text
          customClass="!flex-1"
          :class="
            selected
              ? '!text-black !font-medium !text-base'
              : '!text-very-light-gray'
          "
        >
          {{ label }}
        </app-normal-text>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref, watch } from "vue"
  import AppIcon from "../AppIcon/index.vue"

  export default {
    components: { AppIcon },
    name: "AppCheckbox",
    emits: ["update:modelValue"],
    props: {
      modelValue: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: "",
      },
      iconClass: {
        type: String,
        default: "!h-8",
      },
      variant: {
        type: String as () => "normal" | "switch" | "tick",
        default: "normal",
      },
      mode: {
        type: String as () => "checkbox" | "radio",
        default: "checkbox", // "checkbox" = toggleable, "radio" = always on when clicked
      },
    },
    setup(props, { emit }) {
      const selected = ref(props.modelValue)

      // keep local state in sync with v-model
      watch(
        () => props.modelValue,
        (newValue) => {
          selected.value = newValue
        }
      )

      const toggleSelect = () => {
        if (props.mode === "radio") {
          // radio mode → always true when clicked
          if (!selected.value) {
            selected.value = true
          }
        } else {
          // checkbox mode → toggle
          selected.value = !selected.value
        }
        emit("update:modelValue", selected.value)
      }

      return {
        selected,
        toggleSelect,
      }
    },
  }
</script>
