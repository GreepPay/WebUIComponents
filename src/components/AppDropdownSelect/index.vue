<template>
  <div ref="dropdownRef" class="relative inline-block">
    <button
      @click="toggleDropdown"
      class="flex items-center justify-center !w-fit py-2 !px-0 space-x-3 rounded-[40px] border bg-white shadow"
    >
      <div class="flex items-center space-x-3 !w-fit">
        <img
          v-if="selectedOption"
          :src="selectedOption.icon"
          alt="icon"
          class="size-6"
        />
        <span v-if="showTitle" class="text-sm">{{
          selectedOption?.title
        }}</span>
      </div>

      <app-icon
        name="chevron-down"
        :custom-class="`h-2 transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`"
      />
    </button>

    <transition
      enter-active-class="transition-opacity transform duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-opacity transform duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute mt-1 min-w-max bg-white shadow-lg rounded-lg z-50 border"
      >
        <ul class="py-1">
          <li
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option)"
            class="flex items-center px-4 py-1.5 hover:bg-gray-100 cursor-pointer space-x-2 text-sm"
          >
            <img :src="option.icon" alt="icon" class="w-4 h-4" />
            <span v-if="showTitle">{{ option.title }}</span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue"
  import AppIcon from "../AppIcon/index.vue"
  import { AppNormalText } from "../AppTypography"

  export default defineComponent({
    name: "CustomSelectDropdown",
    components: {
      AppIcon,
    },
    props: {
      options: {
        type: Array as () => { title: string; icon: string; value: string }[],
        required: true,
      },
      showTitle: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const isOpen = ref(false)
      const selectedOption = ref(props.options[0])
      const dropdownRef = ref<HTMLElement | null>(null)

      const toggleDropdown = () => {
        isOpen.value = !isOpen.value
      }

      const selectOption = (option: {
        title: string
        icon: string
        value: string
      }) => {
        selectedOption.value = option
        isOpen.value = false
      }

      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.value &&
          !dropdownRef.value.contains(event.target as Node)
        ) {
          isOpen.value = false
        }
      }

      onMounted(() => {
        document.addEventListener("click", handleClickOutside)
      })

      onBeforeUnmount(() => {
        document.removeEventListener("click", handleClickOutside)
      })

      return {
        isOpen,
        toggleDropdown,
        selectOption,
        selectedOption,
        dropdownRef,
      }
    },
  })
</script>

<style scoped>
  button {
    min-width: 100px;
  }
</style>
