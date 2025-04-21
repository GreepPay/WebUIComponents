<template>
  <div :class="['flex items-center w-full space-x-3 rounded', customClass]">
    <div
      class="relative w-full flex items-center space-x-3 bg-white rounded-3xl px-4 py-2"
    >
      <app-icon name="search" custom-class="h-5" />

      <input
        v-model="searchQuery"
        :placeholder="placeholder"
        class="w-full text-very-light-gray text-sm py-2 border-none outline-none"
      />

      <button
        v-if="searchQuery"
        @click="clearSearch"
        class="text-gray-500 hover:text-very-light-gray"
      >
        ✕
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, watch } from "vue"
  import AppIcon from "../AppIcon"

  export default defineComponent({
    name: "AppSearch",
    components: { AppIcon },
    props: {
      placeholder: {
        type: String,
        default: "Search...",
      },
      customClass: {
        type: String,
        default: "",
      },
    },
    setup(_, { emit }) {
      const searchQuery = ref("")

      watch(searchQuery, (newValue) => {
        emit("update:search", newValue)
      })

      const clearSearch = () => {
        searchQuery.value = ""
      }

      return { searchQuery, clearSearch }
    },
  })
</script>
