<template>
  <div class="relative inline-block">
    <button
      @click="toggleDropdown"
      class="flex items-center justify-center !w-fit py-2 space-x-3 rounded-[40px] border bg-white shadow"
    >
      <div class="flex items-center space-x-3 !w-fit">
        <img
          v-if="selectedOption"
          :src="selectedOption.icon"
          alt="icon"
          class="size-8"
        />
        <span v-if="showTitle">{{ selectedOption?.title }}</span>
      </div>

      <app-icon
        name="chevron-down"
        :custom-class="`h-2 transition-transform duration-300  ${
          isOpen && 'rotate-180'
        }  `"
      />
    </button>

    <transition
      enter-active-class="transition-opacity transform duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-opacity transform duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95 "
    >
      <div
        v-if="isOpen"
        class="absolute mt-1 w-full bg-white shadow-lg rounded-lg z-50"
      >
        <ul>
          <li
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option)"
            class="flex items-center justfy-center px-4 py-2 hover:bg-gray-100 cursor-pointer space-x-2"
          >
            <img :src="option.icon" alt="icon" class="w-5 h-5 mr-2" />
            <!-- <span v-if="showTitle">{{ option.title }}</span> -->
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue"
  import AppIcon from "../AppIcon/index.vue"

  /**
   * Custom Select Dropdown Component
   *
   * This component displays a dropdown menu that defaults to showing only icons,
   * but can also display titles based on a prop. It allows users to select an option
   * from a provided list of options.
   *
   * Features:
   * - Displays icons by default.
   * - Option to show titles using a prop.
   * - Dynamic list of selectable options.
   * - Styled with Tailwind CSS.
   *
   * Props:
   * @prop {Array} options - List of selectable options [{ title, icon, value }].
   * @prop {Boolean} showTitle - Determines if titles should be displayed (default: false).
   */
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

      return { isOpen, toggleDropdown, selectOption, selectedOption }
    },
  })
</script>

<style scoped>
  button {
    min-width: 100px;
  }
</style>
